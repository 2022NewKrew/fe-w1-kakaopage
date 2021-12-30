export const SlideBannerBox = () => {
  const $root = document.createElement("div");
  $root.className = "slideBannerBox";

  $root.innerHTML = `
    <div class="slideBannerBox__track">
      <div class="slideBannerBox__background">
        <img
          class="slideBannerBox__img"
          src="//dn-img-page.kakao.com/download/resource?kid=bxer2r/hzhOhiglp7/6XVB5RgYtBsV1zz7MxoeX1"
          alt="ㅋㅋㅋ웹툰아카데미 카카페 데뷔반 2기"
          draggable="false"
        />
        <div class="slideBannerBox__shadow"></div>
      </div>

      <div class="slideBannerBox__content">
        <p>ㅋㅋㅋ웹툰 아카데미</p>
        <p>카카페 데뷔반 2기 모집중</p>
        <div class="slideBannerBox__info">
          <img
              alt="공모전"
              src="https://static-page.kakao.com/static/pc/badge-bigthum-competition.svg?b9cde8c9848eb67a53c11cf4a3c4944b"
          />
        </div>
      </div>

      <div class="slideBannerBox__footer">
        <span>카카오페이지 데뷔반 2월 7일 오픈!</span>
      </div>
    </div>
    
    <div>
      <img class="slideBannerBox__pervBtn" alt="previous button" src="https://static-page.kakao.com/static/pc/ic-banner-paging-back-nor.svg?85bef3b447d17ee7cbefa349c973fe56" >
      <img class="slideBannerBox__nextBtn" alt="next button" src="https://static-page.kakao.com/static/pc/ic-banner-paging-next-nor.svg?cf6a870397c04c13add6c27f1f735d93" >
      <div class="slideBannerBox__indicator">1 / 4</div>
    </div>

  `;

  return $root;
};
