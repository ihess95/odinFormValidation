const formDiv = document.querySelector(".formDiv");
const emailForm = document.querySelector(".emailForm");
emailForm.textContent = "Email";
const countryForm = document.querySelector(".countryForm");
countryForm.textContent = "Country";
const zipForm = document.querySelector(".zipForm");
zipForm.textContent = "Zip Code";
const passForm = document.querySelector(".passForm");
passForm.textContent = "Password";
const passFormV = document.querySelector(".passFormV");
passFormV.textContent = "Conf";
const formBtn = document.querySelector(".formBtn");
formBtn.textContent = "Submit";

formDiv.appendChild(emailForm);
formDiv.appendChild(countryForm);
formDiv.appendChild(zipForm);
formDiv.appendChild(passForm);
formDiv.appendChild(passFormV);
