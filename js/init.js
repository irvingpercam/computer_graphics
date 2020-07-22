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