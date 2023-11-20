var video;

// Initialize the video element and turn off autoplay and turn off looping.


window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.load();
	console.log("Video loaded");
	video.autoplay = false;
	video.loop = false;
});

// Play the video and update the volume information.

document.querySelector("#play").addEventListener("click", function() {
	video = document.querySelector("#player1");
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Pause the video

document.querySelector("#pause").addEventListener("click", function() {
	video = document.querySelector("#player1");
	console.log("Pause Video");
	video.pause();
});

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.

document.querySelector("#slower").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.playbackRate *= 0.9;
	console.log("Video speed is " + video.playbackRate);
});

// Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.

document.querySelector("#faster").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.playbackRate /= 0.9;
	console.log("Video speed is " + video.playbackRate);
});

// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.

document.querySelector("#skip").addEventListener("click", function() {
	video = document.querySelector("#player1");
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}
	console.log("Current location " + video.currentTime);
});

// Mute/unmute the video and update the text in the button.

document.querySelector("#mute").addEventListener("click", function() {
	video = document.querySelector("#player1");
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	}
});

// Change the volume based on the slider and update the volume information.

document.querySelector("#slider").addEventListener("change", function() {
	video = document.querySelector("#player1");
	value = document.querySelector("#slider").value;
	console.log("Volume is: " + value + "%");
	video.volume = value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Utilize the existing oldSchool class on the video element

document.querySelector("#vintage").addEventListener("click", function(){
	video = document.querySelector("#player1");
	video.classList.add("oldSchool");
	console.log("Old School");
});

// Remove the oldSchool class from the video.

document.querySelector("#orig").addEventListener("click", function(){
	video = document.querySelector("#player1");
	video.classList.remove("oldSchool");
	console.log("Original");
});



// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });



