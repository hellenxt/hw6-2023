var video;

window.addEventListener("load", function() {
	console.log("Now opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	console.log("Autoplay is set to " + video.autoplay)
	video.loop = false;
	console.log("Looping is set to " + video.loop)
});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play the Video");
	video.play()
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause the Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down the Video");
	video.playbackRate *= 0.9
	console.log("Playback rate is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up the Video");
	video.playbackRate /= 0.9
	console.log("Playback rate is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10
	if (video.currentTime >= video.duration)
		video.currentTime = 0
	console.log("Current time is " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function(){
	video.muted = !video.muted;
	document.querySelector('#mute').innerHTML = video.muted ? 'Unmute' : 'Mute';
	console.log('Is the Video Muted: ', video.muted)
})

// Volume Slider
document.querySelector("#slider").addEventListener
("change", function(){
	console.log("Now in Slider")
    console.log(this)
    console.log(this.value)
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
});

// Styled
document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add('oldSchool')
})

// Original
document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove('oldSchool')
})