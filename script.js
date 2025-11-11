document.getElementById("boton-info").addEventListener("click", function() {
  alert("Gracias por visitar mi web. ¡Más funciones próximamente!");
});

document.getElementById("form-registro").addEventListener("submit", function(event) {
  event.preventDefault(); // evita que la página se recargue

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simula guardar los datos (por ahora solo muestra un mensaje)
  document.getElementById("mensaje").textContent = 
    `¡Hola ${nombre}! Tu cuenta fue creada correctamente.`;

  // Limpia los campos
  document.getElementById("form-registro").reset();
});
