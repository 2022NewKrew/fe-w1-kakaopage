export const DummyPage = () => {
  const $root = document.createElement("main");

  const currentPath = decodeURI(window.location.pathname).substring(1);

  $root.innerHTML = `
        <section>
            <div class="contentRowListBox">
                <h3>${currentPath}을 보고싶으신가요?</h3>

                <p>기다리지 마세요. 이를 구현할 생각이 없거든요 ^^</p>
                <img src="../public/images/pippi.png" alt="삐삐"/>
            </div>
        </section>
    `;

  return { $root };
};
