const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // the toggle navigation
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 7 + 1.5
        }s`;
      }
    });
    // Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

const formInput = document.querySelector("#email");
const submitButton = document.querySelector("#buttonTap");
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validateForm = () => {
  if (!formInput.value.match(validRegex)) {
    alert("Please enter a valid email nature");
  }
else {
  localStorage.setItem("#email", JSON.stringify(formInput.value));
    alert("successfully created");
    formInput = JSON.parse(localStorage.getItem("#email"));
    formInput(trim);
  }
};

submitButton.addEventListener("click", () => {
  validateForm();
});

