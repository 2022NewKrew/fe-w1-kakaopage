const selected = "selected";
const clicked = "clicked";

const kakao_content_nav = document.querySelector("nav");
const kakao_header = document.querySelector("header");
const kakao_content_nav_ul = document.querySelector("nav.content_nav>ul");
const kakao_content_sub_nav_ul = document.querySelector("div.content_sub_nav>ul");
const kakao_footer_companyInfo = document.querySelector("p.company_info");
const kakao_day_webtoon_div = document.querySelector("div.day_webtoon");
const kakao_top_new_div = document.querySelector("div.top.new");
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
  day_webtoon_builder();
  top_new_builder();
  top_romance_builder();
  top_rofan_builder();
  top_drama_builder();
  top_blgl_builder();
  top_boy_builder();
  top_action_builder();
  day_top_builder();
  recommend_event_builder();
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
function day_webtoon_builder() {
  const day_webtoon_title = "요일 연재 TOP";
  const day_webtoon_template = top_title_wrap_template(day_webtoon_title);
  kakao_day_webtoon_div.innerHTML += day_webtoon_template;
}
function top_new_builder() {
  const top_new_title = "기대신작 TOP";
  const top_new_template = top_title_wrap_template(top_new_title);
  kakao_top_new_div.innerHTML = top_new_template + kakao_top_new_div.innerHTML;
}
function webtoon_card_div(webtoon_list) {
  const webtoon_card_content = document.createElement("div");
  webtoon_card_content.classList.add("webtoon_card_wrap");
  let webtoon_template_res = ``;

  webtoon_list.forEach(item => {
    webtoon_template_res += `
    <a href="#">
      <div class="webtoon_card_content">
        <img src = "${item.webtoon_thumbnail_img}" alt="${item.webtoon_card_title}" />
        <div class="webtoon_card_content_info">
          <div class="webtoon_card_content_star">
            <img src="https://static-page.kakao.com/static/common/badge-thumbnail-star.svg?c4d2181b65253b0259cfa219fe4506ac" alt="star" />
            <div class="star_rating">${item.star_rating}</div>
          </div>

          <img
            class="clock"
            src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf"
            alt="clock"
          />
        </div>
      </div>
      <div class="webtoon_card_title">${item.webtoon_card_title}</div>
      <div class="webtoon_card_meta">
        <img src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f" alt="업데이트" />
        <img src="https://static-page.kakao.com/static/common/icon_15.png?ccf202bf79001052f43af077a0947e74" alt="15세 작품" />
        <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="peo" />
        <div class="webtoon_card_meta_count">${item.webtoon_card_meta_count}</div>
      </div>
    </a>
    `;
  });
  webtoon_card_content.innerHTML = webtoon_template_res;
  return webtoon_card_content.outerHTML;
}
function top_romance_builder() {
  const top_romance_title = "로맨스 TOP";
  const top_romance_title_template = top_title_wrap_template(top_romance_title);
  const top_romance_webtoon_template = webtoon_card_div(kakao_webtoon_list.top_romance_list);
  kakao_top_romance_div.innerHTML = top_romance_title_template + top_romance_webtoon_template;
}
function top_rofan_builder() {
  const top_rofan_title = "로판 TOP";
  const top_rofan_template = top_title_wrap_template(top_rofan_title);
  const top_rofan_webtoon_template = webtoon_card_div(kakao_webtoon_list.top_rofan_list);
  kakao_top_rofan_div.innerHTML = top_rofan_template + top_rofan_webtoon_template;
}
function top_drama_builder() {
  const top_drama_title = "드라마 TOP";
  const top_drama_template = top_title_wrap_template(top_drama_title);
  const top_drama_webtoon_template = webtoon_card_div(kakao_webtoon_list.top_drama_list);
  kakao_top_drama_div.innerHTML += top_drama_template + top_drama_webtoon_template;
}
function top_blgl_builder() {
  const top_blgl_title = "BL/GL TOP";
  const top_blgl_template = top_title_wrap_template(top_blgl_title);
  const top_blgl_webtoon_template = webtoon_card_div(kakao_webtoon_list.top_blgl_list);
  kakao_top_blgl_div.innerHTML = top_blgl_template + top_blgl_webtoon_template;
}
function top_boy_builder() {
  const top_boy_title = "소년 TOP";
  const top_boy_template = top_title_wrap_template(top_boy_title);
  const top_boy_webtoon_template = webtoon_card_div(kakao_webtoon_list.top_boy_list);
  kakao_top_boy_div.innerHTML = top_boy_template + top_boy_webtoon_template;
}
function top_action_builder() {
  const top_action_title = "액션/무협 TOP";
  const top_action_template = top_title_wrap_template(top_action_title);
  const top_action_webtoon_template = webtoon_card_div(kakao_webtoon_list.top_action_list);
  kakao_top_action_div.innerHTML = top_action_template + top_action_webtoon_template;
}
function day_top_builder() {
  const day_top_title = "일간 랭킹 TOP";
  const day_top_template = top_title_wrap_template(day_top_title);

  kakao_day_top_div.innerHTML += day_top_template;
}
function recommend_event_builder() {
  const recommend_event_title = "추천 이벤트";
  const recommend_event_template = top_title_wrap_template(recommend_event_title);

  kakao_recommend_event_div.innerHTML += recommend_event_template;
}
