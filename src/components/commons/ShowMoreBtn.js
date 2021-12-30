export const ShowMoreBtn = ({ url }) => {
  const $root = document.createElement("a");
  $root.className = "showMoreBtn";
  $root.innerHTML = `
        <span>더보기</span>
        <img
          src="${url}"
          alt="ic-more-gray"
        />
    `;

  return $root;
};
