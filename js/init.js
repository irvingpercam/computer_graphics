$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();
});
$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
});
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");

// Get additional buttons
var mainTopic = document.getElementById("mainTopic");

// Pause and play the video, and change the button text
function playVideo() {
    if (video.paused) {
        video.play();
    }
}
function pauseVideo() {
    if (!video.paused) {
        video.pause();
    }
}

// Show main topic container
function showMainTopic () {
    if (mainTopic.style.display != "block") {
        mainTopic.style.display = "block";
    }
    else {
        mainTopic.style.display = "none";
    }
}

function showSimulator() {
    var simulatorBtn = document.getElementById("simulatorBtn");
    var canvas = document.getElementById("canvas");
    if (canvas.style.display == "inline-block") {
        simulatorBtn.setAttribute("class", "waves-effect waves-light btn-small indigo darken-4")
        simulatorBtn.innerHTML = "Ver Simulador";
        canvas.style.display = "none";
    }
    else if(canvas.style.display != "inline-block") {
        simulatorBtn.setAttribute("class", "waves-effect waves-light btn-small red darken-4")
        simulatorBtn.innerHTML = "Cerrar Simulador";
        main();
    }
}