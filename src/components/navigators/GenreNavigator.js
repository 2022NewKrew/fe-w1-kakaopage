export const GenreNavigator = () => {
  const $root = document.createElement("nav");
  $root.className = "genreNav";

  const urlSearchParams = new URLSearchParams(window.location.search);
  const { genre } = Object.fromEntries(urlSearchParams.entries());

  const isSelected = (str) => {
    if ((!genre && str === "홈") || genre === str)
      return "genreNav__item--selected";

    return "";
  };

  const renderGenreItem = (genre) => `
    <li>
      <a 
        class="genreNav__item ${isSelected(genre)}" 
        href="?${new URLSearchParams({ genre }).toString()}"
      >
        ${genre}
      </a>
    </li>
  `;

  $root.innerHTML = `
    <ul>
        ${genreList.map(renderGenreItem).join("")}
    </ul>
  `;

  return $root;
};

const genreList = [
  "홈",
  "요일연재",
  "웹툰",
  "소년",
  "드라마",
  "로멘스",
  "로판",
  "앤션무협",
  "BL",
];
