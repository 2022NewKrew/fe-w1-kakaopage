export default () => {
  const div = document.createElement("div");
  div.className = "downlink";

  div.innerHTML = `
    <img src="images/download link.png" />
    `;

  document.body.appendChild(div);
};
