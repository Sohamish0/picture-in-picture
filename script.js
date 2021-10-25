'use strict'

const btn = document.querySelector('.btn');
const videoElm = document.querySelector('.video');

async function startCapture() {
  
    try {
        
        videoElm.srcObject = await navigator.mediaDevices.getDisplayMedia({video: true});
        videoElm.onloadedmetadata = () =>{
            videoElm.play();
        }
        
    } catch(err) {
      console.error("Error: " + err);
    }

}

btn.addEventListener('click', () => {
    btn.disabled = true;
    videoElm.requestPictureInPicture();
    btn.disabled = false;
})
// on load /////////////////////////////
startCapture();