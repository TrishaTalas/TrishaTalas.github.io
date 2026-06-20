const yearElement = document.querySelector("#year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.querySelector("#navbarLinks");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.bootstrap && navbarCollapse?.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
    }
  });
});

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!contactForm.checkValidity()) {
      contactForm.classList.add("was-validated");
      if (formStatus) {
        formStatus.textContent = "Please complete the highlighted fields.";
      }
      return;
    }

    contactForm.reset();
    contactForm.classList.remove("was-validated");
    if (formStatus) {
      formStatus.textContent = "Thanks. This static demo form is ready for a form service.";
    }
  });
}
