// marque
var d= new Date();
document.getElementById("time").innerHTML="  DATE : "+d.toDateString()+"  TIME : "+d.toLocaleTimeString();

// navbar
let _scroll = window.scrollY
    const header = document.querySelector(".navbar")
    window.addEventListener('scroll', function () {
        _scroll = window.scrollY;
        if (_scroll >= 300) {
            header.classList.add("active")
            header.classList.add("p-0")
        } else {
            header.classList.remove("active")
            header.classList.remove("p-0")
        }
    });