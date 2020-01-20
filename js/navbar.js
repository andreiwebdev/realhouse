const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links-ctn");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
    });
};

navSlide();
