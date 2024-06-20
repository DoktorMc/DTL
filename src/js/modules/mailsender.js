function mailSender() {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);
    console.log('DATA', formData);
    
    if (error === 0) {
      form.classList.add("_sending");
      let response = await fetch("sendmail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
        form.classList.remove("_sending");
      } else {
        alert("Сталася помилка!");
        form.classList.remove("_sending");
      }
    } else {
      alert("Заповніть всі обов'язкові поля");
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const element = formReq[index];

      formRemoveError(element);

      if (element.classList.contains("_email")) {
        if (emailTest(element)) {
          formAddError(element);
          error++;
        }
      } else if (element.classList.contains("_name")) {
        if (nameTest(element)) {
          formAddError(element);
          error++;
        }
      } else if (element.classList.contains("_phone")) {
        if (phoneTest(element)) {
          formAddError(element);
          error++;
        }
      } else if (element.classList.contains("_text")) {
        if (textTest(element)) {
          formAddError(element);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(element) {
    element.parentElement.classList.add("_error");
    element.classList.add("_error");
  }
  function formRemoveError(element) {
    element.parentElement.classList.remove("_error");
    element.classList.remove("_error");
  }
  function emailTest(element) {
    return !/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(
      element.value
    );
  }
  function nameTest(element) {
    return !/^([А-ЯЇЄІҐA-Z][а-яїєіґa-z']+\s[А-ЯЇЄІҐA-Z][а-яїєіґa-z']+)$/.test(
      element.value
    );
  }
  function phoneTest(element) {
    return !/^(\+?38)?\s?(\(?0\d{2}\)?)\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/.test(
      element.value
    );
  }
  function textTest(element) {
    return !/^.{80,}$/.test(element.value);
  }
}

export default mailSender;
