let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSelection = document.querySelectorAll("main section");

let lastId;
let cur = [];

window.addEventListener("scroll", (event) => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});
const contactForm = document.querySelector("#contact-form");
const publicKey = "jAHh757Y7xQ00Qzt7";
const serviceID = "service_sgng2ce";
const templateID = "template_v43dafq";

emailjs.init(publicKey);
contactForm.addEventListener("submit", (e) => {
  const submitBtn = document.querySelector(".submit-btn");
  const nameInput = document.querySelector("#user_name");
  const emailInput = document.querySelector("#user_email");
  const messageInput = document.querySelector("#message");
  e.preventDefault();
  submitBtn.innerText = "Un instant...";
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  emailjs.send(serviceID, templateID, inputFields).then(
    () => {
      submitBtn.innerText = "Message envoyé";
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    },
    (error) => {
      console.log(error);
      submitBtn.innerText = "Une erreur est survenue";
    }
  );
});
