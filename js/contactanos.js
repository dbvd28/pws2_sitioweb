function validateForm() {
   
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
  
  
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
  
   
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    let isValid = true;
  
   
    name.classList.remove("invalid");
    email.classList.remove("invalid");
    message.classList.remove("invalid");
  
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
  
    if (name.value.trim() === "") {
      name.classList.add("invalid");
      nameError.textContent = "Por favor, ingrese su nombre.";
      isValid = false;
    }
  

    if (!emailPattern.test(email.value)) {
      email.classList.add("invalid");
      emailError.textContent = "Por favor, ingrese un correo electrónico válido.";
      isValid = false;
    }
  
   
    if (message.value.trim() === "") {
      message.classList.add("invalid");
      messageError.textContent = "Por favor, ingrese un mensaje.";
      isValid = false;
    }
  
    if (isValid) {
      alert("Formulario enviado correctamente.");
      document.getElementById("contact-form").submit();
    }
  }
  