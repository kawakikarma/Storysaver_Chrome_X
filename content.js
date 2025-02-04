// Function to download the media (video or image)
function downloadMedia(url, type) {
    const a = document.createElement("a");
    a.href = url;

    // Set the download attribute based on file type (video or image)
    if (type === 'video') {
        a.download = "Instagram_Story.mp4";
    } else if (type === 'image') {
        a.download = "Instagram_Story.jpg";
    }

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Function to extract and download Instagram story (both video and image)
function getInstagramStoryUrl() {
    const videoElement = document.querySelector("video");
    const imageElement = document.querySelector("img");

    // If it's a video, get the video URL
    if (videoElement) {
        const videoUrl = videoElement.src;
        if (videoUrl) {
            downloadMedia(videoUrl, 'video');
        }
    } 
    // If it's an image, get the image URL
    else if (imageElement) {
        const imageUrl = imageElement.src;
        if (imageUrl) {
            downloadMedia(imageUrl, 'image');
        }
    }
}

// Call the function to check for video/image and download
getInstagramStoryUrl();
