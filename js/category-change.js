/* 활성 카테고리 변경
* 우선 css만 변경 구현
*/
function categoryOnClick(event) {
    const liList = document.querySelectorAll(".category-element");
    const target = event.path.find(element => element.tagName === "LI");
    if (target.classList.contains("selected")) {

        return;
    }
    liList.forEach(element => {
        if(element.classList.contains("selected")) element.classList.remove("selected");
    });
    target.classList.add("selected");
}

const ul = document.querySelector("#header-category > ul");
ul.addEventListener("click", categoryOnClick);