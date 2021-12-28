export const DayNavigator = () => {
  const $root = document.createElement("nav");
  $root.className = "dayNav";
  $root.innerHTML = `
    <ul>
      <li class="dayNav__item" data-weekday="1">월</li>
      <li class="dayNav__item" data-weekday="2">화</li>
      <li class="dayNav__item" data-weekday="3">수</li>
      <li class="dayNav__item" data-weekday="4">목</li>
      <li class="dayNav__item" data-weekday="5">금</li>
      <li class="dayNav__item" data-weekday="6">토</li>
      <li class="dayNav__item" data-weekday="7">일</li>
      <li class="dayNav__item" data-weekday="0">전체</li>
    </ul>
  `;
  const $weekdayList = $root.querySelector("ul").children;

  let currentDay = new Date().getDay() || 7;
  $weekdayList[currentDay - 1].classList.add("dayNav__item--selected");

  $root.addEventListener("click", (e) => {
    currentDay = e.target.dataset.weekday;

    for (let i = 0; i < $weekdayList.length; i++)
      $weekdayList[i].classList.remove("dayNav__item--selected");

    e.target.classList.add("dayNav__item--selected");
  });

  return { $root };
};
