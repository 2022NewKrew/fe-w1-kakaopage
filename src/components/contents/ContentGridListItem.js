export const ContentGridListItem = (content) => {
  const $root = document.createElement("div");
  $root.className = "contentGridListItem";
  $root.innerHTML = `
      <div class="contentGridListItem__thumb">
        <div class="contentGridListItem__thumbWrapper">
            <img 
              class="contentGridListItem__thumbImg" 
              alt="${content.title}" 
              draggable="false" 
              src="${content.img}"
            >
            <div class="contentGridListItem__thumbOutline"></div>
        </div>
        <div class="contentGridListItem__thumbFooter">
            <img class="contentGridListItem__thumbStar" alt="star" src="https://static-page.kakao.com/static/common/badge-thumbnail-star.svg?c4d2181b65253b0259cfa219fe4506ac">
            <p class="contentGridListItem__thumbText">${content.stars}</p>
            ${
              content.isFree
                ? `<img src="https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119">`
                : `<img class="contentGridListItem__thumbClock" alt="clock" src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf">`
            }
            
        </div>
      </div>

      <div class="contentGridListItem__content">
        <p class="contentGridListItem__contentTitle">${content.title}</p>
        <div class="contentGridListItem__contentInfo">
            ${
              content.isNew
                ? `<img class="contentGridListItem__contentNew" alt="새 작품" src="https://static-page.kakao.com/static/common/icon_new.svg?4ae84a0f972e30119fb6fcfbb2f59bf9">`
                : ""
            }
            <img class="contentGridListItem__contentPerson" alt="person" src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871">
            <span>${content.subscripers}만명</span>
        </div>
      </div>
    `;

  return $root;
};
