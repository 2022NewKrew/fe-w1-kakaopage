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

홈 (json/home.json)
└─┬ 배너 (type: "banner")
  │
  ├ 피처링 (type: "featuring")
  │ 
  ├ 카로셀 (type: "carousel")
  │ 
  ├ 요일 연재 TOP (type:"weekly-top")
  │ 
  ├ 기대신작 TOP (type: "big-item-section")
  │ 
  ├ 로맨스 TOP (type: "small-item-section")
  │ 
  ├ 로판 TOP (type: "small-item-section")
  │ 
  ├ 드라마 TOP (type: "small-item-section")
  │ 
  ├ BL/GL TOP (type: "small-item-section")
  │ 
  ├ 소년 TOP (type: "small-item-section")
  │ 
  ├ 액션무협 TOP (type: "small-item-section")
  │ 
  ├ 일간 랭킹 TOP (type: "list-item-section")
  │ 
  └ 추천 이벤트 (type: "banner-item-section")

요일연재 (json/weekly.json)
└─┬ 배너
  │ 
  ├ 요일별 만화
  │
  └ 추천 이벤트

웹툰 (json/webtoon.json)
└─┬ 요일
  │ 
  └ 요일별 만화


```
