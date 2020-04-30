window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  // lay cac key sound thanh array
  const pads = document.querySelectorAll(".pads div");
  // lay cac class pads thanh array
  const visual = document.querySelector(".visual");
  // lay cac class visual thanh array
  //mang mau
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];
//loop for pads de tao music
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      //co the restarts
      sounds[index].currentTime = 0;
      //phat ban nhac
      sounds[index].play();
      //tao animation
      createBubble(index);
    });
  });

  const createBubble = index => {
    //Create bubbles
    // chuyen dong tren the visual
    const bubble = document.createElement("div");
    // them the div tren visual
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    // tao hanh dong cho bubble
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      // remove chuyen dong the
      visual.removeChild(this);
    });
  };
});