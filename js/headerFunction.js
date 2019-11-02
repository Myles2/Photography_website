window.onscroll = function() {headerFunction()};

function headerFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("navMenu").className = "rolled";
    document.getElementsByClassName("bar1")[0].style.backgroundColor = "#000";
    document.getElementsByClassName("bar2")[0].style.backgroundColor = "#000";
    document.getElementsByClassName("bar3")[0].style.backgroundColor = "#000";
  }
  else {
    document.getElementById("navMenu").className = "";
    document.getElementsByClassName("bar1")[0].style.backgroundColor = "#fff";
    document.getElementsByClassName("bar2")[0].style.backgroundColor = "#fff";
    document.getElementsByClassName("bar3")[0].style.backgroundColor = "#fff";
  }
}
