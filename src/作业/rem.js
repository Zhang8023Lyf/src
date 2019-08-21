function rem () {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 750 + 20 + "px";
}
rem();
//onresize 当屏幕的尺寸发生改变的时候会触发的事件
window.onresize = rem;