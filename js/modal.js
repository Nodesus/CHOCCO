const validateFields = (form, fieldsArray) => {

  fieldsArray.forEach((field) => {
    field.removeClass("input__error");
    if (field.val().trim() == "") {
      field.addClass("input__error");
    }
  });

  const errorFields = form.find(".input__error");

  return errorFields.length == 0;
}


$(".form").submit((e) => {
  e.preventDefault();

  const form = $(e.currentTarget);
  const name = form.find("[name='name']");
  const phone = form.find("[name='phone']");
  const comment = form.find("[name='comment']");
  const to = form.find("[name='to']");

  const modal = $("#form__modal");
  const content = modal.find(".form__modal__content");

  modal.removeClass("error__modal");

  const isValid = validateFields(form, [name, phone, comment, to]);

  if (isValid) {
    const request = $.ajax({
      url: "https://webdev-api.loftschool.com/sendmail",
      method: "post",
      data: {
        name: name.val(),
        phone: phone.val(),
        comment: comment.val(),
        to: to.val(),
      },
      error: (data) => { },
    });

    request.done((data) => {
      content.text(data.message);
    });

    request.fail((data) => {
      const message = data.responseJSON.message;
      content.text(message);
      modal.addClass("error__modal")
    });

    request.always(() => {
      $.fancybox.open({
        src: "#form__modal",
        type: "inline",
      })
    });
  }
});

$(".app-close-modal").click(e => {
  e.preventDefault();

  $.fancybox.close();
});