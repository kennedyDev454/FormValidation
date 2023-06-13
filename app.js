const form = document.querySelector("form");
const inputs = document.querySelectorAll("form input");

function checkInput(input) {
  const type = input.getAttribute("type");
  const regex = {
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    password: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{6,20}/
  };
  switch (type) {
    case "email":
      if (!regex[type].test(input.value)) {
        return `Digite um email correto inclua @ `;
      }

      break;

    case "password":

    if (!regex[type].test(input.value)) {
      return `Campo de precisa de no mínimo 6 caracteres`;
    }

      break;

  }

  return true;
}

function showErro(input, erro) {
  const p = document.createElement("p");
  p.textContent = erro;
  p.classList.add("error");

  input.insertAdjacentElement("afterend", p);
}

function clearErrors(){
    const errors = document.querySelectorAll(".error")
    errors.forEach((error) => error.remove());
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let send = true
  
  clearErrors()

    inputs.forEach(input => {
        const check = checkInput(input);
    
        if (check !== true) {
            send = false
          showErro(input, check);
        }
    })

  if(send){
    setTimeout(() => {
      alert('Formulário enviado')
    },500)
    inputs.forEach(input => {
      input.value = ''
    })

  }
});




