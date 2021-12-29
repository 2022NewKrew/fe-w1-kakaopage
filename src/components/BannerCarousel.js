export const BannerCarousel = ({ data }) => {
    const target = document.createElement("div");
    target.className = "white-wrapper"

    const render = () => {
        if (!data || data.length === 0) return target;
        
        target.innerHTML = `
            <div class="banner-carousel">
                <div class="arrow">
                    <img src="https://static-page.kakao.com/static/pc/ic-paging-back-nor.svg?2c964bb7a6b07a7941252b32ea13f03c" alt="">
                </div>
                <div class="banner-image">
                    <img src=${data[0].img} alt="">
                </div>
                <div class="arrow">
                    <img src="https://static-page.kakao.com/static/pc/ic-paging-next-nor.svg?b76f34a1b77e59514735b92464295b7c" alt="">
                </div>
            </div>
        `
        return target;
    }

    return render();
}