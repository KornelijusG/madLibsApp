let count = 0;
let clickBtn = document.getElementById("clickBtn");
let totalClicks = document.getElementById("totalClicks");
clickBtn.onclick = function () {
    count++;
  };
resetBtn.onclick = function () {
    count = 0;
  };
