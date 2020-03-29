function initHeader() {
  const SITE_NAV = document.querySelector(".header-nav");
  const SITE_NAV_LIST = SITE_NAV.querySelectorAll("a");
  const ASIDE_SITE_NAV = document.querySelector(".aside__navigation");
  const ASIDE_SITE_NAV_LIST = ASIDE_SITE_NAV.querySelectorAll("a");
  const ASIDE_SITE_NAV_WRAPPER = document.querySelector(
    ".aside__navigation-wrapper"
  );
  const BURGER_MENU = document.querySelector(".header_burger-menu");
  const BODY = document.querySelector("body");

  const toggleBurger = () => {
    BURGER_MENU.classList.toggle("header_burger-menu_active");
    ASIDE_SITE_NAV.classList.toggle("aside__navigation_active");
    ASIDE_SITE_NAV_WRAPPER.classList.toggle("aside__navigation-wrapper_active");
    BODY.classList.toggle("body-modal");
  };

  ASIDE_SITE_NAV_WRAPPER.addEventListener("click", event => {
    event.stopPropagation();
    toggleBurger();
  });

  SITE_NAV.addEventListener("click", event => {
    event.stopPropagation();
    if (event.target.classList.contains("header-nav__link")) {
      SITE_NAV_LIST.forEach(listItem => {
        listItem.classList.remove("header-nav__link_active");
      });
      event.target.classList.add("header-nav__link_active");
    }
  });

  ASIDE_SITE_NAV.addEventListener("click", event => {
    event.stopPropagation();
    if (event.target.classList.contains("aside-nav__link")) {
      ASIDE_SITE_NAV_LIST.forEach(listItem => {
        listItem.classList.remove("aside-nav__link_active");
      });
      event.target.classList.add("aside-nav__link_active");
      toggleBurger();
    }
  });

  BURGER_MENU.addEventListener("click", event => {
    event.stopPropagation();
    toggleBurger();
  });

  // document.addEventListener("scroll", onScroll);

  // function onScroll(event) {
  //   const curPos = window.scrollY;
  //   const scrollHeight =
  //     document.documentElement.scrollTop +
  //     document.documentElement.clientHeight;
  //   const allHeight = document.documentElement.scrollHeight;

  //   document.querySelectorAll("main>section").forEach(el => {
  //     if (el.offsetTop <= curPos && el.offsetTop + el.offsetHeight > curPos) {
  //       SITE_NAV_LIST.forEach(a => {
  //         a.classList.remove("header-nav__link_active");
  //         if (el.getAttribute("id") === a.getAttribute("href").substring(1)) {
  //           a.classList.add("header-nav__link_active");
  //         }
  //       });
  //     }

  //     if (scrollHeight === allHeight) {
  //       document
  //         .querySelector(".header-nav__link_active")
  //         .classList.remove("header-nav__link_active");
  //       SITE_NAV_LIST[SITE_NAV_LIST.length - 1].classList.add(
  //         "header-nav__link_active"
  //       );
  //     }
  //     if (document.querySelector(".header-nav__link_active") === null) {
  //       SITE_NAV_LIST[0].classList.add("header-nav__link_active");
  //     }
  //   });
  // }

  document.querySelectorAll(".phone__pic").forEach(element => {
    element.addEventListener("click", event => {
      event.stopPropagation();
      event.currentTarget.classList.toggle("phone__pic_none");
    });
  });
}

function initSlides() {
  const WRAPPER_SLIDES = document.querySelector(".slide__wrapper");
  let SLIDES = document.querySelectorAll(".slide__item");
  const slidesWidth = SLIDES[0].offsetWidth;

  let moveDirection = null;
  const leftSlide = () => {
    if (!moveDirection) {
      WRAPPER_SLIDES.classList.add("slide__wrapper_move");
      WRAPPER_SLIDES.style.left =
        WRAPPER_SLIDES.offsetLeft - slidesWidth + "px";

      moveDirection = "left";
    }
  };
  const rightSlide = () => {
    if (!moveDirection) {
      WRAPPER_SLIDES.classList.add("slide__wrapper_move");
      WRAPPER_SLIDES.style.left =
        WRAPPER_SLIDES.offsetLeft + slidesWidth + "px";

      moveDirection = "right";
    }
  };

  const transitionEnd = event => {
    WRAPPER_SLIDES.classList.remove("slide__wrapper_move");
    switch (moveDirection) {
      case "right":
        WRAPPER_SLIDES.insertBefore(SLIDES[SLIDES.length - 1], SLIDES[0]);
        SLIDES = document.querySelectorAll(".slide__item");
        WRAPPER_SLIDES.style.left =
          WRAPPER_SLIDES.offsetLeft - slidesWidth + "px";
        break;

      case "left":
        WRAPPER_SLIDES.insertBefore(
          SLIDES[0],
          SLIDES[SLIDES.length - 1].nextSibling
        );
        SLIDES = document.querySelectorAll(".slide__item");
        WRAPPER_SLIDES.style.left =
          WRAPPER_SLIDES.offsetLeft + slidesWidth + "px";
        break;
    }
    moveDirection = false;
  };
  WRAPPER_SLIDES.addEventListener("transitionend", transitionEnd);

  document
    .querySelector(".slider__arrow_left")
    .addEventListener("click", event => {
      event.stopPropagation();
      leftSlide();
    });
  document
    .querySelector(".slider__arrow_right")
    .addEventListener("click", event => {
      event.stopPropagation();
      rightSlide();
    });
}

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
      PORTFOLIO_WRAPPER_IMAGES[index].append(listNode);
    });
  }
}

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

initHeader();
initSlides();
initPortfolio();
initModal();
