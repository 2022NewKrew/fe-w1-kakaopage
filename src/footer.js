export default () => {
  const footer = document.createElement("footer");

  footer.innerHTML = `
    <div>
        <ul>
            <li><a>회사소개</a></li>
            <li><a> • 이용약관</a></li>
            <li><a> • 개인정보처리방침</a></li>
            <li><a> • 청소년보호정책</a></li>
            <li><a> • 공지사항</a></li>
        </ul>
        <div>(주)카카오엔터테인먼트 사업자 정보 | 사업자 정보 확인</div>
        <div class="copyright">ⓒ Kakao Entertainment Corp.</div>
    </div>
    <div>
        <img src="assets/images/ok mark.png"/>
        <span>저작권 ok</span>
    </div>
    `;

  document.body.appendChild(footer);
};
