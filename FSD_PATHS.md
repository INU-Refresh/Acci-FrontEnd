# Acci - FSD 절대경로 설정 가이드

교통사고 영상 분석 플랫폼을 위한 FSD(Feature-Sliced Design) 아키텍처 절대경로 설정 가이드입니다.

> ✅ **FSD 공식 권장 구조 적용 완료**  
> 이 프로젝트는 FSD 공식 문서의 권장사항을 따릅니다:
>
> - 루트 `app/`: NextJS App Router (라우팅만)
> - `src/app/`: FSD app layer (providers, config만)
> - `src/pages/`: FSD pages layer (페이지 컴포넌트)

## 📁 프로젝트 구조

```
Acci-FrontEnd/
├── app/                    # NextJS App Router 폴더 (라우팅 진입점)
│   ├── page.tsx           # 라우트 페이지들
│   ├── layout.tsx         # @/app/providers를 사용
│   ├── globals.css        # 전역 스타일
│   ├── admin/
│   │   └── page.tsx
│   ├── auth/
│   │   └── page.tsx
│   ├── analyze/
│   │   ├── page.tsx
│   │   ├── upload/
│   │   ├── loading/
│   │   └── result/
│   ├── repair-estimate/
│   ├── my-page/
│   ├── policies/
│   └── oauth2/
├── pages/                  # NextJS Pages Router 호환성 폴더 (빈 폴더)
│   └── README.md          # ⚠️ 라우팅 파일 추가 금지
└── src/
    ├── app/               # FSD app layer (providers, config만)
    │   └── providers.tsx  # 전역 providers (ReactQuery 등)
    ├── pages/             # FSD pages layer (페이지 컴포넌트)
    │   ├── home/
    │   ├── admin/
    │   ├── analyze/
    │   ├── repair-estimate/
    │   ├── my-page/
    │   ├── policies/
    │   └── auth/
    ├── widgets/           # FSD widgets layer
    │   ├── header/
    │   ├── footer/
    │   ├── home/
    │   └── ...
    ├── features/          # FSD features layer
    │   ├── auth/
    │   ├── analyze/
    │   └── repair-estimate/
    ├── entities/          # FSD entities layer
    │   ├── user/
    │   ├── analysis/
    │   ├── repair-estimate/
    │   └── vehicle/
    └── shared/            # FSD shared layer
        ├── api/
        ├── ui/
        ├── lib/
        ├── store/
        └── icons/
```

### ⚠️ 중요: 루트 `pages/` 폴더에 대해

Next.js는 `app/`와 `pages/`가 같은 레벨에 있어야 합니다.
루트 `pages/` 폴더는 **빈 폴더로 유지**하며, Next.js Pages Router 호환성을 위해서만 존재합니다.

- **라우팅 파일은 추가하지 마세요**: 모든 라우팅은 `app/`에서 관리
- **FSD pages layer와 혼동하지 마세요**: 실제 페이지 컴포넌트는 `src/pages/`에 작성

## 📁 설정된 절대경로

```typescript
// tsconfig.json
"paths": {
  "@/*": ["./src/*"],                    // 전체 src 폴더
  "@/app/*": ["./src/app/*"],            // FSD app layer (providers, global config)
  "@/pages/*": ["./src/pages/*"],        // 📌 FSD pages layer (페이지 컴포넌트)
  "@/widgets/*": ["./src/widgets/*"],    // 위젯 레이어
  "@/features/*": ["./src/features/*"],  // 기능 레이어
  "@/entities/*": ["./src/entities/*"],  // 엔티티 레이어
  "@/shared/*": ["./src/shared/*"]       // 공유 레이어
}
```

### 📌 중요: 레이어별 역할

- **루트 `app/` 폴더**: NextJS App Router (라우팅 진입점만 담당)
  - `page.tsx`, `layout.tsx`, `loading.tsx` 등 Next.js 라우팅 규칙 파일들
  - FSD pages layer의 컴포넌트를 import하여 사용
- **`@/app/*` (src/app/)**: FSD app layer (providers, global config만)
  - `providers.tsx`: 전역 providers (ReactQuery, Theme 등)
  - 전역 설정 파일들
  - **라우팅 파일은 포함하지 않음**
- **`@/pages/*` (src/pages/)**: FSD pages layer
  - 실제 페이지 컴포넌트 구현
  - widgets, features, entities, shared import 가능
  - **라우팅 폴더가 아님** (컴포넌트 저장소)

## 🎯 사용 예시

### 1. Shared 레이어에서 다른 Shared 레이어로

```typescript
// src/shared/ui/button.tsx
import { cn } from "@/shared/lib/utils";
```

### 2. Features에서 Shared 사용

```typescript
// src/features/auth/ui/login-form.tsx
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";
```

### 3. Widgets에서 Shared 사용

```typescript
// src/widgets/header/ui/header.tsx
import { Container } from "@/shared/ui/container";
import { cn } from "@/shared/lib/utils";
```

### 4. Pages (FSD)에서 Widgets와 Features 사용

```typescript
// src/pages/home/HomePage.tsx (FSD pages layer)
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { HeroSection } from "@/widgets/home";
import { Button } from "@/shared/ui/button";
```

### 5. App Router에서 Pages 사용 ✅

```typescript
// app/page.tsx (NextJS App Router)
import HomePage from "@/pages/home/HomePage";
import { getUserInfo } from "@/entities/user/api/get-user-info";

export default async function Page() {
  const initialUserInfo = await getUserInfo();
  return <HomePage initialUserInfo={initialUserInfo} />;
}
```

```typescript
// app/layout.tsx (루트 레이아웃)
import { Providers } from "@/app/providers";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

```typescript
// src/app/providers.tsx (FSD app layer)
"use client";

import { ReactQueryProvider } from "@/shared/lib/react-query";

export function Providers({ children }) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
```

## 🚫 금지된 import 패턴

### ❌ 잘못된 예시

```typescript
// shared에서 상위 레이어 import (금지)
import { HomePage } from "@/pages/home"; // ❌

// entities에서 features import (금지)
import { LoginForm } from "@/features/auth"; // ❌

// features에서 pages import (금지)
import { SomePage } from "@/pages/home"; // ❌

// Pages에서 App Router 직접 접근 (금지)
import { useRouter } from "next/navigation"; // ❌ (Pages 컴포넌트는 "use client"을 지양)
```

### ✅ 올바른 예시

```typescript
// FSD 의존성 규칙 준수 (상위 → 하위)
import { Button } from "@/shared/ui/button"; // ✅
import { User } from "@/entities/user"; // ✅
import { LoginForm } from "@/features/auth"; // ✅
import HomePage from "@/pages/home/HomePage"; // ✅ (App Router에서만)
```

## 📋 FSD 레이어 의존성 규칙

```
app/ (루트 - NextJS App Router)
  ↓ import
@/app (FSD app layer - providers)
  ↓ import
@/pages (FSD pages layer)
  ↓ import
@/widgets + @/features
  ↓ import
@/entities
  ↓ import
@/shared
```

### 의존성 사슬 (상위 → 하위만 가능)

1. **app/** (루트 - App Router) → @/app, @/pages, @/widgets, @/features, @/entities, @/shared
   - NextJS 라우팅 진입점
   - Server/Client Components 구분
2. **@/app** (FSD app layer) → @/shared만
   - 전역 Providers (ReactQuery, Theme 등)
   - Global configuration
   - **다른 FSD 레이어 import 금지**
3. **@/pages** (FSD pages layer) → @/widgets, @/features, @/entities, @/shared
   - 페이지 컴포넌트 (화면 구성)
4. **@/widgets** → @/features, @/entities, @/shared
   - 기능 조합 (헤더, 푸터 등)
5. **@/features** → @/entities, @/shared
   - 비즈니스 로직 (인증, 분석 등)
6. **@/entities** → @/shared
   - 데이터 모델 (User, Analysis 등)
7. **@/shared** → 다른 레이어 불가
   - 기본 UI, 유틸, 상수

## 🔧 추가 설정

### Next.js 설정 (next.config.ts)

```typescript
const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@/shared/ui", "@/shared/icons"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};
```

### TypeScript 경로 설정 (tsconfig.json)

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/app/*": ["./src/app/*"],
      "@/pages/*": ["./src/pages/*"],
      "@/widgets/*": ["./src/widgets/*"],
      "@/features/*": ["./src/features/*"],
      "@/entities/*": ["./src/entities/*"],
      "@/shared/*": ["./src/shared/*"]
    }
  }
}
```

## 📌 App Router + FSD 적용 시 주의사항

### 1. 폴더 역할 구분

- **루트 `app/`**: NextJS App Router (라우팅만)
  - `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx` 등
  - FSD pages layer 컴포넌트를 import
- **`src/app/`**: FSD app layer (providers, config만)
  - `providers.tsx`: 전역 providers
  - 설정 파일들
  - **라우팅 파일 금지**
- **`src/pages/`**: FSD pages layer (페이지 컴포넌트)
  - 실제 페이지 UI 구현
  - **라우팅 폴더 아님**

### 2. Server/Client Components 분리

```typescript
// src/pages/home/HomePage.tsx
// Server Component 기본
import { getUserInfo } from "@/entities/user/api";

export default function HomePage({ initialUserInfo }) {
  return <div>{/* ... */}</div>;
}
```

```typescript
// src/features/auth/ui/login-form.tsx
"use client"; // Client Component 명시

import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  return <form>{/* ... */}</form>;
}
```

### 3. Import 자동완성

`@/pages`, `@/widgets` 등의 경로 alias를 사용하면 IDE 자동완성이 정확하게 작동합니다.

### 4. FSD app layer 사용 예시

```typescript
// src/app/providers.tsx
"use client";

import { ReactQueryProvider } from "@/shared/lib/react-query";
import { ThemeProvider } from "@/shared/ui/theme-provider";

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </ThemeProvider>
  );
}
```

```typescript
// app/layout.tsx
import { Providers } from "@/app/providers";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

---

이제 FSD 아키텍처에 맞는 절대경로를 사용하여 깔끔하고 일관된 import 구조를 유지할 수 있습니다!
