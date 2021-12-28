# fe-w1-kakaopage

## How to Run
Run simple local HTTP server, such as Python `http.server`, or
Node.js `http-server`.
`file://` protocol does not work since `fetch` API is required.

## KakaoPage Tree

``` 
main.html
└─┬ home.html (-> dummy.html)
  │ 
  ├ webtoon.html
  │ 
  ├ webfic.html (-> dummy.html)
  │ 
  ├ movie.html (-> dummy.html)
  │ 
  ├ broadcast.html (-> dummy.html)
  │ 
  └ book.html (-> dummy.html)
```

## Webtoon Tree
```
웹툰
└─┬ 홈
  │ 
  ├ 요일연재
  │ 
  ├ 웹툰
  │ 
  ├ 소년
  │ 
  ├ 드라마
  │ 
  ├ 로맨스
  │ 
  ├ 로판
  │ 
  ├ 액션무협
  │ 
  └ BL

홈
└─┬ 배너
  │
  ├ 피처링
  │ 
  ├ 카로셀
  │ 
  ├ 요일 연재 TOP
  │ 
  ├ 기대신작 TOP
  │ 
  ├ 로맨스 TOP
  │ 
  ├ 로판 TOP
  │ 
  ├ 드라마 TOP
  │ 
  ├ BL/GL TOP
  │ 
  ├ 소년 TOP
  │ 
  ├ 액션무협 TOP
  │ 
  ├ 일간 랭킹 TOP
  │ 
  └ 추천 이벤트

요일연재
└─┬ 배너
  │ 
  ├ 요일별 만화
  │
  └ 추천 이벤트

웹툰
└─┬ 요일
  │ 
  └ 요일별 만화


```
