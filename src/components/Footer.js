export const Footer = () => {
  const $root = document.createElement("footer");

  $root.innerHTML = `
    <footer>
        <ul class="policy">
            <li>
            <a href="http://www.kakaopagecorp.com" target="_blank">회사소개</a>
            </li>
            <li><a href="/policy?type=terms"> • 이용약관</a></li>
            <li>
            <a href="/policy?type=privacy"
                >• <span class="jsx-2789123022 medium">개인정보처리방침</span></a
            >
            </li>
            <li><a href="/policy?type=safeguard"> • 청소년보호정책</a></li>
            <li><a href="/policy?type=notice&amp;noticePage=1"> • 공지사항</a></li>
        </ul>

        <div class="jsx-2789123022 companyInfoWrap">
            <div class="jsx-2789123022 companyInfoHeader companyInfoHeader_pc">
            <div class="companyInfo off">
                <span>(주)카카오엔터테인먼트 사업자 정보 </span>
            </div>
            <span class="copyright">ⓒ Kakao Entertainment Corp.</span>
            </div>
        </div>
    </footer>
  `;

  return { $root };
};
