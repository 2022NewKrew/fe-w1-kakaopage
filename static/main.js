const tabs=document.getElementById("header-tabs");

function markTabActive(tab){
  Array.from(tabs.children).some((ele)=>{
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
}
function init(){
  const tabIdToHtml={
    "home-tab": "dummy.html",
    "webtoon-tab": "webtoon.html",
    "webfic-tab": "dummy.html",
    "movie-tab": "dummy.html",
    "broadcast-tab": "dummy.html",
    "book-tab": "dummy.html"
  };
  tabs.addEventListener('click', (e)=>{
    const tabId=e.target.getAttribute("data-tab-id");
    const tab=document.getElementById(tabId);
    markTabActive(tab);
    loadTab(tabIdToHtml[tabId]);
  });
  // NOTE Temporarily set webtoon tab as default for convenience :)
  // document.getElementById("home-tab").click();
  document.getElementById("webtoon-tab").click();
}

init();
