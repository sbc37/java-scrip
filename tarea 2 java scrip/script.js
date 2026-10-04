/* =========================================================
   Galería de fotos accesible — proyecto final
   ========================================================= */


/**
 * PUNTO 9 — Se ejecuta una sola vez, cuando la página termina de cargar.
 * Recorre todas las miniaturas y les agrega el atributo tabindex,
 * que es lo que permite llegar a ellas con la tecla Tab.
 */
function prepararGaleria() {

    // 9.1 — Comprobar que el evento onload se disparó
    console.log("prepararGaleria se ejecutó: la página terminó de cargar");

    // Obtenemos la colección de imágenes con la clase "preview"
    var imagenes = document.getElementsByClassName("preview");

    console.log("Imágenes encontradas: " + imagenes.length);

    // 9.2 y 9.3 — Bucle for que recorre cada imagen y le pone el tabindex
    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].setAttribute("tabindex", "0");
        console.log("tabindex agregado a la imagen " + i + ": " + imagenes[i].alt);
    }
}


/**
 * Muestra la imagen ampliada.
 * La llaman cuatro eventos distintos: onmouseover, onfocus (entrar)
 * y sus contrarios se encargan de unDo.
 *
 * @param {HTMLImageElement} previewPic - la miniatura activa.
 *        Llega desde el HTML como "this".
 */
function upDate(previewPic) {

    console.log("upDate se ejecutó");
    console.log("alt:", previewPic.alt);
    console.log("src:", previewPic.src);

    var contenedor = document.getElementById("image");

    // Cambiar el texto del div por la descripción de la imagen
    contenedor.innerHTML = previewPic.alt;

    // Cambiar la imagen de fondo. El CSS espera el formato url('ruta')
    contenedor.style.backgroundImage = "url('" + previewPic.src + "')";
}


/**
 * Devuelve el div a su estado original.
 * La llaman onmouseleave (ratón) y onblur (teclado).
 */
function unDo() {

    console.log("unDo se ejecutó");

    var contenedor = document.getElementById("image");

    // Fondo vacío, como estaba al cargar la página
    contenedor.style.backgroundImage = "url('')";

    // Texto original
    contenedor.innerHTML = "Pase el ratón por encima de una imagen para mostrarla aquí";
}
