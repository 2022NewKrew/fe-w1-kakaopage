import { ShowMoreBtn } from "./ShowMoreBtn.js";

export const SectionHeader = ({
  title,
  subTitle,
  showMoreURL = "https://static-page.kakao.com/static/common/ic-more-gray.svg?639494b81c8127013d0e627243aee94e",
}) => {
  const $root = document.createElement("header");
  $root.className = "sectionHeader";
  $root.innerHTML = `
      <h5 class="sectionHeader__title">${title}</h5>
      ${subTitle ? `<span class="sectionHeader__subTitle">${subTitle}</span>` : ``}
    `;
  $root.appendChild(ShowMoreBtn({ url: showMoreURL }));

  return $root;
};
