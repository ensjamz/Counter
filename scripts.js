var count = 0;
var interval = setInterval(function() {
  count++;
  document.querySelector('.count').innerHTML = count;
  
  if (count === 100) {
    clearInterval(interval);
    document.querySelector('.counter').classList.add('up');
  }
}, 50);
