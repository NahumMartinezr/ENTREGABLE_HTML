 
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();  
     
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

     
    const message = `Nombre: ${nombre}\nApellido: ${apellido}\nCorreo electrónico: ${email}\nNúmero de teléfono: ${telefono}\nContraseña: ${password}\nConfirmar Contraseña: ${confirmPassword}`;

     
    alert(message);

    
    console.log("Datos del registro:\n" + message);

     
    document.getElementById("registrationForm").reset();
});

const loginButton = document.getElementById("loginButton");
const loginModal = document.getElementById("loginModal");
const closeModal = document.getElementsByClassName("close")[0];

loginButton.addEventListener("click", () => {
  loginModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  loginModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
});