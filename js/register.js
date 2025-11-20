const form = document.querySelector("form");

const navnOutput = document.querySelector("#navn_output");
const aarsagenOutput = document.querySelector("#aarsagen_output");
const slemtOutput = document.querySelector("#slemt_output");
const provetOutput = document.querySelector("#provet_output");
const symptomerOutput = document.querySelector("#symptomer_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":invalid")?.focus();
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const navn = formData.get("name");
  const aarsagen = formData.get("cause");
  const slemt = formData.get("severity");
  const provet = formData.getAll("tried");
  const symptomer = formData.get("notes");

  navnOutput.textContent = navn || "";
  aarsagenOutput.textContent = aarsagen || "";
  slemtOutput.textContent = slemt || "";
  provetOutput.textContent = provet.length > 0 ? provet.join(", ") : "";
  symptomerOutput.textContent = symptomer || "";

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
