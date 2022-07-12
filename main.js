"use strict"

const hydrateFn = setInterval( function () {
  document.write('Hello!')}, 2000);
setTimeout(stopFn, 60000);
function stopFn () {
  clearInterval(hydrateFn);}
