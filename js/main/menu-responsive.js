function btnMenu() {
  let menu = document.getElementById("menuHeader");
  if (menu.className == "nav") {
    menu.className += " menuResponsive";
  } else {
    menu.className = "nav";
  }
}
