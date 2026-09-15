# 전하영 HTML 포트폴리오

`index.html`을 브라우저에서 열면 실행됩니다. HTML, CSS, JavaScript로 만들었으며 빌드 과정은 없습니다.

로컬 미리보기:

```sh
cd /Users/vosnuevo/Desktop/SKN28-repos-with-my-contributions/portfolio/site
python3 -m http.server 8765 --bind 127.0.0.1
```

브라우저에서 http://127.0.0.1:8765 에 접속합니다. 이 폴더 전체를 정적 호스팅에 업로드할 수도 있습니다. 이번 작업에서는 공개 배포하지 않았습니다.

- `index.html`: 메인 소개·출결 사례·역량·연락처
- `styles.css`: 25pt 본문, 요청한 5색 팔레트, 모바일/인쇄 스타일
- `projects.js`: 프로젝트 설명·성과·차트 데이터·근거 링크
- `app.js`: 카드, hash 주소 기반 상세 이동, 차트 및 접근 가능한 표
- `assets/sources.json`: 실제 화면과 원본 도식 출처
- `assets/resume.pdf`: 기존 2026-08-28 이력서 원본

상세 주소는 `#project/cozy`, `#project/agent`, `#project/churn`, `#project/parking`입니다. 링크 공유, 새로고침, 브라우저 뒤로가기를 지원합니다.

본문은 25pt(33.333px)입니다. 메뉴·보조 라벨·기기 요약·표에는 별도의 크기를 사용합니다. 외부 폰트 로딩에 실패해도 시스템 sans-serif로 표시됩니다. 프로젝트 데이터는 로컬에서 로드되며 별도 API나 비밀값은 필요하지 않습니다.

출결 누락률 80%→5%, 리뷰 388,918건은 사용자 확인에 따라 반영했습니다. 출결 화면은 실제 화면 자료 대신 처리 흐름 다이어그램으로 표현했습니다. 후보 비교, 개인 실험, 실제 구현 및 향후 개선을 구분했습니다.

## VS Code에서 수정하는 위치

`projects.js`는 내용 파일입니다. 각 프로젝트 객체의 `cardTitle`, `cardCopy`, `summary`, `problem`, `decisions`, `result`, `limitations`, `next`, `architecture`, `chart`, `evidence`를 수정하면 화면 카드와 상세 페이지에 반영됩니다.

`styles.css`는 디자인 파일입니다. `:root`의 색상 변수와 글꼴, 화면별 선택자, 마지막의 반응형 규칙을 수정합니다. `app.js`는 연결 기능 파일로 카드 생성, 프로젝트 클릭, `#project/...` 주소, 차트와 표 렌더링을 담당합니다. 화면 문구를 바꿀 때는 `app.js`보다 `projects.js`를 먼저 확인하세요.

HTML 주석은 `<!-- ... -->`, CSS 주석은 `/* ... */`, JavaScript 주석은 `// ...` 또는 `/* ... */`를 사용했습니다. 요청하신 `#` 표시는 각 언어에서 문법 오류가 되므로 파일에 맞는 주석 문법으로 작성했습니다.

VS Code에서는 `portfolio/site` 폴더를 열고 `index.html`, `projects.js`, `styles.css`, `app.js`를 나란히 열면 구조·내용·디자인·동작을 분리해 확인할 수 있습니다.

자동 검증은 `verify.cjs`에 있으며 이 작업 환경의 Playwright·Chrome 경로를 사용합니다. 다른 컴퓨터에서는 경로를 설치 환경에 맞춰 변경해야 합니다.
