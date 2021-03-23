(function () {
  const form = document.querySelector("#order__form");
  const send = document.querySelector(".form__input");
  console.log(form);
  console.log(send);

  send.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateForm(form)) {
      console.log("На сервер");
    } else {
      console.log("Не отправляем, тк ошибка");
    }
  });

  function validateForm(form) {
    console.log(form);
    let valid = true;

    if(!validate(form.elements.name)) {
      valid = false;
    }
    return valid;
  }

  function validate(element) {
    if (!element.checkValidity()) {
      element.nextElementSiblings.textContent = element.validationMessage;
      element.style.border = "1px solid red";
      return false;
    } else {
      element.nextElementSiblings.textContent = "";
      element.style.border = "";
      return true;
    }
  }

})();