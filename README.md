# homepage_lab_site

연구실 홈페이지 소스 저장소 (Next.js + PNPM)

## 로컬 개발
```bash
pnpm install
pnpm dev
```

## 서버 배포(권장)
```bash
pnpm build
pnpm start
```

## GitHub Pages(정적) 배포 (선택)
1) `next.config.mjs`에 GitHub Pages 예시 블록을 참고해 주석 해제 및 `repoName` 설정
2) 내보내기
```bash
pnpm export
```
3) 배포
```bash
pnpm deploy:gh
```
Repository → Settings → Pages → Branch: `gh-pages` 선택

## 주의
- node_modules, .next, out 등은 Git에 포함하지 않습니다.
