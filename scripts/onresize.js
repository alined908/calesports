var doit;
function resizedend(){
  document.getElementById("side-nav").style.display = "block"
}

window.onresize  = () =>{
    if (window.innerWidth > 1100){
        console.log("bye");
        document.getElementById("side-nav").style.width = "100%";
        document.getElementsByTagName("main")[0].style.opacity = 1;
        document.getElementsByTagName("footer")[0].style.opacity = 1;
        document.getElementById("side-nav").style.display = "block";
    }
    if (window.innerWidth <= 1100){
        console.log("hello");
        document.getElementById("side-nav").style.display = "none";
        document.getElementById("side-nav").style.width = "0";
        clearTimeout()
        doit = setTimeout(function(){
          resizedend();
        }, 10);
    }
}
