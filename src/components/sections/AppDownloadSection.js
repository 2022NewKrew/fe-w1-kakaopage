export const AppDownloadSection = () => {
  const $root = document.createElement("section");

  $root.innerHTML = `
    <div class="appDownloadBox">
      <img
        src="https://static-page.kakao.com/static/pc/appDownload.png?ec8ae2e191ce28a0a4eaa59d5577fa8b"
        alt="download link"
      />
    </div>
`;

  return $root;
};
