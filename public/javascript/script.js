//TODO 하드코딩 이름들 변수로 설정하기
const slideBanner = "slideBanner"
const toonSummary = "summary"
const dailyToon = "dailyToon"
const toonInfo = "toonInfo"
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
    document.querySelector(".nav-content > ul").addEventListener("click",setCategoryClick)
}

//카테고리 네비게이션 클릭 이벤트
function setCategoryClick(el){
    console.log(">> setCategory",el)

    el.preventDefault()

    //하위 이미지가 선택 되었을 때 li찾기
    let target = el.target.closest('LI')
    // while(target && target.tagName!="LI"){
    //     target = target.parentNode
    // }
    console.log(target)
    const category = target.dataset['id']

    setCategoryFocus(target,document.querySelectorAll(".nav-content-form"))

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

//선택된 카테고리는 포커스클래스 추가 이외에는 삭제(카테고리 공통화)
function setCategoryFocus(focusEl,categoryGroup){
    console.log(">> setCategoryFocus")

    categoryGroup.forEach(el=>{
        el.classList.remove("focus")
    })
    focusEl.classList.add("focus")
}

//웹툰 카테고리 컨텐츠 셋팅
function setToonContent(){
    setSubCategory()
    //카테고리 리스트 생성 후 이벤트 넣기 위함
    setTimeout(() => {
        addSubCategoryClickEvent()
    }, 0);

}

//TODO 서브카테고리를 직접 만들지 말고 서버에서 html 가져오는 방식으로 변경 예정
//서브 카테고리 생성
async function setSubCategory(){
    const subCategoryGroup=[
        {
            title:"홈",
            id:"home"
        },{
            title:"요일연재",
            id:"day"
        },{
            title:"웹툰",
            id:"toon"
        },{
            title:"소년",
            id:"boy"
        },{
            title:"드라마",
            id:"drama"
        },{
            title:"로맨스",
            id:"romance"
        },{
            title:"로판",
            id:"fantasy"
        },{
            title:"액션무협",
            id:"action"
        },{
            title:"BL",
            id:"bl"
        }
    ]

    const subCategoryContainer = document.createElement("div")
    subCategoryContainer.className="sub-category-container"
    const subCategoryUl = document.createElement("ul")
    subCategoryGroup.forEach((subCategory,index)=>{
        const subCategoryLi = document.createElement("li")
        if(index==0){
            subCategoryLi.className="focus"
        }
        subCategoryLi.innerText=subCategory.title
        subCategoryLi.dataset["id"]=subCategory.id
        subCategoryUl.appendChild(subCategoryLi)
    })
    subCategoryContainer.appendChild(subCategoryUl)
    console.log(subCategoryContainer);
    const mainContent = document.getElementById("main-content")
    mainContent.innerText=''
    mainContent.appendChild(subCategoryContainer)
    // TestBanner()
    setSubCategoryContent("home")
}

//서브 카테고리 클릭 이벤트 추가
function addSubCategoryClickEvent(){
    console.log("addSubCategoryClickEvent")
    document.querySelector(".sub-category-container").addEventListener("click",setSubCategoryClick)
}

//서브 카테고리 클릭 이벤트(포커스, 컨텐츠 불러오기)
function setSubCategoryClick(el){
    console.log(">> setCategory",el,el.target,el.target.tagName)

    el.preventDefault()
    const target = el.target
    if(target.tagName=="LI"){
        setCategoryFocus(target,document.querySelectorAll(".sub-category-container > ul > li"))
        setSubCategoryContent(target.dataset["id"])
    }
}

//서브 카테고리별 컨텐츠 불러오기
async function setSubCategoryContent(categoryId){
    console.log("setSubCategoryContent",categoryId);
    //TODO 서버에서 가져와야하나 현재는 하드 코딩값 사용
    const subCategoryFormGroup={
        home:[{
            type:slideBanner,
            info:""
        },{
            type:toonSummary,
            info:[{
                title:"오늘 UP",
                count:"204"
            },{
                title:"오늘 신작",
                count:"2"
            },{
                title:"오리지널",
                count:"2,191"
            },{
                title:"무료회차 UP",
                count:""
            },{
                title:"독립운동가 웹툰",
                count:""
            },{
                title:"오늘 랭킹",
                count:"1위"
            }
            ]
        },{
            type:dailyToon,
            info:{
                mon:[
                    {
                        toonUrl:'/asset/toon/toonImg1',
                        type:'waitfree',
                        title:"묵향 다크레이디",
                        readCount:"129.5",
                        state:"TOP"
                    },{
                        toonUrl:'/asset/toon/toonImg2',
                        type:'webtoon',
                        title:"위튜브스쿨",
                        readCount:"1.2",
                        state:"TOP"
                    },{
                        toonUrl:'/asset/toon/toonImg3',
                        type:'waitfree',
                        title:"화산권마",
                        readCount:"34",
                        state:"TOP"
                    },{
                        toonUrl:'/asset/toon/toonImg4',
                        type:'waitfree',
                        title:"독고3 [완전판[",
                        readCount:"103.2",
                        state:"TOP"
                    },{
                        toonUrl:'/asset/toon/toonImg5',
                        type:'waitfree',
                        title:"책 먹는 마법사",
                        readCount:"35.1",
                        state:"TOP"
                    },{
                        toonUrl:'/asset/toon/toonImg6',
                        type:'waitfree',
                        title:"악당과 계약 가족이 되었다",
                        readCount:"35.5",
                        state:"1위"
                    },{
                        toonUrl:'/asset/toon/toonImg7',
                        type:'waitfree',
                        title:"녹음의 관",
                        readCount:"115.5",
                        state:"2위"
                    },{
                        toonUrl:'/asset/toon/toonImg8',
                        type:'waitfree',
                        title:"이번생은 가주가 되겠습니다.",
                        readCount:"108.5",
                        state:"3위"
                    },{
                        toonUrl:'/asset/toon/toonImg9',
                        type:'waitfree',
                        title:"묵나는 이 집 아이",
                        readCount:"207.5",
                        state:"4위"
                    },{
                        toonUrl:'/asset/toon/toonImg10',
                        type:'waitfree',
                        title:"묵향 다크레이디",
                        readCount:"129.5",
                        state:"5위"
                    }
                ],
                tue:[],
                wed:[],
                thu:[],
                fri:[],
                sat:[],
                sun:[],
                end:[],
            }
        }],
        day:[],
        toon:[],
        boy:[],
        drama:[],
        romance:[],
        fantasy:[],
        action:[],
        bl:[]
    }
    const contentsDiv = document.createElement("div")
    contentsDiv.className="contents"

    //비동기 loop처리를 위해 foreach에서 for of로 변경
    for(const content of subCategoryFormGroup[categoryId]){
        switch (content.type) {
            case slideBanner:
                contentsDiv.appendChild(await makeSlideBanner(content))
                break;
            case toonSummary:
                contentsDiv.appendChild(await makeSummary(content))
                break;
            case dailyToon:
                contentsDiv.appendChild(await makeDailyToon(content))
                break
            default:
                break;
        }
    }
    if(document.querySelector(".contents")!=null){
        document.querySelector(".contents").remove()
    }
    document.querySelector("#main-content").appendChild(contentsDiv)
}

//요일 연재 만화 만들기
async function makeDailyToon(content){
    const dailyToonContainer = document.createElement("div")
    dailyToonContainer.className="daily-toon-container"
    await getForm(dailyToonContainer,dailyToon)
    addDailyCategoryEvent(dailyToonContainer,content)
    setDailyToon(dailyToonContainer,content.info["mon"])
    return dailyToonContainer
}

//요일 연재 만화 요일 카테고리 이벤트 추가
function addDailyCategoryEvent(container,content){
    container.querySelector(".daily-toon-day-category").addEventListener("click",(el)=>{
        let target = el.target.closest('LI')
        setCategoryFocus(target,container.querySelectorAll("li"))
        console.log("addDailyCategoryEvent",content);

        setDailyToon(container,content.info[target.dataset["id"]])
    })
}

//TODO 요일 만화 만들기
//요일 만화 만들기
async function setDailyToon(container,dailyToon){
    console.log(container,dailyToon);
    const dailyToonContent = container.querySelector(".daily-toon-content")
    const dailyToonContentClone = dailyToonContent.cloneNode()
    const toonInfoLinkForm = document.createElement("a")
    toonInfoLinkForm.className="toon-info-link"
    console.log(dailyToonContent);
    await getForm(toonInfoLinkForm,toonInfo)
    dailyToon.forEach(dailyToonInfo=>{
        console.log(dailyToonInfo);
        const toonInfoLink = toonInfoLinkForm.cloneNode(true)
        const toonInfoImg = toonInfoLink.querySelector(".toon-info-img > img")
        const toonInfoImgDetailState = toonInfoLink.querySelector(".toon-info-img-detail-state")
        const toonInfoImgDetailTypeImg = toonInfoLink.querySelector(".toon-info-img-detail-type-img >img")
        const toonInfoTitle = toonInfoLink.querySelector(".toon-info-title-box > span")
        const toonInfoViewCount = toonInfoLink.querySelector(".toon-info-view-count")
        toonInfoImgDetailState.innerText=dailyToonInfo.state
        toonInfoImg.src = `${dailyToonInfo.toonUrl}.png`
        toonInfoImgDetailTypeImg.src = `/asset/common/bmbadge_${dailyToonInfo.type}.svg`
        toonInfoTitle.innerText = dailyToonInfo.title
        toonInfoViewCount.innerText = `${dailyToonInfo.readCount}만명`
        console.log(toonInfoLink);
        dailyToonContentClone.appendChild(toonInfoLink)
    })
    const parentNode = dailyToonContent.parentNode
    parentNode.replaceChild(dailyToonContentClone,dailyToonContent)
    console.log("setDailyToon",container);
}

//요약 만들기
async function makeSummary(content){
    const toonSummaryContainer = document.createElement("div")
    toonSummaryContainer.className="toon-summary-container"
    await getForm(toonSummaryContainer,toonSummary)

    const toonSummaryWrap = toonSummaryContainer.querySelector(".toon-summary-wrap")

    content.info.forEach(summaryInfo=>{
        const wrapLink = document.createElement("a")
        const toonSummaryTitle = document.createElement("div")
        const toonSummaryTitleSpan = document.createElement("span")
        
        toonSummaryTitle.className="toon-summary-title"
        toonSummaryTitleSpan.innerText=summaryInfo.title
        toonSummaryTitle.appendChild(toonSummaryTitleSpan)
        wrapLink.appendChild(toonSummaryTitle)

        if(summaryInfo.count!=""){
            const toonSummaryCount = document.createElement("div")
            toonSummaryCount.className="toon-summary-count"
            toonSummaryCount.innerText=summaryInfo.count
            wrapLink.appendChild(toonSummaryCount)
        }

        toonSummaryWrap.appendChild(wrapLink)
    })
    return toonSummaryContainer
}

//TODO 슬라이드기능 추가
//슬라이드형 배너 만들기
async function makeSlideBanner(content){
    const topBannerBox = document.createElement("div")
    topBannerBox.className="top-banner-box"
    await getForm(topBannerBox,"bannerSlide")
    //TODO 배너 정보 가져와서 배너 만들기
    topBannerBox.querySelector(".slick-track").appendChild(await TestBanner())
    topBannerBox.querySelector(".slick-track").appendChild(await TestBanner())
    topBannerBox.querySelector(".slick-track").appendChild(await TestBanner())
    topBannerBox.querySelector(".slick-track").appendChild(await TestBanner())
    topBannerBox.querySelector(".slick-track").appendChild(await TestBanner())
    return topBannerBox
}

//배너만들기 테스트용 
async function TestBanner(){
    const testData={
        bannerImgSrc:"/asset/toon/toonBannerImg1.png",
        bannerSize:"big",
        detailType:"toon",
        toonTitles:["천하제일 표사"],
        toonType:"wait",
        toonStateType:"new",
        views: "14만",
        summary: "최강 표국을 세우기 위해 뭉쳤다!"
    }
    return await makeBannerForm(testData)
    // console.log(makeBannerForm(testData));
}

//배너 폼 만들기(베너 공통된 부분으로 배너 타입에 따라 디테일 부분은 따로 추가해야함)
async function makeBannerForm(bannerData){
    console.log(">> makeBannerForm");

    const bannerContainer = document.createElement("div")
    bannerContainer.className="banner-container"

    await getForm(bannerContainer,"banner")
    
    const imageWrapper = bannerContainer.querySelector(".image-wrapper")
    const bannerDetailWrapper = bannerContainer.querySelector(".banner-detail-wrapper")
    const bannerImg = document.createElement("img")

    bannerContainer.classList.add(bannerData.bannerSize)
    bannerImg.src=bannerData.bannerImgSrc
    bannerImg.className=bannerData.bannerSize
    // console.log(imageWrapper);

    imageWrapper.appendChild(bannerImg)

    switch (bannerData.detailType) {
        case "toon":
            await getForm(bannerDetailWrapper,"toonDetail")
            makeBannerToonDetail(bannerDetailWrapper,bannerData)
            break
        default:
            break
    }
    return bannerContainer
}

//웹툰 베너 디테일 값 가져오기(조회수 웹툰, new 등...)
async function makeBannerToonDetail(container, bannerDetail){
    const toonStateSrc = `/asset/common/badge-bigthum-${bannerDetail.toonStateType}.svg`

    const toonDetailGroup = container.querySelector(".toon-detail-group")
    const toonDetailContent = container.querySelector(".toon-detail-content")
    const toonDetailSummary = container.querySelector(".toon-detail-summary")
    const detailState = container.querySelector(".detail-state")
    const detailViewCount = container.querySelector(".detail-view-count")

    bannerDetail.toonTitles.reverse().forEach(title=>{
        const titleDiv=document.createElement("div")
        titleDiv.innerText=title
        titleDiv.className=`banner-detail-title ${bannerDetail.bannerSize}`
        toonDetailGroup.prepend(titleDiv)
    })

    toonDetailContent.classList.add(bannerDetail.bannerSize)
    toonDetailSummary.classList.add(bannerDetail.bannerSize)
    toonDetailSummary.firstChild.innerText=bannerDetail.summary
    detailState.src=toonStateSrc
    detailViewCount.innerText=`${bannerDetail.views}명`
    

}

//서버에 폼 가져오기
async function getForm(container,type){
    let url=""
    switch (type) {
        case "bannerSlide":
            url="/html/topBannerForm.html"
            break
        case toonSummary:
            url="/html/toonSummaryForm.html"
            break
        case dailyToon:
            url="/html/dailyToonForm.html"
            break
        case toonInfo:
            url="/html/toonInfoForm.html"
            break
        case "banner":
            url="/html/bannerForm.html"
            break
        case "toonDetail":
            url="/html/bannerToonDetail.html"
        default:
            break
    }
    const response = await fetch(url)
    container.innerHTML=await response.text()
}
