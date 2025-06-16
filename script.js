// Guardar datos del usuario en el index.
if (document.getElementById("form-datos")){
  document.getElementById("form-datos").addEventListener("submit", function (e) /*addEventListener; código a ejecutar cuando se hace clic*//*function(e) Accede a algo cuando se hace click en el botón.*/{
    e.preventDefault();
    const datos ={
      nombre: document.getElementById("nombre").value,
      entrada: document.getElementById("entrada").value,
      salida: document.getElementById("salida").value
    };
    localStorage.setItem("reservaDatos", JSON.stringify(datos));
    window.location.href = "habitaciones.html";
  });
}

// Seleccionar tipo de habitación en la página habitaciones.
function seleccionarHabitacion(tipo, precio) {
  const datos = JSON.parse(localStorage.getItem("reservaDatos"));
  datos.habitacion = tipo;
  datos.precio = precio;
  localStorage.setItem("reservaDatos", JSON.stringify(datos));
  window.location.href = "confirmacion.html";
}

// Mostrar resumen en la página de confirmación.
if (document.getElementById("resumen")) {
  const datos = JSON.parse(localStorage.getItem("reservaDatos"));
  const resumen = `
    <p><strong>Nombre:</strong> ${datos.nombre}</p>
    <p><strong>Entrada:</strong> ${datos.entrada}</p>
    <p><strong>Salida:</strong> ${datos.salida}</p>
    <p><strong>Habitación:</strong> ${datos.habitacion}</p>
    <p><strong>Precio por noche:</strong> $${datos.precio}</p>
  `;
  document.getElementById("resumen").innerHTML = resumen;
}
