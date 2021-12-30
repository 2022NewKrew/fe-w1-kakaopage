export default (data) => {
  const main = document.querySelector("main");

  const section = document.createElement("section");
  section.className = "menu";

  section.innerHTML = `
    <div class="menu-wrapper">
        ${data
          .map(
            ({ name, sub }) => `
        <a href="#">
            <div>${name}</div>
            ${sub ? `<div>${sub}</div>` : ""}
        </a>
        `
          )
          .join("")}
    </div> 
        `;

  main.appendChild(section);
};
