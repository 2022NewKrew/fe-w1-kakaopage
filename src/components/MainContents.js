export const MainContents = function({ $app }) {

    this.$target = document.createElement("article");
    $app.appendChild(this.$target);

    this.render = () => {
        this.$target.innerHTML = `
            <div class="center-container">
                <div class="column-container">
                    <div class="white-wrapper genre">
                        <ul class="genre-ul">
                            <li><a class="genre-link" href="">홈</a></li>
                            <li><a class="genre-link" href="">요일연재</a></li>
                            <li><a class="genre-link" href="">웹툰</a></li>
                            <li><a class="genre-link" href="">소녀</a></li>
                            <li><a class="genre-link" href="">드라마</a></li>
                            <li><a class="genre-link" href="">로맨스</a></li>
                            <li><a class="genre-link" href="">로판</a></li>
                            <li><a class="genre-link" href="">액션무협</a></li>
                            <li><a class="genre-link" href="">BL</a></li>
                        </ul>
                    </div>
                    <div class="white-wrapper">
                        <div class="carousel">
                            <div>
                                <img class="carousel-big-image" src="https://dn-img-page.kakao.com/download/resource?kid=bIkRze/hzmU03aZdy/nOK6kDHHj1mcGtoRR0eDik" alt="">

                                <div class="big-image-info">
                                    <div class="big-image-description">
                                        <div>ㅋㅋㅋ웹툰 아카데미</div>
                                        <div>이벤트 | 웹툰 | 23.7만명</div>
                                    </div>
                                    <div class="big-image-title">
                                        <span>카카오 페이지 데뷔반 2월 7일 오픈</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="white-wrapper padding-wrapper">
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
                    </div>
                    <div class="white-wrapper">
                        <div class="banner-carousel">
                            <div class="arrow">
                                <img src="https://static-page.kakao.com/static/pc/ic-paging-back-nor.svg?2c964bb7a6b07a7941252b32ea13f03c" alt="">
                            </div>
                            <div class="banner-image">
                                <img src="https://dn-img-page.kakao.com/download/resource?kid=gPEB1/hzhOklLHwx/b9atKBc9aVXCF3Gu9KKKHK" alt="">
                            </div>
                            <div class="arrow">
                                <img src="https://static-page.kakao.com/static/pc/ic-paging-next-nor.svg?b76f34a1b77e59514735b92464295b7c" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="white-wrapper padding-wrapper">
                        <div class="h3-header">
                            <div>
                                <h3>요일 연재 TOP</h3>
                                <span>(1,553)</span>
                            </div>
                            <div class="more">
                                <div>더보기</div>
                                <img src="https://static-page.kakao.com/static/common/ic-more-gray.svg?639494b81c8127013d0e627243aee94e" alt="">
                            </div> 
                        </div>   
                        <div class="weekly-container">
                            <div class="weekday">
                                <ul>
                                    <li class="selected">
                                        <div>월</div>
                                    </li>
                                    <li>
                                        <div>화</div>
                                    </li>
                                    <li>
                                        <div>수</div>
                                    </li>
                                    <li>
                                        <div>목</div>
                                    </li>
                                    <li>
                                        <div>금</div>
                                    </li>
                                    <li>
                                        <div>토</div>
                                    </li>
                                    <li>
                                        <div>일</div>
                                    </li>
                                    <li>
                                        <div>완결</div>
                                    </li>
                                </ul>
                            </div>
                            <div class="content-grid">
                                <div class="content-item">
                                    <a href="">
                                        <div class="thumbnail-wrapper">
                                            <img class="thumbnail" src="//dn-img-page.kakao.com/download/resource?kid=bfX1rP/hyZ8yn61br/1chxAoU3qzkhQjtcCK0yOk&filename=th2" alt="">
                                            <div class="thumbnail-bottom">
                                                <div>TOP</div>
                                                <div>
                                                    <img src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div>먹을수록 강해짐 제목이 길면 어쩌구</div>
                                        <div class="content-detail">
                                            <div class="badges">
                                                <img src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f" alt="">
                                                <img src="https://static-page.kakao.com/static/common/icon_15.png?ccf202bf79001052f43af077a0947e74" alt="">
                                            </div>
                                            <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="">
                                            <div>39.2만명</div>
                                        </div>
                                    </a>
                                </div>

                                <div class="content-item">
                                    <a href="">
                                        <div class="thumbnail-wrapper">
                                            <img class="thumbnail" src="//dn-img-page.kakao.com/download/resource?kid=bfX1rP/hyZ8yn61br/1chxAoU3qzkhQjtcCK0yOk&filename=th2" alt="">
                                            <div class="thumbnail-bottom">
                                                <div>TOP</div>
                                                <div>
                                                    <img src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div>악녀는 마리오네트</div>
                                        <div class="content-detail">
                                            <div class="badges">
                                                <img src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f" alt="">
                                                <img src="https://static-page.kakao.com/static/common/icon_15.png?ccf202bf79001052f43af077a0947e74" alt="">
                                            </div>
                                            <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="">
                                            <div>39.2만명</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="content-item">
                                    <a href="">
                                        <div class="thumbnail-wrapper">
                                            <img class="thumbnail" src="//dn-img-page.kakao.com/download/resource?kid=bfX1rP/hyZ8yn61br/1chxAoU3qzkhQjtcCK0yOk&filename=th2" alt="">
                                            <div class="thumbnail-bottom">
                                                <div>TOP</div>
                                                <div>
                                                    <img src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div>다정한 그대를 지키는 방법</div>
                                        <div class="content-detail">
                                            <div class="badges">
                                                <img src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f" alt="">
                                                <img src="https://static-page.kakao.com/static/common/icon_15.png?ccf202bf79001052f43af077a0947e74" alt="">
                                            </div>
                                            <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="">
                                            <div>39.2만명</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="content-item">
                                    <a href="">
                                        <div class="thumbnail-wrapper">
                                            <img class="thumbnail" src="//dn-img-page.kakao.com/download/resource?kid=bfX1rP/hyZ8yn61br/1chxAoU3qzkhQjtcCK0yOk&filename=th2" alt="">
                                            <div class="thumbnail-bottom">
                                                <div>TOP</div>
                                                <div>
                                                    <img src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div>먹을수록 강해짐</div>
                                        <div class="content-detail">
                                            <div class="badges">
                                                <img src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f" alt="">
                                                <img src="https://static-page.kakao.com/static/common/icon_15.png?ccf202bf79001052f43af077a0947e74" alt="">
                                            </div>
                                            <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="">
                                            <div>39.2만명</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="content-item">
                                    <a href="">
                                        <div class="thumbnail-wrapper">
                                            <img class="thumbnail" src="//dn-img-page.kakao.com/download/resource?kid=bfX1rP/hyZ8yn61br/1chxAoU3qzkhQjtcCK0yOk&filename=th2" alt="">
                                            <div class="thumbnail-bottom">
                                                <div>TOP</div>
                                                <div>
                                                    <img src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div>먹을수록 강해짐</div>
                                        <div class="content-detail">
                                            <div class="badges">
                                                <img src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f" alt="">
                                                <img src="https://static-page.kakao.com/static/common/icon_15.png?ccf202bf79001052f43af077a0947e74" alt="">
                                            </div>
                                            <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="">
                                            <div>39.2만명</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="content-item">
                                    <a href="">
                                        <div class="thumbnail-wrapper">
                                            <img class="thumbnail" src="//dn-img-page.kakao.com/download/resource?kid=bfX1rP/hyZ8yn61br/1chxAoU3qzkhQjtcCK0yOk&filename=th2" alt="">
                                            <div class="thumbnail-bottom">
                                                <div>TOP</div>
                                                <div>
                                                    <img src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div>먹을수록 강해짐</div>
                                        <div class="content-detail">
                                            <div class="badges">
                                                <img src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f" alt="">
                                                <img src="https://static-page.kakao.com/static/common/icon_15.png?ccf202bf79001052f43af077a0947e74" alt="">
                                            </div>
                                            <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="">
                                            <div>39.2만명</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="content-item">
                                    <a href="">
                                        <div class="thumbnail-wrapper">
                                            <img class="thumbnail" src="//dn-img-page.kakao.com/download/resource?kid=bfX1rP/hyZ8yn61br/1chxAoU3qzkhQjtcCK0yOk&filename=th2" alt="">
                                            <div class="thumbnail-bottom">
                                                <div>TOP</div>
                                                <div>
                                                    <img src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div>먹을수록 강해짐</div>
                                        <div class="content-detail">
                                            <div class="badges">
                                                <img src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f" alt="">
                                                <img src="https://static-page.kakao.com/static/common/icon_15.png?ccf202bf79001052f43af077a0947e74" alt="">
                                            </div>
                                            <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="">
                                            <div>39.2만명</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="content-item">
                                    <a href="">
                                        <div class="thumbnail-wrapper">
                                            <img class="thumbnail" src="//dn-img-page.kakao.com/download/resource?kid=bfX1rP/hyZ8yn61br/1chxAoU3qzkhQjtcCK0yOk&filename=th2" alt="">
                                            <div class="thumbnail-bottom">
                                                <div>TOP</div>
                                                <div>
                                                    <img src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div>먹을수록 강해짐</div>
                                        <div class="content-detail">
                                            <div class="badges">
                                                <img src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f" alt="">
                                                <img src="https://static-page.kakao.com/static/common/icon_15.png?ccf202bf79001052f43af077a0947e74" alt="">
                                            </div>
                                            <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="">
                                            <div>39.2만명</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="content-item">
                                    <a href="">
                                        <div class="thumbnail-wrapper">
                                            <img class="thumbnail" src="//dn-img-page.kakao.com/download/resource?kid=bfX1rP/hyZ8yn61br/1chxAoU3qzkhQjtcCK0yOk&filename=th2" alt="">
                                            <div class="thumbnail-bottom">
                                                <div>TOP</div>
                                                <div>
                                                    <img src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div>먹을수록 강해짐</div>
                                        <div class="content-detail">
                                            <div class="badges">
                                                <img src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f" alt="">
                                                <img src="https://static-page.kakao.com/static/common/icon_15.png?ccf202bf79001052f43af077a0947e74" alt="">
                                            </div>
                                            <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="">
                                            <div>39.2만명</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="content-item">
                                    <a href="">
                                        <div class="thumbnail-wrapper">
                                            <img class="thumbnail" src="//dn-img-page.kakao.com/download/resource?kid=bfX1rP/hyZ8yn61br/1chxAoU3qzkhQjtcCK0yOk&filename=th2" alt="">
                                            <div class="thumbnail-bottom">
                                                <div>TOP</div>
                                                <div>
                                                    <img src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div>먹을수록 강해짐</div>
                                        <div class="content-detail">
                                            <div class="badges">
                                                <img src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f" alt="">
                                                <img src="https://static-page.kakao.com/static/common/icon_15.png?ccf202bf79001052f43af077a0947e74" alt="">
                                            </div>
                                            <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="">
                                            <div>39.2만명</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        `
    }
    
    this.render();
}