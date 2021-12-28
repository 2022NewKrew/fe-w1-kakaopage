export const GenreNavigator = () => {
  const $root = document.createElement("nav");
  $root.className = "genre-nav";

  const urlSearchParams = new URLSearchParams(window.location.search);
  const { genre } = Object.fromEntries(urlSearchParams.entries());

  const isSelected = (str) => {
    return genre === new URLSearchParams(str).get("genre");
  };

  $root.innerHTML = `
    <ul>
        ${genreList
          .map(
            ({ text, url }) => `
            <li>
                <a class="${isSelected(url) && "selected"}" href="?${url}">
                    ${text}
                </a>
            </li>
        `
          )
          .join("")}
    </ul>
  `;

  return { $root };
};

const genreList = [
  { text: "홈", url: new URLSearchParams({ genre: "홈" }).toString() },
  {
    text: "요일연재",
    url: new URLSearchParams({ genre: "요일연재" }).toString(),
  },
  { text: "웹툰", url: new URLSearchParams({ genre: "웹툰" }).toString() },
  { text: "소년", url: new URLSearchParams({ genre: "소년" }).toString() },
  { text: "드라마", url: new URLSearchParams({ genre: "드라마" }).toString() },
  { text: "로멘스", url: new URLSearchParams({ genre: "로멘스" }).toString() },
  { text: "로판", url: new URLSearchParams({ genre: "로판" }).toString() },
  {
    text: "액션무협",
    url: new URLSearchParams({ genre: "액션무협" }).toString(),
  },
  { text: "BL", url: new URLSearchParams({ genre: "BL" }).toString() },
];
