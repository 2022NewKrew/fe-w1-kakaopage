(function(){
  const tabs=document.getElementById("second-tabs");
  const container=document.getElementById("section-container");
  const sectionMap={
    "big-carousel": createBigCarousel,
    "featuring": createFeaturing,
    "carousel": createCarousel,
    "weekly-top": createWeeklyTop,
  }
  
  function markTabActive(tab){
    Array.from(tabs.querySelectorAll("button")).forEach((ele)=>{
      if(ele.classList.contains("second-tab-active")){
        ele.classList.remove("second-tab-active");
        return true;
      }
      return false;
    });
    tab.classList.add("second-tab-active");
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
    </section>`
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

    data.items.forEach((item)=>{
      const button=document.createElement("button");
      button.classList.add("featuring-item");
      button.innerText=item;
      featuringItems.appendChild(button);
    })
  }
  function createCarousel(data){
    const section=createSection(["carousel"]);
    container.appendChild(section);

    const leftDiv=document.createElement("div");
    const leftImg=createImg("https://static-page.kakao.com/static/pc/ic-paging-back-nor.svg?2c964bb7a6b07a7941252b32ea13f03c", "carousel left");
    leftDiv.appendChild(leftImg);
    section.appendChild(leftDiv);

    const rightDiv=document.createElement("div");
    const rightImg=createImg("https://static-page.kakao.com/static/pc/ic-paging-next-nor.svg?b76f34a1b77e59514735b92464295b7c", "carousel right");
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

    const dataArray=["mon", "tue", "wed", "thr", "fri", "sat", "sun", "fin"];
    const textArray=["월", "화", "수", "목", "금", "토", "일", "완결"];
    dataArray.forEach((data, index)=>{
      const li=document.createElement("li");
      li.classList.add("weekly-tab");
      const button=document.createElement("button");
      button.setAttribute("data-tab", data);
      button.innerText=textArray[index];
      li.appendChild(button);
      navUl.appendChild(li);
    });
  }

  async function loadTab(url){
    container.innerHTML="";
    const jsonData=await (await fetch(url)).json();
    const sections=jsonData["sections"];
    sections.forEach((sectionData)=>{
      console.log(sectionData);
      if(sectionData["type"] in sectionMap){
        sectionMap[sectionData["type"]](sectionData)
      }
    })
  }
  function init(){
    tabs.addEventListener('click', (e)=>{
      const dataTab=e.target.getAttribute("data-tab");
      if(dataTab===null)
        return;
      const tabJson=dataTab+".json";
      markTabActive(e.target);
      loadTab("/json/"+tabJson);
    });
    tabs.querySelectorAll("button")[0].click();
  }

  init();
})();
