//TODO: Banner carousel 동작 구현시 contents 전체를 순회할 수 있도록 수정
export default function Banner (data) {
    const { contents } = data;
    const { img } = contents[0];
    const $bannerBlock = document.createElement('div');

    $bannerBlock.classList.add('banner-block');
    $bannerBlock.innerHTML = `
        <div class="banner-content">
            <div class="banner-change-btn-wrapper">
                <img src="images/previous%20button(white).svg">
            </div>
            <div class="banner-image-wrapper">
                <img class="banner-image" src="${img}">
            </div>
            <div class="banner-change-btn-wrapper">
                <img src="images/next%20button(white).svg">
            </div>
        </div>`

    return $bannerBlock;
}