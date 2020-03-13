(function() {
  const SITE_NAV = document.querySelector(".header-nav");
  const SITE_NAV_LIST = SITE_NAV.querySelectorAll("a");
  SITE_NAV.addEventListener("click", event => {
    event.stopPropagation();
    if (event.target.classList.contains("header-nav__link")) {
      SITE_NAV_LIST.forEach(listItem => {
        listItem.classList.remove("header-nav__link_active");
      });
      event.target.classList.add("header-nav__link_active");
    }
  });

  const SCREEN_PHONES = document.querySelectorAll(".phone__pic");
  SCREEN_PHONES.forEach(element => {
    element.addEventListener("click", event => {
      event.stopPropagation();
      event.currentTarget.classList.toggle("phone__pic_none");
    });
  });

  let slideIndex = 1;

  const plusSlide = () => {
    showSlides((slideIndex += 1));
  };

  const minusSlide = () => {
    showSlides((slideIndex -= 1));
  };

  const currentSlide = n => {
    showSlides((slideIndex = n));
  };

  const showSlides = n => {
    const slides = document.querySelectorAll(".slide__item");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  };

  showSlides(slideIndex);

  document
    .querySelector(".slider__arrow_left")
    .addEventListener("click", event => {
      event.stopPropagation();
      minusSlide();
    });

  document
    .querySelector(".slider__arrow_right")
    .addEventListener("click", event => {
      event.stopPropagation();
      plusSlide();
    });

  const PORTFOLIO_NAV = document.querySelector(".portfolio-nav");
  const PORTFOLIO_NAV_LIST = PORTFOLIO_NAV.querySelectorAll("button");
  PORTFOLIO_NAV.addEventListener("click", event => {
    event.stopPropagation();
    if (event.target.classList.contains("portfolio-nav__button")) {
      PORTFOLIO_NAV_LIST.forEach(listItem => {
        listItem.classList.remove("portfolio-nav__button_active");
      });
      event.target.classList.add("portfolio-nav__button_active");
    }
  });
})();
