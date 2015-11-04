
$('#scene1').parallax();
$('#scene2').parallax();
$('#scene3').parallax();

function randRange(data) {
       var newTime = data[Math.floor(data.length * Math.random())];
       return newTime;
}

function toggleSomething() {
       var timeArray = new Array(1000, 1500, 2000, 4000, 3000, 1000, 2000, 1500);


       $(".ci").fadeToggle(150);
       $(".np").fadeToggle(150);


       clearInterval(timer);
       timer = setInterval(toggleSomething, randRange(timeArray));
}

var timer = setInterval(toggleSomething, 2000);
// 1000 = Initial timer when the page is first loaded
