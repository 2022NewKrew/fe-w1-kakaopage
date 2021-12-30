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
      appendWebtoonScript();
  }
  function appendWebtoonScript(){
    const body=document.querySelector("body");
    const scripts=body.querySelectorAll("script");
    Array.from(scripts).forEach((script)=>{
      if(script.src==="webtoon.js")
        script.remove();
    });

    const newScript=document.createElement("script");
    newScript.src="webtoon.js";
    newScript.type="module";
    body.appendChild(newScript);
  }

  function init(){
    tabs.addEventListener('click', (e)=>{
      const tabHtml=e.target.getAttribute("data-tab-html");
      if(tabHtml===null)
        return;
      markTabActive(e.target);
      loadTab(tabHtml);
    });
    // NOTE Temporarily set webtoon tab as default for convenience :)
    // document.getElementById("home-tab").click();
    document.getElementById("webtoon-tab").click();
  }

  init();
})();
