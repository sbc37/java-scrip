/* =========================================================
   Galería de fotos interactiva
   ========================================================= */

/**
 * Se ejecuta cuando el ratón entra en una miniatura.
 * @param {HTMLImageElement} previewPic - la imagen sobre la que está el ratón.
 *        Llega desde el HTML como "this" en onmouseover="upDate(this)".
 */
function upDate(previewPic) {

    // --- Paso 3.1 y 3.2: comprobar que el evento se dispara y ver los datos ---
    console.log("upDate se ejecutó");
    console.log("alt:", previewPic.alt);
    console.log("src:", previewPic.src);

    // Guardamos el div en una variable para no buscarlo dos veces
    var contenedor = document.getElementById("image");

    // --- Paso 3.3: cambiar el texto del div por la descripción de la imagen ---
    contenedor.innerHTML = previewPic.alt;

    // --- Paso 3.5: cambiar la imagen de fondo del div ---
    // El CSS espera el formato url('ruta'), así que hay que armar ese texto.
    contenedor.style.backgroundImage = "url('" + previewPic.src + "')";
}


/**
 * Se ejecuta cuando el ratón sale de la miniatura.
 * Devuelve el div a su estado original.
 */
function unDo() {

    console.log("unDo se ejecutó");

    var contenedor = document.getElementById("image");

    // --- Paso 4.1: fondo vacío, como estaba al cargar la página ---
    contenedor.style.backgroundImage = "url('')";

    // --- Paso 4.2: texto original ---
    contenedor.innerHTML = "Pase el ratón por encima de una imagen para mostrarla aquí";
}
