// https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event
// https://developer.mozilla.org/ko/docs/Web/API/Element/classList

// input 2번에서 foucsout할 때 input 1번 값과 비교를 한다.
function checkInputValue() {
  const input2 = document.querySelector("input[name='second_name']");

  // console.log(input2);

  input2.addEventListener("focusout", (e) => {
    const input1 = document.querySelector("input[name='first_name']");

    // console.log(input1);

    const input1Value = input1.value;
    const input2Value = e.target.value;
    const messageNode = document.querySelector(".message");

    // debugger;

    if (input1Value === input2Value) {
      messageNode.innerHTML = "";
      return;
    }

    messageNode.innerHTML = "<span>올바른 값을 넣으세요</span>";
    // insertAdjecentHTML
    // messageNode.style.border
    // classlist
  });
}

checkInputValue();
