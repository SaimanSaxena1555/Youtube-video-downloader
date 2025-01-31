// Get input field and button
const videourlinput = document.getElementById("video-url");
const fetchbutton = document.getElementById("detail-button");

// Check if elements exist before adding an event listener
if (videourlinput && fetchbutton) {
  fetchbutton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents form submission from reloading the page

    // Get the URL from the input field and remove extra spaces
    const videourl = videourlinput.value.trim();

    // Check if the user entered a URL
    if (videourl === "") {
      alert("Please enter a YouTube URL.");
      return;
    }

    // Regular expression to validate YouTube URL
    const youtubePattern =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}(&.*)?$/;

    // Check if the URL is NOT valid
    if (!youtubePattern.test(videourl)) {
      alert(
        "Please enter a valid YouTube URL. Example: https://www.youtube.com/watch?v=VIDEO_ID"
      );
      return;
    }

    // Redirect user to the download page with the video URL as a parameter
    window.location.href = `download-page.html?url=${encodeURIComponent(
      videourl
    )}`;
  });
} else {
  console.error("Error: Input field or button not found in the document.");
}
