export const DayNavigator = ({ state }) => {
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

  $root.addEventListener("click", (e) => {
    const { weekday } = e.target.dataset;
    state.day = +weekday;
  });

  // method
  const render = () => {
    const _currentDay = state.day;

    for (let i = 0; i < $weekdayList.length; i++) {
      const el = $weekdayList[i];

      if (_currentDay === +el.dataset.weekday) {
        el.classList.add("dayNav__item--selected");
      } else {
        el.classList.remove("dayNav__item--selected");
      }
    }
  };

  // init
  state.subscribe(render);
  render();

  return $root;
};
