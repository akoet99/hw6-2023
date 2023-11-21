var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("autoplay is set to " + video.autoplay)
	console.log("loop is set to " + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow down video");
	video.playbackRate -= 0.1;
	console.log("video speed " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up video");
	video.playbackRate += 0.1;
	console.log("video speed " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip ahead");
	video.currentTime += 10;
	console.log("current time " + video.currentTime);
	video.addEventListener('ended', function(){
		video.currentTime = 0
		video.play()
	})
});

document.querySelector("#mute").addEventListener("click", function(){
	console.log("mute button");
	if (video.muted == false){
    	video.muted = true;
		document.querySelector("#mute").innerText = "Unmute";}
	else {
    video.muted = false;
	document.querySelector("#mute").innerText = "Mute";}
});

var slider = document.querySelector("#slider")
slider.addEventListener("change", function(vol){
	console.log("volume change");
	video.slider = vol.currentTarget.value / 100;
	console.log("volume " + video.slider);
	document.querySelector("#volume").innerHTML = video.slider * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Old school selected");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original selected");
	video.classList.remove("oldSchool");
})