export default () => {
  const nav = document.createElement("nav");

  nav.innerHTML = `
    <ul>
        <li>
            <a href="#"><img src="images/홈.svg" /></a>
        </li>
        <li class="selected">
            <a href="#"><img src="images/웹툰_만화.svg" /></a>
        </li>
        <li>
            <a href="#"><img src="images/웹소설_장르.svg" /></a>
            <div class="nav-dot"></div>
        </li>
        <li>
            <a href="#"><img src="images/영화.svg" /></a>
            <div class="nav-dot"></div>
        </li>

        <li>
            <a href="#"><img src="images/예능_드라마.svg" /></a>
            <div class="nav-dot"></div>
        </li>
        <li>
            <a href="#"><img src="images/책.svg" /></a>
            <div class="nav-dot"></div>
        </li>
    </ul>
    `;

  document.body.appendChild(nav);
};
