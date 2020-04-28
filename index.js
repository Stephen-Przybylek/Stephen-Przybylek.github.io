function pageLoad() {
  var p1 = document.getElementsByClassName("p1")[0];
  var head = document.getElementById("Name");
  head.classList.add("glow");
  p1.style.setProperty('--opac', 1);
}

function delayedPageLoad() {
  setTimeout(pageLoad, 1200);
}


function aboutMeFadeIn() {
  var x = document.getElementsByClassName("p2")[0].childNodes[3];
  var y = document.getElementsByClassName("p2")[0].childNodes[5];
  var z = document.getElementsByClassName("p2")[0].childNodes[7];
  x.setAttribute("class", "fadein");
  y.setAttribute("class", "fadein");
  z.setAttribute("class", "fadein");
}