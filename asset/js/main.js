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
// detailed pages
var link=window.location.href;

    var url=new URL(link);

    var id=url.searchParams.get("id")

    for(var i=0;i<data.length;i++){
        if(data[i].id==id){
            document.getElementById("pagename").innerHTML=data[i].name;
            document.getElementById("link1").href=data[i].link1;
            document.getElementById("link2").href=data[i].link2;
            document.getElementById("link3").href=data[i].link3;
            document.getElementById("link4").href=data[i].link4;
            document.getElementById("link5").href=data[i].link5;
            document.getElementById("link6").href=data[i].link6;
            document.getElementById("link7").href=data[i].link7;
            document.getElementById("link8").href=data[i].link8;
            document.getElementById("title").innerHTML=data[i].title;
            document.getElementById("title1").innerHTML=data[i].title;
            document.getElementById("img-1").src=data[i].img;
            document.getElementById("desc").innerHTML=data[i].detail1;
            document.getElementById("desc2").innerHTML=data[i].detail2;
        }
    }


    // sumit
    // $(document).ready(function(){
    //     $(".tage").OnClick()
    // })
    