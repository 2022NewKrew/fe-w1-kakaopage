export const GenreNavigator = () => {
  const $root = document.createElement("nav");
  $root.className = "genre-nav";

  $root.innerHTML = `
    <ul>
        <li>
            <a href="/">홈</a>
        </li>
        <li>
            <a href="/">요일연재</a>
        </li>
        <li>
            <a class="selected" href="/">웹툰</a>
        </li>
        <li>
            <a href="/">소년</a>
        </li>
        <li>
            <a href="/">드라마</a>
        </li>
        <li>
            <a href="/">로멘스</a>
        </li>
        <li>
            <a href="/">로판</a>
        </li>
        <li>
            <a href="/">액션무협</a>
        </li>
        <li>
            <a href="/">BL</a>
        </li>
    </ul>
  `;

  return { $root };
};
