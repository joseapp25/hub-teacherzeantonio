function toggleTranslation(id) {
    var translation = document.getElementById(id);
    translation.classList.toggle("show");
}

function getYouTubeID(url) {
    const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
}

function setYouTubeThumbnails() {
    const videoLinks = document.querySelectorAll(".video-link");

    videoLinks.forEach(link => {
        const videoURL = link.href;
        const videoID = getYouTubeID(videoURL);
        const img = link.querySelector(".video-thumbnail");

        if (videoID) {
            img.src = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
        } else {
            console.error("Invalid YouTube URL:", videoURL);
        }
    });
}

document.addEventListener("DOMContentLoaded", setYouTubeThumbnails);