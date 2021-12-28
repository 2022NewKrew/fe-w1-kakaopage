export const DayNavigator = () => {
  const $root = document.createElement("nav");
  $root.className = "day-nav";

  $root.innerHTML = `
    <ul>
        <li data-weekday="1">월</li>
        <li class="selected" data-weekday="2">화</li>
        <li data-weekday="3">수</li>
        <li data-weekday="4">목</li>
        <li data-weekday="5">금</li>
        <li data-weekday="6">토</li>
        <li data-weekday="7">일</li>
        <li data-weekday="0">전체</li>
    </ul>
  `;

  return { $root };
};
