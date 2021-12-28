export const DayNavigator = () => {
  const $root = document.createElement("nav");
  $root.className = "day-nav";
  $root.innerHTML = `
    <ul>
      <li data-weekday="1">월</li>
      <li data-weekday="2">화</li>
      <li data-weekday="3">수</li>
      <li data-weekday="4">목</li>
      <li data-weekday="5">금</li>
      <li data-weekday="6">토</li>
      <li data-weekday="7">일</li>
      <li data-weekday="0">전체</li>
    </ul>
  `;
  const $weekdayList = $root.querySelector("ul").children;

  let currentDay = new Date().getDay() || 7;
  $weekdayList[currentDay - 1].className = "selected";

  $root.addEventListener("click", (e) => {
    currentDay = e.target.dataset.weekday;

    for (let i = 0; i < $weekdayList.length; i++)
      $weekdayList[i].classList.remove("selected");

    e.target.classList.add("selected");
  });

  return { $root };
};
