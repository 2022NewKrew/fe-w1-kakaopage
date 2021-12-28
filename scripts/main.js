(async () => {
  let currNavActiveIndex = 0;
  const webtoonNavIndex = 1;

  const navParent = $(".nav-container");
  const main = $(".main");

  /********* common logic  **********/
  // get element function
  const $ = (selector, parentNode = document) => {
    return parentNode.querySelector(selector);
  };

  const getAPI = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (e) {
      throw e;
    }
  };
  /********* common logic  **********/

  /********* create navbar html  **********/
  const createNavEle = (title, index) => {
    return `<li class="nav-list ${isActive(index)}" 
      data-idx=${index}>${title}</li>`;
  };

  const initializeNavBar = async () => {
    try {
      const navData = await getAPI("./data/nav.json");
      const navElements = navData
        .map((nav, index) => createNavEle(nav.title, index))
        .join("");

      navParent.innerHTML = navElements;
    } catch (e) {
      alert(e);
    }
  };
  initializeNavBar();

  const isActive = (index) => {
    return index === currNavActiveIndex ? "active" : "";
  };
  /********* create navbar  **********/

  /********* navbar click event  **********/
  const changeMainContent = (e) => {
    main.innerHTML =
      Number(e.target.dataset.idx) === webtoonNavIndex
        ? createWebtoonPage()
        : createEmptyPage();
  };

  const changeCssActiveIndex = (e) => {
    if (Number(e.target.dataset.idx) === currNavActiveIndex) return;

    navParent.childNodes[currNavActiveIndex].classList.remove("active");
    currNavActiveIndex = Number(e.target.dataset.idx);
    navParent.childNodes[currNavActiveIndex].classList.add("active");
  };

  navParent.addEventListener("click", changeMainContent);
  navParent.addEventListener("click", changeCssActiveIndex);
  /********* navbar click event  **********/

  /********* page template except for webtoon  **********/
  const createEmptyPage = () => {
    return `
          <div class='empty-page-container'>
              <h2>🔥🔥🔥EMPTY PAGE🔥🔥🔥</h2>
              <img src='./images/not-content.gif' />
          </div>
      `;
  };
  main.innerHTML = createEmptyPage();
  /********* page template except for webtoon  **********/

  /********* webtoon page template **********/
  const createMenuBar = async () => {
    const menuContainer = document.createElement("ul");
    menuContainer.className = "menu-container";

    const menuData = await getAPI("./data/menu.json");
    const menuElements = menuData
      .map((menu, index) => createMenuEle(menu.title, index))
      .join("");

    menuContainer.innerHTML = menuElements;
    main.appendChild(menuContainer);
  };

  const createMenuEle = (title, index) => {
    return `<li class="menu-list ${isActive(index)}" 
      data-idx=${index}>${title}</li>`;
  };

  const createWebtoonPage = async () => {
    return `
     ${await createMenuBar()}
   
      <div class="day-outer-container">
        <ul class="day-container">
          <li class="day active">
            <div class="day-circle active"></div>
            <span class="day-span">월</span>
          </li>
          <li class="day">
            <div class="day-circle"></div>
            <span class="day-span">화</span>
          </li>
          <li class="day">
            <div class="day-circle"></div>
            <span class="day-span">수</span>
          </li>
          <li class="day">
            <div class="day-circle"></div>
            <span class="day-span">목</span>
          </li>
          <li class="day">
            <div class="day-circle"></div>
            <span class="day-span">금</span>
          </li>
          <li class="day">
            <div class="day-circle"></div>
            <span class="day-span">토</span>
          </li>
          <li class="day">
            <div class="day-circle"></div>
            <span class="day-span">일</span>
          </li>
          <li class="day">
            <div class="day-circle"></div>
            <span class="day-span">완결</span>
          </li>
        </ul>

        <div class="category-container">
            <div class="category-left">
                <span class="category active">전체</span>
                <span class="category">웹툰</span>
                <span class="category">🌗웹툰</span>
            </div>
            <div class="category-right">
                <span>전체(135)</span>
                <img 
                src='https://static-page.kakao.com/static/common/ico_sorting_arrow.svg?167b1295f93ba9f9d84cac7a5b830345'
                alt='카테고리 선택'/>
            </div>
        </div>

        <section class="webtoon-container">
            <article class="webtoon">
                <img
                    class='webtoon-thumbnail' 
                    src='https://dn-img-page.kakao.com/download/resource?kid=9Eoo5/hyATyGp2En/pYYjRkJJIrpHEvDible6T0&filename=th2'/>
                <div class="webtoon-title">
                    Title
                </div>
                <div class="webtoon-viewer-container">
                    <img src='https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f'>
                    <img src='https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871'>
                    <span class="webtoon-viewer-count">77.7만명</span>
                </div>
            </article>
            <article class="webtoon">
                <img
                    class='webtoon-thumbnail' 
                    src='https://dn-img-page.kakao.com/download/resource?kid=9Eoo5/hyATyGp2En/pYYjRkJJIrpHEvDible6T0&filename=th2'/>
                <div class="webtoon-title">
                    Title
                </div>
                <div class="webtoon-viewer-container">
                    <img src='https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f'>
                    <img src='https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871'>
                    <span class="webtoon-viewer-count">77.7만명</span>
                </div>
            </article> <article class="webtoon">
                <img
                    class='webtoon-thumbnail' 
                    src='https://dn-img-page.kakao.com/download/resource?kid=9Eoo5/hyATyGp2En/pYYjRkJJIrpHEvDible6T0&filename=th2'/>
                <div class="webtoon-title">
                    Title
                </div>
                <div class="webtoon-viewer-container">
                    <img src='https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f'>
                    <img src='https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871'>
                    <span class="webtoon-viewer-count">77.7만명</span>
                </div>
            </article> <article class="webtoon">
                <img
                    class='webtoon-thumbnail' 
                    src='https://dn-img-page.kakao.com/download/resource?kid=9Eoo5/hyATyGp2En/pYYjRkJJIrpHEvDible6T0&filename=th2'/>
                <div class="webtoon-title">
                    Title
                </div>
                <div class="webtoon-viewer-container">
                    <img src='https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f'>
                    <img src='https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871'>
                    <span class="webtoon-viewer-count">77.7만명</span>
                </div>
            </article> <article class="webtoon">
                <img
                    class='webtoon-thumbnail' 
                    src='https://dn-img-page.kakao.com/download/resource?kid=9Eoo5/hyATyGp2En/pYYjRkJJIrpHEvDible6T0&filename=th2'/>
                <div class="webtoon-title">
                    Title
                </div>
                <div class="webtoon-viewer-container">
                    <img src='https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f'>
                    <img src='https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871'>
                    <span class="webtoon-viewer-count">77.7만명</span>
                </div>
            </article> <article class="webtoon">
                <img
                    class='webtoon-thumbnail' 
                    src='https://dn-img-page.kakao.com/download/resource?kid=9Eoo5/hyATyGp2En/pYYjRkJJIrpHEvDible6T0&filename=th2'/>
                <div class="webtoon-title">
                    Title
                </div>
                <div class="webtoon-viewer-container">
                    <img src='https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f'>
                    <img src='https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871'>
                    <span class="webtoon-viewer-count">77.7만명</span>
                </div>
            </article> <article class="webtoon">
                <img
                    class='webtoon-thumbnail' 
                    src='https://dn-img-page.kakao.com/download/resource?kid=9Eoo5/hyATyGp2En/pYYjRkJJIrpHEvDible6T0&filename=th2'/>
                <div class="webtoon-title">
                    Title
                </div>
                <div class="webtoon-viewer-container">
                    <img src='https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f'>
                    <img src='https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871'>
                    <span class="webtoon-viewer-count">77.7만명</span>
                </div>
            </article>
          

       

        </section>
      </div>

    
      </div>
      `;
  };
})();
