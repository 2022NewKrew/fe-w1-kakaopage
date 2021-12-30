export const ContentRowListItem = (content) => {
  const $root = document.createElement("li");
  $root.className = "contentRowListItem";
  $root.innerHTML = `
    <img
        class="contentRowListItem__img"
        src="${content.img}"
        draggable="false"
    />

    <div class="contentRowListItem__content">
        <div class="contentRowListItem__title">
        ${
          content.isUpdate
            ? `
                <img
                    src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f"
                    alt="업데이트"
                />
            `
            : ``
        }
        <span>${content.title}</span>
        </div>

        <p class="contentRowListItem__description">${content.description}</p>

        <div class="contentRowListItem__info">
            <img
                src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871"
                alt="people"
            />
            <span>${content.subscripers}만명</span>
            <div class="contentRowListItem__separator"></div>
            <span>${content.authers.join(",")}</span>
        </div>
    </div>
  `;

  return $root;
};
