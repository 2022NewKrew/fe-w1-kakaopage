import { ContentsBox, Anchor } from "../templates";

export default function Weekdays (data) {
    const {title, total, contents} = data;
    const $contentsBox = ContentsBox({title, total});
    const $weekdaysNavGroup = document.createElement('ul'),
        $contentsBoxMain = document.createElement('div');

    let $currentNav;

    const clickWeekday = ($li, anchors) => {
        $currentNav?.classList.remove('selected');
        $currentNav = $li;
        $currentNav.classList.add('selected');

        const $fragment = document.createDocumentFragment();
        anchors.map(anchor => $fragment.appendChild(Anchor(anchor)));
        $contentsBoxMain.innerHTML = '';
        $contentsBoxMain.appendChild($fragment);
    }

    $weekdaysNavGroup.classList.add('weekdays-nav-group');
    $contentsBoxMain.classList.add('content-box-main');

    contents.map((content, i) => {
        const {day, contents: anchors} = content;
        const $li = document.createElement('li');
        $li.classList.add("weekdays-wrapper");
        const $div = document.createElement('div');
        $div.classList.add('weekdays');
        $div.textContent = day;

        $li.addEventListener("click", () => {clickWeekday($li, anchors)});

        if(i === 0){
            clickWeekday($li, anchors);
        }

        $li.appendChild($div);
        $weekdaysNavGroup.appendChild($li);
    })

    $contentsBox.append(...[$weekdaysNavGroup, $contentsBoxMain]);
    return $contentsBox;
}