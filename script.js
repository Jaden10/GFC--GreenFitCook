//DOM选择
const modalLogin = document.querySelector(".modal-login");
const btnLogin = document.querySelector(".btn--login");
const btnCloseModal = document.querySelector(".btn--close-modal");
const overlay = document.querySelector(".overlay");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const slides = document.querySelectorAll(".slide");
const section = document.querySelectorAll("section");
const btnNavLink = document.querySelectorAll(".nav_links");

//函数封装
const openModal = function (e) {
  modalLogin.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function (e) {
  modalLogin.classList.add("hidden");
  overlay.classList.add("hidden");
};

const slideMov = function (curslide) {
  const maxSlide = slides.length;

  slides.forEach((s, i) => {
    s.style.transform = `translateX(${i * 100}%)`;
  });

  const slideTrans = function () {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${(i - (curslide % maxSlide)) * 100}%)`;
    });
  };

  btnRight.addEventListener("click", function () {
    curslide++;
    slideTrans();
  });

  btnLeft.addEventListener("click", function () {
    if (curslide === 0) curslide = maxSlide - 1;
    else curslide--;
    slideTrans();
  });
  setInterval(function () {
    curslide++;
    slideTrans();
  }, 7000);
};

const smoothScroll = function () {
  [...btnNavLink].forEach((btn, i) => {
    if (i) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        [...section][i - 1].scrollIntoView({ behavior: "smooth" });
      });
    }
  });
};
//绑定事件 or 执行函数
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  openModal();
});
btnCloseModal.addEventListener("click", function (e) {
  e.preventDefault();
  closeModal();
});
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

slideMov(0);
smoothScroll();

//交叉观察器--粘性导航
const headerContainer = document.querySelector(".header-container");
const header = document.querySelector(".header");
const headerHeight = headerContainer.getBoundingClientRect().height;

const headerCal = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) header.classList.add("sticky");
  else header.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(headerCal, {
  root: null,
  threshold: 0
});

headerObserver.observe(headerContainer);
