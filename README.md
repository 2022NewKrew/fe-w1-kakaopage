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
  ├ 소년 (X)
  │ 
  ├ 드라마 (X)
  │ 
  ├ 로맨스 (X)
  │ 
  ├ 로판 (X)
  │ 
  ├ 액션무협 (X)
  │ 
  └ BL (X)

홈 (json/home.json)
└─┬ 큰 카로셀 (type: "big-carousel")
  │
  ├ 피처링 (type: "featuring")
  │ 
  ├ 카로셀 (type: "carousel")
  │ 
  ├ 요일 연재 TOP (type:"weekly-top")
  │ 
  ├ 기대신작 TOP (type: "big-item-section")
  │ 
  ├ 로맨스 TOP (type: "item-section")
  │ 
  ├ 로판 TOP (type: "item-section")
  │ 
  ├ 드라마 TOP (type: "item-section")
  │ 
  ├ BL/GL TOP (type: "item-section")
  │ 
  ├ 소년 TOP (type: "item-section")
  │ 
  ├ 액션무협 TOP (type: "item-section")
  │ 
  ├ 일간 랭킹 TOP (type: "list-item-section")
  │ 
  └ 추천 이벤트 (type: "banner-item-section")

요일연재 (json/weekly.json)
└─┬ 큰 카로셀 (type: "big-carousel")
  │ 
  └ 요일별 만화 (type: "weekly")

웹툰 (json/webtoon.json)
└─┬ 큰 카로셀 (type: "big-carousel")
  │ 
  └ 요일별 만화 (type: "weekly-webtoon")
```

## Sections
``` json
{
  "type": "big-carousel",
  "items": [
    {
      "image": "<url>",
      "title": "<string>",
      "desc": "<string>"
    }
  ]
}

{
  "type": "featuring",
  "items": ["<string>", "<string>"]
}

{
  "type": "carousel",
  "items": [
    {
      "image": "<url>"
    }
  ]
}

{
  "type": "weekly-top",
  "title": "<string>",
  "items": {
    "mon": ["<item>", "<item>"],
    "tue": ["<item>", "<item>"],
    "wed": ["<item>", "<item>"],
    "thr": ["<item>", "<item>"],
    "fri": ["<item>", "<item>"],
    "sat": ["<item>", "<item>"],
    "sun": ["<item>", "<item>"]
  }
}

{
  "type": "big-item-section",
  "title": "<string>",
  "items": ["<item>", "<item>"]
}

{
  "type": "item-section",
  "title": "<string>",
  "items": ["<item>", "<item>"]
}
```

## item
```json
{
  "image": "<url>",
  "title": "<string>",
  "views": "<string>",
  "desc": "<string>",
  "star": "<string>",
  "tags": ["<url>", "<url>"]
}
```
