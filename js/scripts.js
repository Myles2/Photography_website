function myFunction(x) {
  x.classList.toggle("change");
  document.getElementById("myDropdown").classList.toggle("show");
}

function logo(y) {
  y.classList.toggle("change");
  window.location.href = "index.html";
}

function enlarge(z, i) {
  z.classList.toggle("enlarge");
  let ex = document.getElementById("expand")
  let ex_img = document.getElementById("expand_img")
  ex.classList.toggle("enlarge");
  ex_img.src = i;
  document.getElementById("close").classList.toggle("end")
}

function stop() {
  let ex_img = document.getElementById("expand_img")
  ex_img.src = "";
  document.getElementById("close").classList = "close";
  document.getElementById("expand").classList.toggle("enlarge");
}