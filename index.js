function pageLoad() {
  var html = document.documentElement;
  var e = document.getElementById("Header");
  html.style.setProperty('--opac', 0);
  e.classList.add("glow");

}

function delayedPageLoad() {
  setTimeout(pageLoad, 1500);
}