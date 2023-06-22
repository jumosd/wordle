const Time = () => {
  const currentTime = new Date()
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const secounds = String(currentTime.getSeconds()).padStart(2,'0')
  if (hours > 12) {
    const pmHours = hours - 12;
    document.querySelector('.current-time span').innerText = `${pmHours}시 ${minutes}분 ${secounds}초`
  } else {
    document.querySelector('.current-time span').innerText = `${hours}시 ${minutes}분 ${secounds}초`
  }
}
setInterval(Time, 10)
let attempts = 0;
let index = 0;
function appStart() {
  const handleEnterkey = ()=> {
    attempts += 1
    index =0
  }
  const handleKeydown = (e) => {
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
    
  window.addEventListener("keydown", handleKeydown);
appStart();
