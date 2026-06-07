const form = document.querySelector("#form");
const launchBtn = document.querySelector("#launch-btn");
const goToFormButton = document.querySelector("#go-to-form-btn");
const userEmailField = document.querySelector("#user-email");

goToFormButton.addEventListener("click", function (e) {
  e.preventDefault();
  form.scrollIntoView();
});

function clearFormFields() {
  const fieldName = form.querySelector('input[type="text"]');
  const fieldEmail = form.querySelector('input[type="email"]');

  fieldName.value = "";
  fieldEmail.value = "";
}

function addGooseElement() {
  const targetContainer = document.querySelector("#form");
  const gooseEl = document.createElement("img");
  gooseEl.classList.add("gus-anim");

  targetContainer.appendChild(gooseEl);
}

function showGooseAnim() {
  const gooseEl = document.querySelector(".gus-anim");

  gooseEl.setAttribute("src", "img/gus-anim.gif");

  setTimeout(() => {
    gooseEl.removeAttribute("src");
  }, 4000);
}

addGooseElement();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#user-name").value;
  const email = document.querySelector("#user-email").value;

  if (!name || !email) {
    alert("Пожалуйста, заполни все поля");
    return;
  }

  showGooseAnim();
  clearFormFields();

  launchBtn.setAttribute("disabled", true);
  launchBtn.style.opacity = "0.7";

  setTimeout(() => {
    launchBtn.removeAttribute("disabled");
    launchBtn.style.opacity = "1";
  }, 4000);
});
