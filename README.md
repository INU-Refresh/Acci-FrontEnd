# Acci - 교통사고 과실비율 측정 플랫폼

교통사고 영상을 AI가 분석하여 과실비율, 분석이유, 관련 판례를 제공하는 분쟁심의 지원 플랫폼입니다.

<br>

## 🔗 Acci 바로가기

<a href="https://acci-ai.vercel.app/"><b>https://acci-ai.vercel.app/</b></a>

<br>

## 🚀 기술 스택

프론트엔드 : Next.js 16 (App Router), React 19, TypeScript

스타일링 : Tailwind CSS

아키텍처 : Feature-Sliced Design (FSD)

린트 : ESLint

상태관리 : Zustand

라이브러리 : axios, shadcn-ui, clsx, tanstack-query

<br>

## UML 다이어그램

<div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 10px;">
  <img src="docs/images/UML_structural.png" width="300">
  <img src="docs/images/UML_deployment.png" width="300">
</div>
<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="docs/images/UML_behavioral.png" width="300">
  <img src="docs/images/UML_sequence.png" width="300">
</div>

<br>

## 기능명세서

<div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 10px;">
  <img src="docs/images/기능명세서1.png" width="300">
  <img src="docs/images/기능명세서2.png" width="300">
</div>
<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="docs/images/기능명세서3.png" width="300">
  <img src="docs/images/기능명세서4.png" width="300">
</div>

<br>

<!-- ## ERD 다이어그램 -->

## API 명세서

<div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 10px;">
  <img src="docs/images/API명세서.png" width="600">
</div>

<br>

## 프로젝트 일정표

<div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 10px;">
  <img src="docs/images/일정표.png" width="600">
</div>

<br>

## 📁 프로젝트 구조 (FSD)

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── pages/                  # 페이지 레이어
│   └── home/
├── widgets/                # 위젯 레이어
│   ├── header/
│   └── footer/
├── features/               # 기능 레이어
│   └── auth/
├── entities/               # 엔티티 레이어
│   └── user/
└── shared/                 # 공유 레이어
    ├── ui/                  # 공통 UI 컴포넌트
    ├── lib/                 # 유틸리티 함수
    ├── api/                 # API 클라이언트
    └── config/              # 설정 파일
```

<br>

## 🛠️ 개발 환경 설정

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 3. 빌드

```bash
npm run build
```

## 📋 주요 기능

- 🎥 **교통사고 영상 분석**: AI가 영상을 분석하여 사고 상황을 정확히 파악
- ⚖️ **과실비율 산정**: 객관적이고 정확한 과실비율을 AI가 계산
- 📝 **상세 분석 보고서**: 분석이유와 근거를 명확히 제시
- 📚 **관련 판례 제공**: 유사한 사고 사례와 법적 근거 제공
- 🤝 **분쟁심의 지원**: 보험사와의 분쟁심의 과정 지원
- ⚖️ **법률 서비스 연계**: 변호사 연결 및 재판 지원 서비스

## 🎯 서비스 특징

### AI 영상 분석 기술

- **컴퓨터 비전**: 차량, 보행자, 도로 상황을 정확히 인식
- **사고 시점 분석**: 정확한 사고 발생 순간과 원인 파악
- **교통법규 적용**: 도로교통법에 따른 과실 기준 적용

### 법적 근거 제공

- **판례 데이터베이스**: 수만 건의 교통사고 판례 분석
- **과실비율 기준**: 대법원 및 각급 법원의 판결 기준 적용
- **보험약관 연계**: 보험사별 약관과 연계한 분석

### 사용자 편의성

- **간편한 영상 업로드**: 드래그 앤 드롭으로 쉬운 영상 업로드
- **실시간 분석**: 빠른 AI 분석 결과 제공
- **상세한 보고서**: PDF 형태의 상세 분석 보고서 다운로드

## 🏗️ 아키텍처 설명

### FSD (Feature-Sliced Design) 레이어

1. **app**: Next.js 앱 라우터 설정
2. **pages**: 페이지 컴포넌트 (라우트별 페이지)
3. **widgets**: 독립적인 UI 블록 (헤더, 푸터 등)
4. **features**: 비즈니스 기능 (인증, 학습 등)
5. **entities**: 비즈니스 엔티티 (사용자, 게시물 등)
6. **shared**: 공통 코드 (UI, 유틸리티, 설정)

### 레이어 간 의존성 규칙

- 상위 레이어는 하위 레이어를 import할 수 있음
- 하위 레이어는 상위 레이어를 import할 수 없음
- 같은 레이어 내에서는 서로 import 가능
