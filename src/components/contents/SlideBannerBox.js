export const SlideBannerBox = () => {
  const $root = document.createElement("div");
  $root.className = "slideBannerBox";
  $root.innerHTML = `
    <div class="slideBannerBox__slider"></div>
    
    <div class="slideBannerBox__action">
      <img class="slideBannerBox__pervBtn" alt="previous button" src="https://static-page.kakao.com/static/pc/ic-banner-paging-back-nor.svg?85bef3b447d17ee7cbefa349c973fe56" >
      <img class="slideBannerBox__nextBtn" alt="next button" src="https://static-page.kakao.com/static/pc/ic-banner-paging-next-nor.svg?cf6a870397c04c13add6c27f1f735d93" >
      <div class="slideBannerBox__indicator">1 / 4</div>
    </div>
  `;

  let currentIndex = 0;
  const bannerList = getBannerList();
  const MAX_INDEX = bannerList.length - 1;

  const $action = $root.querySelector(".slideBannerBox__action");
  const $indicator = $root.querySelector(".slideBannerBox__indicator");
  const $slider = $root.querySelector(".slideBannerBox__slider");
  $slider.append(
    ...[
      SlideBannerTrack({ index: -1, content: bannerList[MAX_INDEX] }),
      ...bannerList.map((content, index) =>
        SlideBannerTrack({ index, content })
      ),
      SlideBannerTrack({ index: MAX_INDEX + 1, content: bannerList[0] }),
    ]
  );

  // set event

  $action.addEventListener("click", (e) => {
    const { className } = e.target;

    if (className === "slideBannerBox__pervBtn") {
      timerId = clearInterval(timerId);
      onSlide(currentIndex - 1);
    } else if (className === "slideBannerBox__nextBtn") {
      timerId = clearInterval(timerId);
      onSlide(currentIndex + 1);
    }
  });

  $slider.addEventListener("transitionend", () => {
    if (MAX_INDEX < currentIndex || currentIndex < 0) {
      $slider.style.transition = "none";
      currentIndex = currentIndex < 0 ? MAX_INDEX : 0;
      moveTrack();
    }
    renderIndicator();
    if (!timerId) timerId = timerAction();
  });

  const timerAction = () => setInterval(() => onSlide(currentIndex + 1), 3000);

  let timerId = timerAction();

  // render
  const renderIndicator = () => {
    $indicator.innerHTML = `${currentIndex + 1} / ${MAX_INDEX + 1}`;
  };

  const moveTrack = () => {
    const x = -720 * (currentIndex + 1);
    $slider.style.transform = `translateX(${x}px)`;
  };

  const onSlide = (index) => {
    $slider.style.transition = "transform 400ms ease-in-out";
    currentIndex = index;
    moveTrack();
  };

  // init
  renderIndicator();
  moveTrack();

  return $root;
};

// transform: translate3d(0px, 0px, 0px);
const SlideBannerTrack = ({ index, content }) => {
  const $root = document.createElement("div");
  $root.className = "slideBannerBox__track";
  $root.dataset.index = index;
  $root.innerHTML = `
      <div class="slideBannerBox__background">
        <img
          class="slideBannerBox__img"
          src="${content.img}"
          alt="${content.titles[0]}"
          draggable="false"
        />
        <div class="slideBannerBox__shadow"></div>
      </div>

      <div class="slideBannerBox__contentWrapper">
        <div class="slideBannerBox__content">
          ${content.titles.map((v) => `<p>${v}</p>`).join("")}
          <div class="slideBannerBox__info">
            ${
              content.type === "공모전"
                ? `
                <img alt="공모전" src="https://static-page.kakao.com/static/pc/badge-bigthum-competition.svg?b9cde8c9848eb67a53c11cf4a3c4944b">
              `
                : content.type === "HOT"
                ? `
                <img alt="HOT" src="https://static-page.kakao.com/static/pc/badge-bigthum-hot.svg?a7f7622e9d554d5e0ad1517a53de3ad3">
              `
                : content.type === "UP"
                ? `
                  <img alt="UP" src="https://static-page.kakao.com/static/pc/badge-bigthum-up.svg?a70b9cea4cb6b972e794d199820782a2">
                `
                : `
                <img alt="추천" src="https://static-page.kakao.com/static/pc/badge-bigthum-recommend.svg?9cba9a2bf1ae05f840c588da3ed9d37f">
                `
            }
            <div class="slideBannerBox__infoList">
              ${
                content.webtoonType
                  ? `<div><span>${content.webtoonType}</span></div>`
                  : ``
              }
              ${
                content.subscribers
                  ? `
                  <div>
                    <img alt="Seperator" src="https://static-page.kakao.com/static/common/line_top_banner.png?343ab907f94da6068f627f916b4b35ea" >
                  </div>
                  <div>
                    <img alt="people" src="https://static-page.kakao.com/static/pc/ico-bigthum-person.svg?100328455b1454b0ffff555caf02e71e">
                    <span>${content.subscribers}만명</span>
                  </div>
              `
                  : ``
              }
            </div>
          </div>
        </div>

        <div class="slideBannerBox__footer">
          <span>${content.footerText}</span>
        </div>
      </div>
  `;
  return $root;
};

const getBannerList = () => [
  {
    type: "공모전",
    titles: ["ㅋㅋㅋ웹툰 아카데미", "카카페 데뷔반 2기 모집중"],
    footerText: "카카오페이지 데뷔반 2월 7일 오픈!",
    img: "//dn-img-page.kakao.com/download/resource?kid=bxer2r/hzhOhiglp7/6XVB5RgYtBsV1zz7MxoeX1",
  },
  {
    type: "추천",
    webtoonType: "유료",
    subscribers: 48.1,
    titles: ["공주,", "신비를 탐하다"],
    footerText: "내 그대에게 부귀영화를 주겠다",
    img: "//dn-img-page.kakao.com/download/resource?kid=cG5jAk/hy41HfG4tM/ZDWsyf9vT4kx3DlkKYyu1k",
  },
  {
    type: "UP",
    webtoonType: "무료",
    subscribers: 106.1,
    titles: ["샬롯에게는", "다섯명의 제자가 있다"],
    footerText: "사랑 때문에 인생 2회차 시작?",
    img: "//dn-img-page.kakao.com/download/resource?kid=Qb2JG/hyEdgh8nAN/YkAG5DKCW6ZmitE9vkaI4K",
  },
  {
    type: "HOT",
    webtoonType: "유료",
    subscribers: 48.1,
    titles: ["딸 바보가", "되었습니다."],
    footerText: "갑자기 생긴 딸이 귀여워?!",
    img: "//dn-img-page.kakao.com/download/resource?kid=NfO9u/hy41PSMsl2/KOnmIlC3bI2q5Lk46RuLL1",
  },
];
