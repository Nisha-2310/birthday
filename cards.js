document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music"); // yaha id ka naam ayega

  document.body.addEventListener("click", () => {
    music.play();
  }, { once: true });
});
