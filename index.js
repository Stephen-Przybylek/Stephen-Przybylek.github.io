function pageLoad() {
  var p1 = document.getElementsByClassName("p1")[0];
  var head = document.getElementById("Name");
  head.classList.add("glow");
  setTimeout(programming, 800);
  setTimeout(fintech, 1600);
  setTimeout(algorithms, 2400);

  p1.style.setProperty('--opac', 1);
}

function programming() {
  var programming = document.getElementById("programming");
  programming.classList.add("glow");
}

function fintech() {
  var fintech = document.getElementById("fintech");
  fintech.classList.add("glow");
}

function algorithms() {
  var algorithms = document.getElementById("algorithms");
  algorithms.classList.add("glow");
}



function delayedPageLoad() {
  setTimeout(pageLoad, 1200);
}


function aboutMeFadeIn() {
  var x = document.getElementsByClassName("p2")[0].childNodes[3];
  var y = document.getElementsByClassName("p2")[0].childNodes[5];
  var z = document.getElementsByClassName("p2")[0].childNodes[7];
  var zz = document.getElementsByClassName("p2")[0].childNodes[9];
  x.setAttribute("class", "fadein");
  y.setAttribute("class", "fadein");
  z.setAttribute("class", "fadein");
  zz.setAttribute("class", "picfade");
}