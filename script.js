// Actividad: Generador de Consejos con JavaScript

// PASO 1: Seleccionar los elementos del DOM
// Utiliza 'const' para declarar las variables, ya que estos elementos no cambiarán.
// Pista: usa document.getElementById('id-del-elemento')

// Seleccionamos el botón
const boton = document.getElementById('fetch-btn');
// Seleccionamos el párrafo donde aparecerá el consejo
const textoConsejo = document.getElementById('quote-text');


// PASO 2: Crear la función para consumir la API
// Utilizaremos una Arrow Function y la sintaxis async/await
// URL de la API: 'https://api.adviceslip.com/advice'

const obtenerConsejo = async () => {
    try {
        // Deshabilitamos el botón mientras carga
        boton.disabled = true;
        // Mostramos un texto de carga
        textoConsejo.textContent = 'Cargando consejo...';
        // 2.1 Utiliza 'fetch' para llamar a la API
        const respuesta = await fetch('https://api.adviceslip.com/advice');
        // 2.2 Convertimos la respuesta a formato JSON
        const data = await respuesta.json();
        // 2.3 Extraemos el consejo
        const consejo = data.slip.advice;
        // 2.4 Mostramos el consejo en el HTML usando Template Literals
        textoConsejo.textContent = `${consejo}`;
    } catch (error) {
        // Mostramos el error en la consola
        console.error('Error al obtener el consejo:', error);
        // Mostramos un mensaje al usuario
        textoConsejo.textContent = 'No se pudo obtener el consejo. Inténtalo nuevamente.';
    } finally {
        // Volvemos a habilitar el botón
        boton.disabled = false;
    }
};


// Conectamos el botón con la función
// Escuchamos el evento 'clic' en el botón

boton.addEventListener('click', obtenerConsejo);