window.onload = function(){
    console.log("load completed")

    defaultSetting()
}

function defaultSetting(){
    console.log(">> defaultSetting")
    addCategoryClickEvent()
}

//카테고리에 클릭 이벤트 추가
function addCategoryClickEvent(){
    document.querySelector(".nav-content > ul").addEventListener("click",setCategory)
}

//카테고리 네비게이션 클릭 이벤트
function setCategory(el){
    console.log(">> setCategory",el)

    el.preventDefault()

    //하위 이미지가 선택 되었을 때 li찾기
    let target = el.target
    while(target && target.tagName!="LI"){
        target = target.parentNode
    }
    console.log(target)
    const category = target.dataset['id']

    setCategoryFocus(target)

    //추후 내용만 나눠서 넣을 예정
    switch(category){
        case "toon":
            setToonContent()
            break
        default:
            const mainContent = document.getElementById("main-content")
            console.log(mainContent)
            mainContent.innerText=target.dataset["id"]   
    }
}

//선택된 카테고리는 포커스클래스 추가 이외에는 삭제
function setCategoryFocus(focusEl){
    console.log(">> setCategoryFocus")
    const categoryGroup = document.querySelectorAll(".nav-content-form")
    categoryGroup.forEach(el=>{
        el.classList.remove("focus")
    })
    focusEl.classList.add("focus")
}

//웹툰 카테고리 컨텐츠 셋팅
function setToonContent(){
    //추후 웹툰 컨텐츠 내용으로 바꿀예정
    const mainContent = document.getElementById("main-content")
    mainContent.innerText="추후 웹툰 컨텐츠 내용으로 바꿀예정"
}