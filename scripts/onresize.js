window.onresize  = () =>{
    if (window.innerWidth > 1100){
        document.getElementById("side-nav").style.width = "100%";
        document.getElementsByTagName("main")[0].style.opacity = 1;
        document.getElementsByTagName("footer")[0].style.opacity = 1;
    }
    else if (window.innerWidth < 1000){
        document.getElementById("side-nav").style.display = "none";

        document.getElementById("side-nav").style.width = "0";
        document.getElementById("side-nav").style.display = "block";
    }
}
