# Acci - FSD 절대경로 설정 가이드

교통사고 영상 분석 플랫폼을 위한 FSD(Feature-Sliced Design) 아키텍처 절대경로 설정 가이드입니다.

## 📁 설정된 절대경로

```typescript
// tsconfig.json
"paths": {
  "@/*": ["./src/*"],           // 전체 src 폴더
  "@/app/*": ["./src/app/*"],   // App Router
  "@/pages/*": ["./src/pages/*"], // 페이지 레이어
  "@/widgets/*": ["./src/widgets/*"], // 위젯 레이어
  "@/features/*": ["./src/features/*"], // 기능 레이어
  "@/entities/*": ["./src/entities/*"], // 엔티티 레이어
  "@/shared/*": ["./src/shared/*"] // 공유 레이어
}
```

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

### 4. Pages에서 Widgets와 Features 사용

```typescript
// src/pages/home/ui/home-page.tsx
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { LoginForm } from "@/features/auth";
import { Button } from "@/shared/ui/button";
```

### 5. App에서 Pages 사용

```typescript
// src/app/page.tsx
import { HomePage } from "@/pages/home";
import { Button } from "@/shared/ui/button";
```

## 🚫 금지된 import 패턴

### ❌ 잘못된 예시

```typescript
// shared에서 상위 레이어 import (금지)
import { HomePage } from "@/pages/home"; // ❌

// entities에서 features import (금지)
import { LoginForm } from "@/features/auth"; // ❌

// features에서 pages import (금지)
import { HomePage } from "@/pages/home"; // ❌
```

### ✅ 올바른 예시

```typescript
// 상위 레이어에서 하위 레이어 import (허용)
import { Button } from "@/shared/ui/button"; // ✅
import { User } from "@/entities/user"; // ✅
import { LoginForm } from "@/features/auth"; // ✅
```

## 📋 FSD 레이어 의존성 규칙

1. **app** → pages, widgets, features, entities, shared
2. **pages** → widgets, features, entities, shared
3. **widgets** → features, entities, shared
4. **features** → entities, shared
5. **entities** → shared
6. **shared** → (다른 레이어 import 금지)

## 🔧 추가 설정

### Next.js 설정 (next.config.ts)

```typescript
const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true, // 타입 안전한 라우팅
  },
};
```

이제 FSD 아키텍처에 맞는 절대경로를 사용하여 깔끔하고 일관된 import 구조를 유지할 수 있습니다!
