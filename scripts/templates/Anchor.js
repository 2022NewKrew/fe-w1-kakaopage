
export default function Anchor (data) {
    const { img, rate, tag, badge, title, isUp, isNew, is15, viewer } = data;
    const $anchor = document.createElement('a');

    $anchor.classList.add('anchor-row-normal-wrapper');
    $anchor.href = "#";
    $anchor.innerHTML = `
            <li class="anchor-row-normal">
                <div class="anchor-row-normal-image-wrapper">
                    <img class="anchor-row-normal-image" src="${img}">
                    <div class="anchor-row-normal-image-tag-wrapper">
                        ${ rate ? '<img class="anchor-row-normal-star-badge" src="images/badge-thumbnail-star.svg">\n' +
                                    '<div class="anchor-row-normal-image-tag">9.9</div>': ''}
                        ${ tag ? '<div class="anchor-row-normal-image-tag">TOP</div>' : ''}
                        <div style="flex: 1"></div>
                        <img class="anchor-row-normal-wait-badge" src="${badge}">
                    </div>
                </div>
                <div class="anchor-row-normal-title">${title}</div>
                <div class="anchor-row-normal-detail">
                    <div class="anchor-row-normal-tag-wrapper">
                        ${isUp ? '<img class="anchor-row-normal-tag" src="images/icon_up.svg">' : ''}
                        ${isNew ? '<img class="anchor-row-normal-tag" src="images/icon_new.svg">' : ''}
                        ${is15 ? '<img class="anchor-row-normal-tag anchor-row-normal-age-15" src="images/icon_15.png">': ''}
                    </div>
                    <img class="anchor-row-normal-person" src="images/icon_read_count.png">
                        <div>${viewer}</div>
                </div>
            </li>`

    return $anchor;
}
