# Pages Router Compatibility Folder

⚠️ **이 폴더는 Next.js Pages Router 호환성을 위한 빈 폴더입니다.**

## 용도

- Next.js는 `app/`와 `pages/`가 같은 레벨에 있어야 합니다
- 루트에 `app/` (App Router)가 있고, `src/pages/` (FSD pages layer)가 있어서
- Next.js가 인식할 수 있도록 루트에 빈 `pages/` 폴더를 생성했습니다

## 주의사항

- **이 폴더에는 라우팅 파일을 추가하지 마세요**
- 모든 라우팅은 루트 `app/` 폴더에서 관리됩니다
- 실제 페이지 컴포넌트는 `src/pages/` (FSD pages layer)에 작성됩니다
