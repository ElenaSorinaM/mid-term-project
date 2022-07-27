const emailForm = document.querySelector(".contact-form");
const email = document.querySelector('#e-mail');
const submitBtn = document.querySelector('.contact-button');
const validEmail = document.querySelector('.result')

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
