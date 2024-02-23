const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());   // this line will excute in browers console. only for understand purpose
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
