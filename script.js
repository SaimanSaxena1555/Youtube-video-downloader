const videoUrlInput = document.getElementById("video-url");
const fetchButton = document.getElementById("detail-button");
const messageDiv = document.getElementById("message");

fetchButton.addEventListener("click",function(event){
    event.preventDefault();
    
    const videoUrl = videoUrlInput.value.trim();


    if (videoUrl === ""){
    messageDiv.textContent = "Please enter a YouTube URL.";
    return;
    }

    const youtubePattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}(&.*)?$/;

    if(!youtubePattern.test(videoUrl)){
        messageDiv.textContent = "Please enter a valid YouTube URL. It should look like: https://www.youtube.com/watch?v=WMMa2u-Mtns";
    return;
    }

 // Mock video details
const videoDetails = {
    title: "Sample Video Title",
    thumbnail: "https://i.ytimg.com/vi/WMMa2u-Mtns/hqdefault.jpg",
    formats: [
      { itag: 18, quality: "360p" },
      { itag: 22, quality: "720p" },
      { itag: 137, quality: "1080p" },
    ],
  };
  
  console.log("Video Details:", videoDetails);

});
