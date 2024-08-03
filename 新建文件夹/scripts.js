// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    // Get the audio player element
    const audioPlayer = document.getElementById("audioPlayer");

    // Array of audio file paths
    const audioFiles = [
        "mu/song1.mp3",
        "mu/song2.mp3",
        "mu/song3.mp3"
        // Add more file paths as needed
    ];

    // Load all audio files into the audio player
    audioFiles.forEach(file => {
        const source = document.createElement("source");
        source.src = file;
        source.type = "audio/mpeg";
        audioPlayer.appendChild(source);
    });

    // Initialize the current index to play the first song
    let currentIndex = 0;

    // Function to change the current song
    function changeSong(index) {
        if (index >= 0 && index < audioFiles.length) {
            currentIndex = index;
            audioPlayer.src = audioFiles[currentIndex];
            audioPlayer.load();
            audioPlayer.play();
        }
    }

    // Event listeners for prev and next buttons
    document.querySelector(".prev-song").addEventListener("click", function() {
        changeSong(currentIndex - 1);
    });

    document.querySelector(".next-song").addEventListener("click", function() {
        changeSong(currentIndex + 1);
    });

    // Play the first song on page load
    changeSong(0);
});