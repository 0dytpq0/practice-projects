const randomnum = document.querySelector(".randomnum");
const guessnum = document.querySelector(".guessnum");
const button = document.querySelector("button");
const judgement = document.querySelector(".hidden");
const result = document.querySelector(".result")


randomnum.onkeydown = function (e) {
    if (!((e.keyCode > 95 && e.keyCode < 106)
        || (e.keyCode > 47 && e.keyCode < 58)
        || e.keyCode == 8)) {
        return false;
    }
}
//95, < 106은 Numpad 0 ~ 9에 해당합니다.
// 47, < 58은 숫자 행의 0 ~ 9에 해당하며, 8은 백스페이스입니다.
// 따라서 이 스크립트는 잘못된 키가 입력되는 것을 방지합니다.

function handleBtnClick(event) {
    event.preventDefault();
    randomnum.reportValidity();
    guessnum.reportValidity();
    const numLimit = parseInt(Math.ceil(Math.random() * randomnum.value));
    const guessnumValue = guessnum.value;
    if (guessnumValue != "" && numLimit != "") {
        judgement.classList.remove("hidden");
        judgement.innerText = `You chose: ${guessnumValue}, the machine chose: ${numLimit}`;
        if (guessnumValue == numLimit) {
            result.innerText = "You Win!!!";
        } else {
            result.innerText = "You lose!!!";
        }
    }

}

button.addEventListener("click", handleBtnClick);