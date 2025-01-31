  const e = require("cors");

  function getCurrentPage() {
    const bodyid = document.body.id;

    if(bodyid === 'index-page'){
      const videourlinput = document.getElementById("video-url");
      const fetchbutton = document.getElementById("detail-button");
      if(videourlinput && fetchbutton){
        fetchbutton.addEventListener("click",function(event){
          event.preventDefault();

          const videoUrl = videourlinput.value.trim();
          
          const youtubePattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}(&.*)?$/;

          if(videoUrl === ""){
            alert("Please enter a YouTube URL.");
            return;
          }
          if(!youtubePattern.test(videoUrl)){
            alert("Please enter a valid YouTube URL. Example: https://www.youtube.com/watch?v=VIDEO_ID");
            return;
          }

          window.location.href = `download-page.html?url=${encodeURIComponent(videoUrl)}`;

        });
      }
      

    }
    else if(bodyid === 'download-page'){

//TODO

    }
    else{
      return 'unknown';
    }
  }
