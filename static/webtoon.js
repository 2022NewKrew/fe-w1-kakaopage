(function(){
  const container=document.getElementById("section-container");
  const sectionMap={
    "big-carousel": createBigCarousel,
    "featuring": createFeaturing,
    "carousel": createCarousel,
    "weekly-top": createWeeklyTop,
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
    const section=createSection(["weekly-top"]);
    container.appendChild(section);

    const header=document.createElement("div");
    header.classList.add("item-section-header");
    section.appendChild(header);

    let tmpElement=document.createElement("div");
    tmpElement.innerText=data.title;
    header.appendChild(tmpElement);
    tmpElement=document.createElement("div");
    tmpElement.classList.add("item-section-header-more");
    tmpElement.innerHTML=`
    더보기<img src="https://static-page.kakao.com/static/common/ic-more-gray.svg?639494b81c8127013d0e627243aee94e">`;
    header.appendChild(tmpElement);

    const weeklyTabs=document.createElement("div");
    weeklyTabs.classList.add("weekly-tabs");
    section.appendChild(weeklyTabs);

    const weeklyTabsNav=document.createElement("nav");
    weeklyTabsNav.classList.add("weekly-tabs-nav");
    weeklyTabs.appendChild(weeklyTabsNav);

    const navUl=document.createElement('ul');
    weeklyTabsNav.appendChild(navUl);

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
    })
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
    })
  }
  function init(){
    const secondTabContainer=document.querySelector(".second-tabs");
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
