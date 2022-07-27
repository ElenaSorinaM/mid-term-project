// HAMBURGER MENU
/*
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
*/

// CTA SECTION - to review

const emailForm = document.querySelector(".email-form");
const email = document.querySelector('#email');
const submitBtn = document.querySelector('.cta-button');
const validEmail = document.querySelector('.valid-email')

submitBtn.addEventListener('click', askValidEmail)

async function askValidEmail(e) {
    e.preventDefault();
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
    });
    const finalRes = await res.status;
    if(finalRes === 201) {
      validEmail.innerHTML = "You subscribed :)";
      validEmail.setAttribute("class", "valid");
    }
   else{
    validEmail.innerHTML = "Please use a valid mail";
    validEmail.setAttribute("class", "invalid");
   };
}

  


