export const SlideBannerBox = () => {
  const $root = document.createElement("div");
  $root.className = "topBannerBox";

  $root.innerHTML = `
    <img
        src="//dn-img-page.kakao.com/download/resource?kid=bxer2r/hzhOhiglp7/6XVB5RgYtBsV1zz7MxoeX1"
        data-src="//dn-img-page.kakao.com/download/resource?kid=bxer2r/hzhOhiglp7/6XVB5RgYtBsV1zz7MxoeX1"
        alt="ㅋㅋㅋ웹툰아카데미 카카페 데뷔반 2기"
        draggable="false"
        style="width: 720px; display: block"
    />
    <div>
    <div class="topBannerBox-content">
        <p>ㅋㅋㅋ웹툰 아카데미</p>
        <p>카카페 데뷔반 2기 모집중</p>
        <div>
        <img
            src="https://static-page.kakao.com/static/pc/badge-bigthum-competition.svg?b9cde8c9848eb67a53c11cf4a3c4944b"
        />
        </div>
    </div>
    <div class="topBannerBox-footer">
        <span>카카오페이지 데뷔반 2월 7일 오픈!</span>
    </div>
    </div>
  `;

  return { $root };
};
