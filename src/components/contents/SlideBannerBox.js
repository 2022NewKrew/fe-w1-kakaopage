import { State } from "../../core/State.js";

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

  const state = State({ currentIndex: 0 });
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
    const { currentIndex: idx } = state;

    if (className === "slideBannerBox__pervBtn") {
      state.currentIndex = idx === 0 ? MAX_INDEX : idx - 1;
    } else if (className === "slideBannerBox__nextBtn") {
      state.currentIndex = idx === MAX_INDEX ? 0 : idx + 1;
    }
  });
  // $slider.addEventListener("transitionend", () => {
  //   $slider.style.transition = "none";
  // });

  // render
  const renderIndicator = () => {
    $indicator.innerHTML = `${state.currentIndex + 1} / ${MAX_INDEX + 1}`;
  };
  const moveTrack = () => {};

  // init
  state.subscribe(renderIndicator);
  state.subscribe(moveTrack);
  renderIndicator();

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
            <img
                alt="공모전"
                src="https://static-page.kakao.com/static/pc/badge-bigthum-competition.svg?b9cde8c9848eb67a53c11cf4a3c4944b"
            />
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
    type: "HOT",
    webtoonType: "유료",
    subscribers: 48.1,
    titles: ["딸 바보가", "되었습니다."],
    footerText: "카카오페이지 데뷔반 2월 7일 오픈!",
    img: "//dn-img-page.kakao.com/download/resource?kid=cG5jAk/hy41HfG4tM/ZDWsyf9vT4kx3DlkKYyu1k",
  },
  {
    type: "공모전",
    titles: ["ㅋㅋㅋ웹툰 아카데미", "카카페 데뷔반 2기 모집중"],
    footerText: "카카오페이지 데뷔반 2월 7일 오픈!",
    img: "//dn-img-page.kakao.com/download/resource?kid=bxer2r/hzhOhiglp7/6XVB5RgYtBsV1zz7MxoeX1",
  },
  {
    type: "HOT",
    webtoonType: "유료",
    subscribers: 48.1,
    titles: ["딸 바보가", "되었습니다."],
    footerText: "카카오페이지 데뷔반 2월 7일 오픈!",
    img: "//dn-img-page.kakao.com/download/resource?kid=cG5jAk/hy41HfG4tM/ZDWsyf9vT4kx3DlkKYyu1k",
  },
];
