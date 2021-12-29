export const LinkGrid = () => {
    const target = document.createElement("div");
    target.className = "white-wrapper padding-wrapper";

    const render = () => {
        target.innerHTML = `
            <div class="link-grid">
                <a href="">
                    <div>
                        <span>오늘 UP</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <span>오늘 신작</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <span>오리지널</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <span>무료회차 UP</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <span>독립운동가 웹툰</span>
                    </div>
                </a>
                <a href="">
                    <div>
                        <span>오늘 랭킹</span>
                    </div>
                </a>
            </div>
        `
        return target;
    }
    
    return render();
}