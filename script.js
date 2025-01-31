function getCurrentPage() {
  const bodyid = document.body.id;

  if(bodyid === 'index-page'){
    const videourlinput = document.getElementById("video-url");
    const fetchbutton = document.getElementById("detail-button");

     

    const videoUrl = videourlinput.value.trim();

    const urlformat = "/^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}(&.*)?$/";

    if(videoUrl ===""){
      alert("Please enter a YouTube URL.");
      return ;
    }




  }
  else if(bodyid === 'download-page'){
//! todo

  }
  else{
    return 'unknown';
  }
}
