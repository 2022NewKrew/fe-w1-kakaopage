const selected = "selected";
const clicked = "clicked";

const kakao_content_nav = document.querySelector("nav");
const kakao_header = document.querySelector("header");
const kakao_content_nav_ul = document.querySelector("nav.content_nav>ul");
const kakao_content_sub_nav_ul = document.querySelector("div.content_sub_nav>ul");
const kakao_footer_companyInfo = document.querySelector("p.company_info");
const kakao_day_webtoon_div = document.querySelector("div.day_webtoon");
const kakao_top_romance_div = document.querySelector("div.top.romance");
const kakao_top_rofan_div = document.querySelector("div.top.rofan");
const kakao_top_drama_div = document.querySelector("div.top.drama");
const kakao_top_blgl_div = document.querySelector("div.top.blgl");
const kakao_top_boy_div = document.querySelector("div.top.boy");
const kakao_top_action_div = document.querySelector("div.top.action");
const kakao_day_top_div = document.querySelector("div.day_top");
const kakao_recommend_event_div = document.querySelector("div.recommend_event");

function init() {
  kakao_content_nav_ul.addEventListener("click", nav_list_toggle_clicked);
  kakao_content_sub_nav_ul.addEventListener("click", nav_list_toggle_selected);
  kakao_footer_companyInfo.addEventListener("click", footer_company_info_onoff);

  // build tag
  day_webtoon_builder(kakao_day_webtoon_div);
  top_romance_builder(kakao_top_romance_div);
  top_rofan_builder(kakao_top_rofan_div);
  top_drama_builder(kakao_top_drama_div);
  top_blgl_builder(kakao_top_blgl_div);
  top_boy_builder(kakao_top_boy_div);
  top_action_builder(kakao_top_action_div);
  day_top_builder(kakao_day_top_div);
  recommend_event_builder(kakao_recommend_event_div);
}

function check_LI_tag(tag) {
  return tag === "LI";
}
function nav_list_toggle_clicked(e) {
  let cur_content_nav_li = document.querySelector("li.clicked");
  if (!check_li_tag(e.target.parentNode.tagName)) return;
  if (cur_content_nav_li) {
    cur_content_nav_li.classList.remove(clicked);
  }
  cur_content_nav_li = e.target.parentNode;
  cur_content_nav_li.classList.add(clicked);
}

function nav_list_toggle_selected(e) {
  let cur_content_sub_nav_li = document.querySelector("li.selected");
  if (e.target.tagName !== "LI") return;
  if (cur_content_sub_nav_li) {
    cur_content_sub_nav_li.classList.remove(selected);
  }
  cur_content_sub_nav_li = e.target;
  cur_content_sub_nav_li.classList.add(selected);
}

function footer_company_info_onoff(e) {
  const company_info = e.target;
  if (company_info.classList.contains("on")) {
    company_info.classList.replace("on", "off");
  } else if (company_info.classList.contains("off")) {
    company_info.classList.replace("off", "on");
  }
}
function top_title_wrap_template(title) {
  return `
  <div class="top_title_wrap">
    <div class="top_title">${title}</div>
    <a href="#">
      <div class="title_more">더보기</div>
      <img src="https://static-page.kakao.com/static/common/ic-more-gray.svg?639494b81c8127013d0e627243aee94e" alt="더보기" />
    </a>
  </div>
  `;
}
function day_webtoon_builder(day_webtoon) {
  const day_webtoon_title = "요일 연재 TOP";
  const day_webtoon_template = top_title_wrap_template(day_webtoon_title);

  day_webtoon.innerHTML += day_webtoon_template;
}
function top_romance_builder(top_romance) {
  const top_romance_title = "로맨스 TOP";
  const top_romance_template = top_title_wrap_template(top_romance_title);

  top_romance.innerHTML += top_romance_template;
}
function top_rofan_builder(top_rofan) {
  const top_rofan_title = "로판 TOP";
  const top_rofan_template = top_title_wrap_template(top_rofan_title);

  top_rofan.innerHTML += top_rofan_template;
}
function top_drama_builder(top_drama) {
  const top_drama_title = "드라마 TOP";
  const top_drama_template = top_title_wrap_template(top_drama_title);

  top_drama.innerHTML += top_drama_template;
}
function top_blgl_builder(top_blgl) {
  const top_blgl_title = "BL/GL TOP";
  const top_blgl_template = top_title_wrap_template(top_blgl_title);

  top_blgl.innerHTML += top_blgl_template;
}
function top_boy_builder(top_boy) {
  const top_boy_title = "소년 TOP";
  const top_boy_template = top_title_wrap_template(top_boy_title);

  top_boy.innerHTML += top_boy_template;
}
function top_action_builder(top_action) {
  const top_action_title = "액션/무협 TOP";
  const top_action_template = top_title_wrap_template(top_action_title);

  top_action.innerHTML += top_action_template;
}
function day_top_builder(day_top) {
  const day_top_title = "일간 랭킹 TOP";
  const day_top_template = top_title_wrap_template(day_top_title);

  day_top.innerHTML += day_top_template;
}
function recommend_event_builder(recommend_event) {
  const recommend_event_title = "추천 이벤트";
  const recommend_event_template = top_title_wrap_template(recommend_event_title);

  recommend_event.innerHTML += recommend_event_template;
}
