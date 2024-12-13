//DOM选择
const modalLogin = document.querySelector(".modal-login");
const btnLogin = document.querySelector(".btn--login");
const btnCloseModal = document.querySelector(".btn--close-modal");
const overlay = document.querySelector(".overlay");

//函数封装
const openModal = function () {
  modalLogin.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modalLogin.classList.add("hidden");
  overlay.classList.add("hidden");
};

//绑定事件
btnLogin.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
