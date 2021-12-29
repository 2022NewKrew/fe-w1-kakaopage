export const Header = () => {
    const target = document.createElement("div");
    target.className = "fix first";

    const render = () => {
        target.innerHTML = `
            <header>
                <h1>
                    <div class="vertical-center">
                        <img src="https://static-page.kakao.com/static/common/logo-kakaopage.svg?e0dffe87c45ca42b47399538391a1954" alt="">
                    </div>
                    <div id="home-menu">
                        <div id="header-search">
                            <form action="">
                                <input type="text">
                                <img src="https://static-page.kakao.com/static/pc/btn_search.png?a8ce9e4eba0250e52d4570c605f79f9a" alt="">
                            </form>
                        </div>
                        <div><img src="https://static-page.kakao.com/static/common/pc-logo-stage.svg?67473e9acf34aa0425a982b16f882f5f" alt=""></div>
                        <div>캐시충전</div>
                        <div class="vertical-division"></div>
                        <div>로그인</div>
                    </div>
                </h1>
            </header>
        `
        return target;
    }

    return render();
}