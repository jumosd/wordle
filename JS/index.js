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
