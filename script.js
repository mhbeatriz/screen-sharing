const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select a media stream, pass to video element, the play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.onplay();
    };
  } catch (error) {}
}

button.addEventListener("click", async () => {
  //Disable button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  //Reset button
  button.disabled = false;
});

// On Load
selectMediaStream();
