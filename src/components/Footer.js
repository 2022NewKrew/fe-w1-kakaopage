export const Footer = () => {
  const $root = document.createElement("footer");

  $root.innerHTML = `
    <footer class="appFooter">
        <div class="appFooter__leftBox">
            <ul class="appFooter__policy">
                <li><a href="http://www.kakaopagecorp.com" target="_blank">회사소개</a></li>
                <li><a href="/policy?type=terms"> • 이용약관</a></li>
                <li>
                    <a href="/policy?type=privacy">• <strong>개인정보처리방침</strong></a>
                </li>
                <li><a href="/policy?type=safeguard"> • 청소년보호정책</a></li>
                <li><a href="/policy?type=notice&amp;noticePage=1"> • 공지사항</a></li>
            </ul>

            <div>
                <p class="appFooter__companyInfo">(주)카카오엔터테인먼트 사업자 정보 </p>
                <p class="appFooter__copyright">ⓒ Kakao Entertainment Corp.</p>
            </div>
        </div>

        <div class="appFooter__rightBox">
            <a href="https://www.kcopa.or.kr/" target="_blank" rel="noopener noreferrer" >
                <img class="appFooter__copyrightImg" src="https://static-page.kakao.com/static/common/okMark.png?861290e3393cbb3c93e6d3056d6905af" alt="ok mark">
                <p class="appFooter__copyrightOK">저작권 ok</p>
            </a>
        </div>
    </footer>
  `;

  return { $root };
};
