const Time = () => {
  const currentTime = new Date();
  const years = currentTime.getFullYear();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const secounds = String(currentTime.getSeconds()).padStart(2, "0");
  if (hours > 12) {
    const pmHours = hours - 12;
    document.querySelector(
      ".current-time span"
    ).innerText = `${years}년 오후 ${pmHours}시 ${minutes}분 ${secounds}초`;
  } else {
    document.querySelector(
      ".current-time span"
    ).innerText = `${years}년 오전 ${hours}시 ${minutes}분 ${secounds}초`;
  }
};
setInterval(Time, 10);

let attempts = 0;
let index = 0;
let answer = "APPLE";
let keyboard = [];

function appStart() {
  const finishGame = () => {
    for (i = 0; i < 5; i++) {
      for (j = 0; j < 5; j++) {
        let check = 0;
        if (check === 5) {
          alert("정답입니다");
          window.removeEventListener("keydown", handleKeydown);

          // location.reload()
          return;
        }
        const block = document.querySelector(
          `.board-block[data-index='${i}${j}']`
        );

        const computedStyle = window.getComputedStyle(block);
        const backgroundColor = computedStyle.backgroundColor;

        if (backgroundColor === "rgb(107, 170, 100)") {
          check += 1;
        }
      }
    }
  };

  function keyboard_input_val(return_word) {
    // 키보드 입력칸 바꾸기
    let keyboard = document.querySelectorAll(".keyboard-block");

    for (i = 0; i < 5; i++) {}
  }

  const handleEnterkey = () => {
    //정답칸 바꾸기
    console.log("enter");
    let input_val = [];
    for (i = 0; i < 5; i++) {
      const block = document.querySelector(
        `.board-block[data-index='${attempts}${i}']`
      );
      const word = block.innerText;
      let keyboard = document.querySelector(
        `.keyboard-block[keyboard='${word}']`
      );

      input_val.push(word);

      if (word === answer[i]) {
        block.style.background = "#6BAA64";
        keyboard.style.background = "#6BAA64";
      } else if (answer.includes(word)) {
        block.style.background = "#CAB458";
        keyboard.style.background = "#CAB458";
      } else {
        block.style.background = "#787c7e";
        keyboard.style.background = "#787c7e";
      }
      // for (j = 0; j < keyboard.length; i++) {
      //   if (keyboard[j].innerText === word) {
      //     keyboard[j].style.backgroundColor = "#6BAA64";
      //   }
      // }
    }

    attempts += 1;
    index = 0;

    finishGame();
    return input_val;
  };

  const handleBackSpace = (e) => {
    // 백스페이스를 누르면 인덱스 -1 인덱스가 0이면 작동안되게해야함
    // 인덱스-1 과 동시에 board-block 에 텍스트 사라짐
    if (e.key == "Backspace") {
      let removeWord = document.querySelector(
        `.board-block[data-index='${attempts}${index - 1}']`
      );
      if (index === 0) {
        e.preventDefault();
      } else {
        removeWord.innerText = "";
        index -= 1;
      }
    }
  };

  const handleKeydown = (e) => {
    var key2 = e.key;
    const englishPattern = /^[A-Za-z]+$/;
    if (!englishPattern.test(key2)) {
      const div = document.createElement("div");
      div.innerText = "영어만 입력 가능 합니다.";
      div.style =
        "font-size: 2em; font-weight:900; display: flex; justify-content: center; align-items: center; ; background-color: white; width: 350px; height: 200px; border:1px solid gray; position:absolute; top:20%; left: 44.5%;";
      document.body.appendChild(div);

      setTimeout(function () {
        div.remove();
      }, 1000);

      //  3초 후 함수가 실행됨

      e.preventDefault(); // 영어 키가 아닌 경우 기본 동작을 취소합니다.
      return;
    }

    const key = e.key.toUpperCase();
    const keyCode = e.keyCode;
    const thisBlock = document.querySelector(
      `.board-block[data-index='${attempts}${index}']`
    );

    if (key === "ENTER" && index === 5) {
      handleEnterkey();
    } else {
      if (index === 5) index = 5;
    }

    if (65 <= keyCode && keyCode <= 90) {
      if (index != 5) {
        thisBlock.innerText = key;
        index += 1;
      } else {
        e.preventDefault();
      }
    }

    handleBackSpace(e);
  };

  window.addEventListener("keydown", handleKeydown);
}

appStart();
