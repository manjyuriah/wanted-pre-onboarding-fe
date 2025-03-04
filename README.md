# :: 원티드 프리온보딩 프론트엔드 코스 사전과제


## 배포된 사이트

[배포된 사이트] [https://preonboarding-course-fe.netlify.app](https://preonboarding-course-fe.netlify.app)

## 소개
안녕하세요 1년차 프론트엔드 개발자 김민주입니다. 
비전공자로 6개월간 프론트엔드 국비교육을 이수했으나, 더 깊게 배워보고싶어 원티드 프리온보딩코스를 신청하게 되었습니다. 
독학으로 채워지지않는 코드리뷰, 협업, 실무환경 등을 배우며 성장하고싶습니다.

- 함수형 컴포넌트로 개발(React Hooks)
- 사용한 Hook : uesRef / useState / useEffect
- ESLint , prettier로 통일되고 깔끔한 코드 사용
- SCSS사용으로 반복되는 코드 사용 줄임
- React-icons라이브러리로 보다 편한 아이콘 사용
- Netlify를 이용해 사이트 배포

### Login
- 로그인시에 Main Page로 이동
- 유효성 검사 후 Ref로 스타일 수정
- id 와 패스워드를 입력 후 로그인이 정상적으로 이뤄졌을때 해당 정보를 Local Storage에 id,pw 이름으로 저잗
- 로그아웃시 Local Storage의 정보 삭제
- 로그인을 하지 않은 채 url을 통해 메인으로 접근 시도 , Local Storage의 정보 확인 후 경고창 띄움

### GNB
- 사용한 라이브러리 : React Router - link , useNavigate
- 최상단에 고정되는 `sticky` GNB를 만들어 스크롤을 내려도 항상 유지되게 구현
- 미디어 쿼리를 사용해 디바이스 크기가 줄어들 경우 가운데 Input 창을 사라지게 구현

### Validation
- 아이디, 비밀번호입력 후 유효성 검사를 실행 
-> 통과시 로그인 버튼 css 변경 및 활성화로 메인 페이지로 넘어 갈 수 있게 구현
-> 실패시 아이디,비밀번호 입력창의 보더 색상 변경 및 로그인 버튼 비활성화
- 아이디(이메일), 비밀번호 유효성
  - 아이디 조건 - `@` , `.` 포함
  - 비밀번호 조건 - 대문자, 숫자, 특수문자 포함 8자리 이상
- 로그아웃을 하지 않고 다시 들어와 정보 입력시 Local Storage에 저장된 이메일과 비밀번호와 일치 여부 확인


### Feeds

- 반복되는 피드를 컴포넌트로 따로 작성해 GNB 페이지에 출력
- 출력되는 세개의 Feed 정보는 public/data 디렉토리에 json형식으로 구성하여 fetch로 출력
- 각각의 Feed에 댓글을 추가시 댓글 갯수가 1씩 증가('게시'버튼 및 엔터 모두 사용 가능) -> 댓글 입력 후 댓글창 초기화
- Feed의 이미지는 각 사이즈에 맞춰 피드에 출력
- image.onload를 이용해 Feed의 이미지가 로딩된 후 전체 GNB 컴포넌트가 로딩

# :: 어려웠던 부분
- map으로 json 리스트 가져와 출력했더니 반복으로 html이 생성 ->
   피드의 댓글창들이 동기화되는 문제
   댓글 등록시 +1이 모든 피드에 동일하게 적용
   
**해결**

feed컴포넌트 자체를 배열로 불러와 반복 출력 -> feed안에서는 반복될 일이 없음

---
