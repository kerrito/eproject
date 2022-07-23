// marque
function doDate() {
    var tazteam = "";

    var dd = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var mm = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    var now = new Date();

    tazteam += dd[now.getDay()] + ", " + now.getDate() + " " + mm[now.getMonth()] + " " + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    document.getElementById("time").innerHTML = tazteam;
}

setInterval(doDate, 1000);

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    x.innerHTML = "Geolocation is not supported by this browser.";
}


function showPosition(position) {
    document.getElementById("location").innerHTML = " Latitude: " + position.coords.latitude +
        " Longitude: " + position.coords.longitude;
}

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