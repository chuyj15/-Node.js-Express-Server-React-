# -Node.js-Express-Server-React-
2023년 12월 19일 - 9차 포트폴리오 평가 (Node.js 와 Express Server &amp; React 활용_5)


### 메모
(1) 클라이언트 측에서 "/" 경로로 서버에 요청할 때 자꾸 클라이언트측의 "/"경로로 가는 현상 발생. proxy설정을 했어도 마찬가지였음. => 아무래도 react에서 "/"경로만 proxy를 거치기 전에 자기자신의 서버로 보내는 것 같음. 
->  "/todo"경로로 클라이언트측, 서버측 모두 수정하여 오류 해결하였음

(2) cors 이슈 : 이것도 클라이언트 측에 proxy 설정을 통해 해결하였음 
