document
  .getElementById("my-button-open")
  .addEventListener("click", function () {
    document.getElementById("my-modal").classList.add("is-open");
  });

document
  .getElementById("modal-button-close")
  .addEventListener("click", function () {
    document.getElementById("my-modal").classList.remove("is-open");
  });

document
  .getElementById("my-down-button-open")
  .addEventListener("click", function () {
    document.getElementById("my-down-modal").classList.add("is-open");
  });

document
  .getElementById("modal-down-button-close")
  .addEventListener("click", function () {
    document.getElementById("my-down-modal").classList.remove("is-open");
  });
