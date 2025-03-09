document.addEventListener("DOMContentLoaded", () => {
    let delay = 500; // Tiempo inicial del delay

    // Seleccionar solo los elementos que ya tienen el atributo data-aos
    document.querySelectorAll("[data-aos]").forEach((element) => {
        element.setAttribute("data-aos-delay", delay);
        delay += 100; // Aumenta el delay en 200ms para cada elemento
    });

    // Inicializar AOS
    AOS.init({
        once: false,  
        mirror: true, 
    });

    // Forzar actualización de AOS en cada recarga rápida
    setTimeout(() => {
        AOS.refresh();
    }, 500);

    // Actualizar AOS al hacer scroll
    document.addEventListener("scroll", () => {
        AOS.refresh();
    });

    // Volver al inicio al recargar la página
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
});

function moveSlider() {
    let slider = document.getElementById("slider");
    let children = [...slider.children]; // Convertimos en un array
    let firstChild = children[0]; // El que se va a mover

    // **Obtenemos la clase del último elemento (para reutilizar su espacio)**
    let lastChild = children[children.length - 1];
    let lastClass = lastChild.classList[1]; // Posición actual (ej. "pos4")

    // **Eliminamos clases de posición de todos**
    children.forEach(div => div.classList.remove("pos1", "pos2", "pos3", "pos4"));

    // **Rotamos las posiciones**
    children[1]?.classList.add("pos1"); // El que estaba en pos2 ahora es pos1
    children[2]?.classList.add("pos2"); // El que estaba en pos3 ahora es pos2
    children[3]?.classList.add("pos3"); // El que estaba en pos4 ahora es pos3
    firstChild.classList.add(lastClass); // El que baja al final toma la última clase (pos4)

    // **Realizar el movimiento**
    let slideHeight = firstChild.offsetHeight + 10;
    slider.style.transition = "transform 1s ease-in-out";
    slider.style.transform = `translateY(-${slideHeight}px)`;

    setTimeout(() => {
        slider.style.transition = "none";
        slider.appendChild(firstChild); // Movemos el primer elemento al final
        slider.style.transform = "translateY(0)";
    }, 1000);
}

setInterval(moveSlider, 3000);
