var s = skrollr.init({
  smoothScrolling: false,
  forceHeight: false
});


 var $page = document.getElementById('page'), $load = document.getElementById('loading'); // 这个定时器的作用就是模拟网页内容加载完成 setTimeout(function () { // 显示网页内容 $page.style.display = 'block'; // 隐藏或者移除加载动画 $load.style.display = 'none'; }, 3000)