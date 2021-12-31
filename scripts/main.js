import { $ } from "./util.js";
import { createHeader } from "./header.js";
import { createEmptyPage } from "./empty.js";
import {
  changeCssActive,
  changeMainContent,
  changeWebtoonDetailContent,
  changeContentOfDay,
} from "./event-handler.js";

const main = $(".main");

const initializeHTML = async () => {
  try {
    $(".header").innerHTML = await createHeader();
    main.innerHTML = createEmptyPage();
  } catch (e) {
    throw e;
  }
};

/**
 * REQUEST FEEDBACK:
 * 1. 이벤트 핸들러 로직을 여기에 다 정의 하기엔 main의 진짜 역할을 파악하기 힘들어 이벤트 핸들러를 파일로 분리하였는데 괜찮은가요?!
 * 2. 일반적으로 쓰는 핸들러 컨벤션 ex.handleClick을 안쓴 이유는 여러 엘레먼트에 동일한 로직을 적용한게 있어서
 * 이벤트 핸들러 함수 이름을 아래와 같이 하니 더 가독성이 좋다고 판단해서 사용했는데 어떤가요?!
 */
const initializeEvent = () => {
  $(".body").addEventListener("click", changeCssActive);
  $(".nav-container").addEventListener("click", changeMainContent);
  main.addEventListener("click", changeWebtoonDetailContent);
  main.addEventListener("click", changeContentOfDay);
};

(async () => {
  try {
    await initializeHTML();
    initializeEvent();
  } catch (e) {
    alert(e);
  }
})();
