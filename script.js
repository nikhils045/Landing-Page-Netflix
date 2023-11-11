var acc = document.getElementsByClassName("accordion");
var i;
var j;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    // Close all other accordion panels
    for (j = 0; j < acc.length; j++) {
      if (acc[j] != this) {
        acc[j].classList.remove("active");
        acc[j].nextElementSibling.style.display = "none";
      }
    }

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }

    if (panel.style.maxHeight) {
      panel.style.maxHeight = "100%";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
