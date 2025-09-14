const review = localStorage.getItem("review");
  if (review) {
    document.querySelector(".reviewmessage").textContent =
      `You selected ${review} out of 5`;
  }