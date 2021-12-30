import {init as webtoonInit} from "./webtoon.js";

(function(){
  const tabs=document.getElementById("header-tabs");

  function markTabActive(tab){
    Array.from(tabs.children).forEach((ele)=>{
      if(ele.classList.contains("header-tab-active")){
        ele.classList.remove("header-tab-active");
        return true;
      }
      return false;
    });
    tab.classList.add("header-tab-active");
  }
  async function loadTab(url){
    const text=await (await fetch(url)).text();
    const container=document.getElementById("contents");
    container.innerHTML=text;
    if(url.includes("webtoon.html"))
      webtoonInit();
  }

  function init(){
    tabs.addEventListener('click', (e)=>{
      const tabHtml=e.target.getAttribute("data-tab-html");
      if(tabHtml===null)
        return;
      markTabActive(e.target);
      loadTab(tabHtml);
    });
    document.getElementById("home-tab").click();
  }

  init();
})();
