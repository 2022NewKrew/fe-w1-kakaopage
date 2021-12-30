(function(){
  const container=document.getElementById("section-container");
  const sectionMap={
    "big-carousel": createBigCarousel,
    "featuring": createFeaturing,
    "carousel": createCarousel,
    "weekly-top": createWeeklyTop,
    "big-item-section": createBigItemSection,
    "item-section": createItemSection,
    "list-item-section": createListItemSection,
    "banner-item-section": createBanner,
    "weekly": createWeekly
  }
  
  function markTabActive(tab, tabContainer){
    Array.from(tabContainer.querySelectorAll("li")).forEach((ele)=>{
      if(ele.classList.contains("active"))
        ele.classList.remove("active");
    });
    tab.closest("li").classList.add("active");
  }

  function createSection(classes, id){
    const section=document.createElement("section");
    section.classList.add("section");
    if(classes)
      section.classList.add(...classes);
    if(id)
      section.id=id;
    return section;
  }
  function createImg(src, alt){
    const img=document.createElement("img");
    img.src=src;
    img.alt=alt;
    return img;
  }
  function createItemSectionHeader(data){
    const header=`
    <div class="item-section-header">
      <div>${data.title}</div>
      <div class="item-section-header-more">
        더보기<img src="https://static-page.kakao.com/static/common/ic-more-gray.svg?639494b81c8127013d0e627243aee94e">
      </div>
    `;
    return header;
  }
  function createBigCarousel(data){
    // const element=document.createElement("section");
    const element=`
    <section class="section">
      <img class="big-carousel-img" src="${data.items[0]["image"]}">
      <div class="big-carousel-overlay">
        <div class="big-carousel-title">
          ${data.items[0]["title"]}
        </div>
        <div class="big-carousel-desc-desc">
          <img src="https://static-page.kakao.com/static/pc/badge-bigthum-event.svg?2c00fc6eb18517e8f006adfaf464530b">
          <div>1/1</div>
        </div>
        <div class="big-carousel-desc">${data.items[0]["desc"]}</div>
      </div>
    </section>`;
    container.innerHTML+=element;
  }
  function createFeaturing(data){
    const section=createSection([], "featuring");
    container.appendChild(section);

    const sectionFeaturing=document.createElement("div");
    sectionFeaturing.classList.add("section-featuring");
    section.appendChild(sectionFeaturing);

    const featuringItems=document.createElement("div");
    featuringItems.classList.add("featuring-items");
    sectionFeaturing.appendChild(featuringItems);

    const buttonsHtml=data.items.map((item)=>{
      const buttonHtml=`
        <button class="featuring-item">
          ${item}
        </button>
      `;
      return buttonHtml;
    }).join("");
    featuringItems.innerHTML=buttonsHtml;
  }
  function createCarousel(data){
    const section=createSection(["carousel"]);
    container.appendChild(section);

    const leftDiv=document.createElement("div");
    const leftImg=createImg("https://static-page.kakao.com/static/pc/ic-paging-back-nor.svg?2c964bb7a6b07a7941252b32ea13f03c", "carousel left");
    leftDiv.title="not implemented ㅠㅠ";
    leftDiv.appendChild(leftImg);
    section.appendChild(leftDiv);

    const rightDiv=document.createElement("div");
    const rightImg=createImg("https://static-page.kakao.com/static/pc/ic-paging-next-nor.svg?b76f34a1b77e59514735b92464295b7c", "carousel right");
    rightDiv.title="not implemented ㅠㅠ";
    rightDiv.appendChild(rightImg);
    section.appendChild(rightDiv);

    const centerDiv=document.createElement("div");
    leftDiv.insertAdjacentElement("afterend", centerDiv);
    data.items.forEach((item)=>{
      const img=document.createElement("img");
      img.src=item.image;
      img.alt="carousel image";
      centerDiv.appendChild(img);
    });
  }
  function createWeeklyTop(data){
    const section=createSection(["item-section"]);
    container.appendChild(section);

    const header=createItemSectionHeader(data);
    section.innerHTML=header;

    const weeklyTabs=document.createElement("div");
    weeklyTabs.classList.add("weekly-tabs");
    section.appendChild(weeklyTabs);

    const weeklyTabsNav=document.createElement("nav");
    weeklyTabsNav.classList.add("weekly-top-tabs-nav");
    weeklyTabs.appendChild(weeklyTabsNav);

    const navUl=document.createElement('ul');
    weeklyTabsNav.appendChild(navUl);

    const itemContainer=document.createElement("div");
    itemContainer.classList.add("item-container");
    section.appendChild(itemContainer);

    const dayArray=["mon", "tue", "wed", "thu", "fri", "sat", "sun", "fin"];
    const tabTextArray=["월", "화", "수", "목", "금", "토", "일", "완결"];
    const tabsHtml=dayArray.map((data, index)=>(
      `
      <li class="weekly-tab">
        <button data-tab="${data}">
          ${tabTextArray[index]}
        </button>
      </li>
      `
      )).join("");
    navUl.innerHTML=tabsHtml;

    navUl.addEventListener("click", (e)=>{
      const day=e.target.getAttribute("data-tab");
      if(day===null)
        return;
      markTabActive(e.target, navUl);
      const dayItems=data.items[day];
      const dayItemsHtml=dayItems.map((item)=>{
        const itemHtml=`
          <div class="item-card">
            <div class="item-image-holder">
              <img class="item-image" src="${item.image}" alt="item-image">
              <div class="item-overlay">
                ${item.desc}
              </div>
            </div>
            <div class="item-title">
              ${item.title}
            </div>
            <div class="item-info">
              <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="views">
              ${item.views}
            </div>
          </div>
        `;
        return itemHtml;
      }).join("");
      itemContainer.innerHTML=dayItemsHtml;
    })
    navUl.querySelector("button").click();
  }
  function createBigItemSection(data){
    const section=createSection(["item-section"]);
    container.appendChild(section);

    const header=createItemSectionHeader(data);
    section.innerHTML=header;

    const itemContainer=document.createElement("div");
    itemContainer.classList.add("big-item-container");
    section.appendChild(itemContainer);

    const itemsHtml=data.items.map((item)=>{
      const itemHtml=`
      <div class="big-item-card">
        <img class="big-item-image" src="${item.image}" class="big-item-image" alt="big-item-image">
        <div class="big-item-overlay">
          <div class="big-item-title">
            ${item.title}
          </div>
          <div class="big-item-views">
            <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="views">
            ${item.views}
          </div>
          <div class="big-item-desc">
            ${item.desc}
          </div>
        </div>
      </div>`
      return itemHtml;
    }).join("");
    itemContainer.innerHTML=itemsHtml;
  }
  function createItemSection(data){
    const section=createSection(["item-section"]);
    container.appendChild(section);

    const header=createItemSectionHeader(data);
    section.innerHTML=header;

    const itemContainer=document.createElement("div");
    itemContainer.classList.add("item-container");
    section.appendChild(itemContainer);

    const itemHtml=data.items.map((item)=>{
      const itemHtml=`
        <div class="item-card">
          <div class="item-image-holder">
            <img class="item-image" src="${item.image}" alt="item-image">
            <div class="item-overlay">
              <img src="https://static-page.kakao.com/static/common/badge-thumbnail-star.svg?c4d2181b65253b0259cfa219fe4506ac">
              ${item.star}
            </div>
          </div>
          <div class="item-title">
            ${item.title}
          </div>
          <div class="item-info">
            <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="views">
            ${item.views}
          </div>
        </div>
      `;
      return itemHtml;
    }).join("");
    itemContainer.innerHTML=itemHtml;
  }
  function createListItemSection(data){
    const section=createSection(["item-section"]);
    container.appendChild(section);

    const header=createItemSectionHeader(data);
    section.innerHTML=header;

    const itemContainer=document.createElement("div");
    itemContainer.classList.add("list-item-container");
    section.appendChild(itemContainer);

    const itemsHtml=data.items.map((item, index)=>{
      const itemHtml=`
      <div class="list-item-card">
        <div class="list-item-index">${index+1}</div>
        <img class="list-item-image" src=${item.image}>
        <div class="list-item-info">
          <div class="list-item-title">
            ${item.tags.map((tag)=>(`<img src="${tag}" alt="tag">`)).join("")}
            ${item.title}
          </div>
          <div class="list-item-views">
            <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="views">
            ${item.views}
          </div>
          <div class="list-item-desc">${item.desc}</div>
        </div>

      </div>
      `;
      return itemHtml;
    }).join("");
    itemContainer.innerHTML=itemsHtml;
  }
  function createBanner(data){
    const section=createSection(["item-section"]);
    container.appendChild(section);

    const header=createItemSectionHeader(data);
    section.innerHTML=header;

    const itemContainer=document.createElement("div");
    itemContainer.classList.add("banner-item-container");
    section.appendChild(itemContainer);

    const itemsHtml=data.items.map((item)=>(
      `
      <div class="banner-item-card">
        <img src="${item.image}" alt="banner-image" class="banner-item-image">
      </div>
      `
    )).join("");

    itemContainer.innerHTML=itemsHtml;
  }
  function createWeekly(data){
    const section=createSection(["item-section"]);
    container.appendChild(section);

    const weeklyTabs=document.createElement("div");
    weeklyTabs.classList.add("weekly-tabs");
    section.appendChild(weeklyTabs);

    const weeklyTabsNav=document.createElement("nav");
    weeklyTabsNav.classList.add("weekly-tabs-nav");
    weeklyTabs.appendChild(weeklyTabsNav);

    const navUl=document.createElement('ul');
    weeklyTabsNav.appendChild(navUl);

    const innerTabBar=document.createElement("div");
    innerTabBar.classList.add("weekly-inner-tab-bar");
    innerTabBar.innerHTML=`
    <div>
      전체
    </div>
    <div class="weekly-inner-tab-second">
      
    </div>
    `;
    section.appendChild(innerTabBar);

    const itemContainer=document.createElement("div");
    itemContainer.classList.add("item-container");
    section.appendChild(itemContainer);

    const dayArray=["mon", "tue", "wed", "thu", "fri", "sat", "sun", "fin"];
    const tabTextArray=["월", "화", "수", "목", "금", "토", "일", "완결"];
    const tabsHtml=dayArray.map((data, index)=>{
      const innerHtml=`
      <li class="weekly-tab">
        <button data-tab="${data}">
          ${tabTextArray[index]}
        </button>
      </li>
      `;
      return innerHtml;
    }).join("");
    navUl.innerHTML=tabsHtml;

    navUl.addEventListener("click", (e)=>{
      const day=e.target.getAttribute("data-tab");
      if(day===null)
        return;
      markTabActive(e.target, navUl);
      const dayItems=data.items[day];
      const dayItemsHtml=dayItems.map((item)=>{
        const itemHtml=`
          <div class="item-card">
            <div class="item-image-holder">
              <img class="item-image" src="${item.image}" alt="item-image">
              <div class="item-overlay">
                ${item.desc}
              </div>
            </div>
            <div class="item-title">
              ${item.title}
            </div>
            <div class="item-info">
              <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="views">
              ${item.views}
            </div>
          </div>
        `;
        return itemHtml;
      }).join("");
      itemContainer.innerHTML=dayItemsHtml;

      const innerTabSecond=innerTabBar.querySelector(".weekly-inner-tab-second");
      innerTabSecond.innerHTML=`전체 (${Object.keys(data.items[day]).length})`;
    });
    navUl.querySelector("button").click();
  }

  async function loadTab(url){
    container.innerHTML="";
    const jsonData=await (await fetch(url)).json();
    const sections=jsonData["sections"];
    sections.forEach((sectionData)=>{
      if(sectionData["type"] in sectionMap){
        sectionMap[sectionData["type"]](sectionData)
      }
    });
  }
  function init(){
    const secondTabContainer=document.getElementById("second-tabs");
    const secondTabs=secondTabContainer.querySelectorAll("button");
    secondTabContainer.addEventListener('click', (e)=>{
      const dataTab=e.target.getAttribute("data-tab");
      if(dataTab===null)
        return;
      const tabJson=dataTab+".json";
      markTabActive(e.target, secondTabContainer);
      loadTab("/json/"+tabJson);
    });
    secondTabs[0].click();
  }

  init();
})();
