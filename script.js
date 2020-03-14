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

  document.querySelectorAll(".phone__pic").forEach(element => {
    element.addEventListener("click", event => {
      event.stopPropagation();
      event.currentTarget.classList.toggle("phone__pic_none");
    });
  });

  function initSlides() {
    let slideIndex = 1;

    const plusSlide = () => {
      showSlides((slideIndex += 1));
    };

    const minusSlide = () => {
      showSlides((slideIndex -= 1));
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
  }
  initSlides();

  function initPortfolio() {
    const PORTFOLIO_IMAGES_BLOCK = document.querySelector(".portfolio__images");
    const PORTFOLIO_IMAGES = PORTFOLIO_IMAGES_BLOCK.querySelectorAll("img");
    const PORTFOLIO_WRAPPER_IMAGES = PORTFOLIO_IMAGES_BLOCK.querySelectorAll(
      ".portolio__wrapper-image"
    );
    let arrayImgSrc = [...PORTFOLIO_IMAGES];
    PORTFOLIO_IMAGES_BLOCK.addEventListener("click", event => {
      event.stopPropagation();
      if (event.target.classList.contains("portfolio__image")) {
        PORTFOLIO_IMAGES.forEach(listItem => {
          listItem.classList.remove("portfolio__image_active");
        });
        event.target.classList.add("portfolio__image_active");
      }
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
        moveImages(event.target.innerText);
      }
    });

    function moveImages(key) {
      let moveNumber;
      switch (key) {
        case "All":
          moveNumber = 1;
          break;
        case "Web Design":
          moveNumber = 2;
          break;
        case "Graphic Design":
          moveNumber = 3;
          break;
        case "ArtWork":
          moveNumber = 4;
          break;
        default:
          moveNumber = 1;
          break;
      }
      const lastItems = arrayImgSrc.splice(arrayImgSrc.length - moveNumber);
      arrayImgSrc = [...lastItems, ...arrayImgSrc];
      arrayImgSrc.forEach((listNode, index) => {
        PORTFOLIO_WRAPPER_IMAGES[index].appendChild(listNode);
      });
    }
  }

  initPortfolio();

  function initModal() {
    const FORM = document.querySelector(".quote__form");
    const THEME = document.querySelector(".submit-modal__theme");
    const DESCRIPTION = document.querySelector(".submit-modal__description");
    const BODY = document.querySelector("body");
    const MODAL = document.querySelector(".submit-modal");
    const MODAL_OPACITY = document.querySelector(".submit-modal__opacity");
    const CLOSE = document.querySelector(".submit-modal__close");

    FORM.addEventListener("submit", event => {
      const inputs = event.target.elements;
      THEME.textContent = inputs.subject.value
        ? "Тема: " + inputs.subject.value
        : "Без темы";
      DESCRIPTION.textContent = inputs.detail.value
        ? "Описания: " + inputs.detail.value
        : "Без описания";

      BODY.classList.add("body-modal");
      MODAL.classList.add("submit-modal_open");
      MODAL_OPACITY.style.display = "block";
      FORM.reset();
      event.preventDefault();
    });

    CLOSE.addEventListener("click", event => {
      event.stopPropagation();
      BODY.classList.remove("body-modal");
      MODAL.classList.remove("submit-modal_open");
      MODAL_OPACITY.style.display = "none";
    });
  }
  initModal();
})();
