export default () => {
  const main = document.querySelector("main");

  const section = document.createElement("section");
  section.className = "event";

  section.innerHTML = `
    <div class="event-wrapper">
        <div class="left-btn"><button>
            <img src="images/ic-paging-back-nor.svg"/>
        </button></div>
        <div class="event__img">
            <img src="images/6o7xFMRGpBITlZ5VhfMkK1.png" />
        </div>
        <div class="right-btn">
            <button>
                <img src="images/ic-paging-next-nor.svg"/>
            </button>
        </div>
    </div>
        `;

  main.appendChild(section);
};
