document.addEventListener("DOMContentLoaded", () => {
  const blurOverlay = document.getElementById("blur-overlay");
  const popup = document.getElementById("popup");
  const showAlertBtn = document.getElementById("show-alert");
  const okBtn = document.getElementById("ok-btn");

  function showPopup() {
    blurOverlay.classList.remove("hidden");
    popup.classList.remove("hidden");
  }

  function hidePopup() {
    blurOverlay.classList.add("hidden");
    popup.classList.add("hidden");
  }

  showAlertBtn.addEventListener("click", showPopup);
  okBtn.addEventListener("click", hidePopup);
});
