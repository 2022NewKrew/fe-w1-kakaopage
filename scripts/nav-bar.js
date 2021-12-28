(async () => {
  let currCssActiveIndex = 0;
  const webtoonNavIndex = 1;

  const navData = await fetch("./data/nav.json").then((response) => {
    return response.json();
  });

  const createNavEle = (title, index) => {
    return `<li class="nav-list ${isActive(index)}" 
      data-idx=${index}>${title}</li>`;
  };

  const isActive = (index) => {
    return index === currCssActiveIndex ? "active" : "";
  };

  const navParent = $(".nav-container");
  const main = $(".main");
  const navElements = navData
    .map((nav, index) => createNavEle(nav.title, index))
    .join("");

  navParent.innerHTML = navElements;

  // Update Soon
  const changeMainContent = (e) => {
    main.innerHTML =
      Number(e.target.dataset.idx) === webtoonNavIndex
        ? "기달기달"
        : createEmptyPage();
  };

  const changeCssActiveIndex = (e) => {
    if (Number(e.target.dataset.idx) === currCssActiveIndex) return;

    navParent.childNodes[currCssActiveIndex].classList.remove("active");
    currCssActiveIndex = Number(e.target.dataset.idx);
    navParent.childNodes[currCssActiveIndex].classList.add("active");
  };

  navParent.addEventListener("click", changeMainContent);
  navParent.addEventListener("click", changeCssActiveIndex);
  const createEmptyPage = () => {
    return `
          <div class='empty-page-container'>
              <h2>🔥🔥🔥EMPTY PAGE🔥🔥🔥</h2>
              <img src='./images/not-content.gif' />
          </div>
      `;
  };

  // Update Soon
  // main.innerHTML = createEmptyPage();
})();
