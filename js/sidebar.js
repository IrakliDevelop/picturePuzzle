isOpen = false;

function openNav() {
    isOpen = true;
    document.getElementById("mySidenav").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
}
  
function closeNav() {
    isOpen = false;
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.margin= "0 auto";
}

function toggleNav(){
    if (isOpen)
        closeNav();
    else
        openNav();
}