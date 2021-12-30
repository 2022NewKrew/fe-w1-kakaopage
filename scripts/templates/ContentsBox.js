export default function ContentsBox (data) {
    const { title, total } = data;

    const $contentsBox = document.createElement('div');
    $contentsBox.classList.add('content-box');

    $contentsBox.innerHTML = `
        <div class="content-box-header">
            <div class="content-box-title-wrapper">
                <div class="content-box-title">${title}</div>
                <span class="content-box-total-count">(${total})</span>
            </div>
            <div class="show-more-wrapper">
                <div class="show-more-text">더보기</div>
                <img class="show-more-img" src="images/ic-more-gray.svg">
            </div>
        </div>`

    return $contentsBox;
}