import { sectionMap, markTabActive } from "./sections.js";

let sectionContainer=document.getElementById("section-container");
// (function(){
  
  function init(){
    sectionContainer=document.getElementById("section-container");
    async function loadTab(url){
      sectionContainer.innerHTML="";
      const jsonData=await (await fetch(url)).json();
      const sections=jsonData["sections"];
      sections.forEach((sectionData)=>{
        if(sectionData["type"] in sectionMap){
          sectionMap[sectionData["type"]](sectionData)
        }
      });
    }

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
  // init();
// })();
export { init, sectionContainer };