export const ContentGridListItem = () => {
  const $root = document.createElement("div");
  $root.className = "contentGridListItem";
  $root.innerHTML = `
      <div class="contentGridListItem__thumb">
        <div class="contentGridListItem__thumbWrapper">
            <img class="contentGridListItem__thumbImg" alt="묵향 다크레이디" draggable="false" src="//dn-img-page.kakao.com/download/resource?kid=9Eoo5/hyATyGp2En/pYYjRkJJIrpHEvDible6T0&amp;filename=th2">
            <div class="contentGridListItem__thumbOutline"></div>
        </div>
        <div class="contentGridListItem__thumbFooter">
            <img class="contentGridListItem__thumbStar" alt="star" src="https://static-page.kakao.com/static/common/badge-thumbnail-star.svg?c4d2181b65253b0259cfa219fe4506ac">
            <p class="contentGridListItem__thumbText">TOP</p>
            <img class="contentGridListItem__thumbClock" alt="clock" src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf">
        </div>
        </div>

        <div class="contentGridListItem__content">
        <p class="contentGridListItem__contentTitle">묵향 다크레이디</p>
        <div class="contentGridListItem__contentInfo">
            <img class="contentGridListItem__contentNew" alt="새 작품" src="https://static-page.kakao.com/static/common/icon_new.svg?4ae84a0f972e30119fb6fcfbb2f59bf9">
            <img class="contentGridListItem__contentPerson" alt="person" src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871">
            <span>129.5만명</span>
        </div>
      </div>
    `;

  return $root;
};
