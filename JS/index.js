const Time = () => {
  const currentTime = new Date()
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const secounds = String(currentTime.getSeconds()).padStart(2,'0')
  if (hours > 12) {
    const pmHours = hours - 12;
    document.querySelector('.current-time span').innerText = `오후 ${pmHours}시 ${minutes}분 ${secounds}초`
  } else {
    document.querySelector('.current-time span').innerText = `오전 ${hours}시 ${minutes}분 ${secounds}초`
  }
}
setInterval(Time, 10)

let attempts = 0;
let index = 0;
let answer = "APPLE"


function appStart() {

  const finishGame = () =>{
    console.log("피니시게임실행")
    let check = 0
    for(i=0; i < 5; i++){
      for(j=0; j<5; j++){
        const block = document.querySelector(`.board-block[data-index='${i}${j}']`)
        
        const computedStyle = window.getComputedStyle(block);
        const backgroundColor = computedStyle.backgroundColor;
        console.log(backgroundColor);


        if(backgroundColor === "rgb(107, 170, 100)"){
          check += 1;
        }
      if(check === 5){
        alert("정답입니다");
        window.removeEventListener('keydown',handleKeydown)

        // location.reload()
        return
      }
      }
    }
  }

  const handleEnterkey = ()=> {
    for (i=0; i<5; i++){
      const block = document.querySelector(`.board-block[data-index='${attempts}${i}']`)
      const word = block.innerText;
      // const word2 = document.querySelector(`.board-block[data-index='${attempts}${i}']`).textContent;
      // const word3 = document.querySelector(`.board-block[data-index='${attempts}${i}']`).textContent;
      // const word4 = document.querySelector(`.board-block[data-index='${attempts}${i}']`).textContent;
      // const word5 = document.querySelector(`.board-block[data-index='${attempts}${i}']`).textContent;
      console.log(word, answer[i])
      if (document.querySelector('.keyboard-block').innerText === word){
      }
      
      if (word === answer[i]){
        block.style.background = "#6BAA64";

      }else if (answer.includes(word)){
        block.style.background = "#CAB458";
      }else{
        block.style.background = "#787c7e";
      }

    }
  
    attempts += 1
    index =0
    finishGame()
  }

  const handleBackSpace = (e) => {
    // 백스페이스를 누르면 인덱스 -1 인덱스가 0이면 작동안되게해야함
    // 인덱스-1 과 동시에 board-block 에 텍스트 사라짐
    if (e.key == "Backspace") {
      let removeWord = document.querySelector(`.board-block[data-index='${attempts}${index-1}']`)
      if( index === 0){
        e.preventDefault()
        console.log(index)
      }else{
        removeWord.innerText = ""
        index -= 1;
        console.log(index)
      }
    }
  }
  
  const handleKeydown = (e) => {
    console.log(e)
    var key2 = e.key;
    const englishPattern = /^[A-Za-z]+$/;
    if (!englishPattern.test(key2)) {
      const div = document.createElement('div')
      div.innerText = '영어만 입력 가능 합니다.'
      div.style = "font-size: 2em; font-weight:900; display: flex; justify-content: center; align-items: center; ; background-color: white; width: 350px; height: 200px; border:1px solid gray; position:absolute; top:20%; left: 44.5%;"
      document.body.appendChild(div);

      setTimeout(function()  {
      div.remove() }, 1000);

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
        handleEnterkey()
      }else{
        if (index === 5) 
        index = 5
    }    

    if (65 <= keyCode && keyCode <= 90) {
      if(index != 5){
        console.log(key, typeof key , e.keyCode, index);
        thisBlock.innerText = key;
        index += 1;
      }else{
        e.preventDefault()
      }
    }
    
    handleBackSpace(e)
  };
  
  window.addEventListener("keydown", handleKeydown);
}

appStart();
