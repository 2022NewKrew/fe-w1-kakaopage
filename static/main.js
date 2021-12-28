function add_tab_active(tab){
  let tabs=document.getElementById("header-tabs");
  Array.from(tabs.children).some((ele)=>{
    if(ele.classList.contains("header-tab-active")){
      ele.classList.remove("header-tab-active");
      return true;
    }
    return false;
  });
  tab.classList.add("header-tab-active");
}
async function load_tab(url){
  return await (await fetch(url)).text();
}
function home_tab(){
  add_tab_active(document.getElementById("home-tab"));      
  let container=document.getElementById("contents");
  load_tab("dummy.html").then((text)=>{
    container.innerHTML=text;
  });
}
function webtoon_tab(){
  add_tab_active(document.getElementById("webtoon-tab"));      
  let container=document.getElementById("contents");
  load_tab("webtoon.html").then((text)=>{
    container.innerHTML=text;
  });

}
function webfic_tab(){
  add_tab_active(document.getElementById("webfic-tab"));      
  let container=document.getElementById("contents");
  load_tab("dummy.html").then((text)=>{
    container.innerHTML=text;
  });
}
function movie_tab(){
  add_tab_active(document.getElementById("movie-tab"));      
  let container=document.getElementById("contents");
  load_tab("dummy.html").then((text)=>{
    container.innerHTML=text;
  });
}
function broadcast_tab(){
  add_tab_active(document.getElementById("broadcast-tab"));      
  let container=document.getElementById("contents");
  load_tab("dummy.html").then((text)=>{
    container.innerHTML=text;
  });
}
function book_tab(){
  add_tab_active(document.getElementById("book-tab"));      
  let container=document.getElementById("contents");
  load_tab("dummy.html").then((text)=>{
    container.innerHTML=text;
  });
}
document.getElementById("home-tab").onclick=home_tab;
document.getElementById("webtoon-tab").onclick=webtoon_tab;
document.getElementById("webfic-tab").onclick=webfic_tab;
document.getElementById("movie-tab").onclick=movie_tab;
document.getElementById("broadcast-tab").onclick=broadcast_tab;
document.getElementById("book-tab").onclick=book_tab;
// home_tab();
// NOTE Temporarily set webtoon tab as default for convenience :)
webtoon_tab();
