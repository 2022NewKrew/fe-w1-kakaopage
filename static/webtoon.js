(function(){
  const tabs=document.getElementById("second-tabs");
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
  async function loadTab(url){
    const text=await (await fetch(url)).text();
    const container=document.getElementById("contents");
    container.innerHTML=text;
  }
  function init(){
    tabs.addEventListener('click', (e)=>{
      const tabHtml=e.target.getAttribute("data-tab");
      markTabActive(e.target);
      // loadTab(tabHtml);
    });
    tabs.querySelectorAll("button")[0].click();
  }

  init();
})();
