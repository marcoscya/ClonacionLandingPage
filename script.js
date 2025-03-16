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
























function vieneClippy() {
    var img = document.getElementById("clippy");
    var img2 = document.getElementById("clippyMensaje");

    // Verificamos si Clippy está oculto
    var isHidden = img.style.display === "none" || img.style.display === "";

    if (isHidden) {
        // Mostrar Clippy de inmediato
        img.style.display = "block";

        // Después de 1 segundo, mostrar el mensaje
        setTimeout(() => {
            img2.style.display = "block";
        }, 1000);
    } else {
        // Ocultar ambos de inmediato si ya estaban visibles
        img.style.display = "none";
        img2.style.display = "none";
    }
}


const translations = {
    en: {
        clippydialogoUno: "Choose one of",
        clippydialogoDos: "the languages",
        botonEspañol: "Spanish",
        botonIngles: "English",
        home: "Home",
        aboutus:"About Us",
        ourteam:"Our Team",
        pricing:"Pricing",
        blog:"Blog",
        contact:"Contact Writing",
        smarter:"Smarter Writing",
        writing:"",
        with:"with AI Tools",
        ai:"",
        coca:"Coca: Your all-in-one AI platform for creating",
        content:"content quickly and cost-effectively",
        try:"Try The Playground",
        watch:"Watch A Demo",
        trusted:"TRUSTED BY BIG COMPANIES",
        rapid:"Rapid and confident",
        communication:"communication tool.",
        we:"We understand the feeling of unease that comes when you're eager to share",
        something:"something you've written. It can be incredibly frustrating when your writing falls",
        short:"short of conveying the ideas you wish to express",
        that:"That's why developed the Masco AI writing tool. It empowars you to write with",
        greater:"greater speed and confidence while also saving you valuable time.",
        our:"Our team, composed of word-leading",
        machine:"machine vision engineers and mobile",
        device:"device programmers, is avaible to",
        perform:"perform custom research and develop",
        tailored:"tailored solutions.",
        it:"It has the capability to read and generate",
        content:"content quickly and cost-effectively",
        encompassing:"encompassing English, Spanish,",
        japanese:"Japanese.",
        operates:"Operates on your",
        preferred:"preferred website too.",
        connect:"Connect our with software the apps you use and love.",
        easily:"Easily bring AI into your workflow to improve",
        unlockvarious:"Unlock various writing",
        benefits:"benefits with AI Writer..",
        unlockan:"Unlock an Array of Writing Benefits",
        and:"and Enhancements Through the",
        power:"Power of AI Writer.",
        learn:"Learn More",
        seamless:"Seamless Integrations",

        withcoca:"with Coca",
        startby:"Start by Introducing the concept of Integrations and their",
        significance:"significance in optimizing workflows for AI Interview notes.",
        viewall:"View all Integrations",   
        build:"Build your team today",
        trough:"through Coca",
        suscribe:"Suscribe to our newletter to get the latest AI Writing",
        tryfree:"Try free 1 month",
        book:"Book a demo",
        readyto:"Ready to",
        getstarted:"get started ?",
        if:"If there are questions you want to ask, we will",
        answear:"answear all your question",
        subcribe:"Subcribe",

        enter:"Enter your email",

        maybe:"Maybe your question is have been",
        answered:"answered, check this out.",
        whatis:"What is Coca Soft",
        how:"How can I get service from Coca Soft",
        whatkind:"What kind of service will I get",
        reserved:"© All Rights Reserved",
    },


    es: {
        clippydialogoUno: "Escoge uno de",
        clippydialogoDos: "los idiomas",
        botonEspañol: "Español",
        botonIngles: "Ingles",
        home: "Inicio",
        aboutus:"Sobre nosotros",
        ourteam:"Nuestro Equipo",
        pricing:"Precios",
        blog:"Blog",
        contact:"Contacto",
        smarter:"Escritura",
        writing:"inteligente con",
        with:"herramientas IA",
        ai:"",
        coca:"Coca: Tu plataforma de IA todo en uno para crear",
        content:"contenido de forma rápida y rentable.",
        try:"Prueba el Playground",
        watch:"Ver una demostración",
        trusted:"CONFIADO POR GRANDES EMPRESAS",
        rapid:"Herramienta de comunicación",
        communication:"rápida y segura.",
        we:"Entendemos la sensación de inquietud que surge cuando estás ansioso por compartir",
        something:"algo que has escrito. Puede ser increíblemente frustrante cuando tu escritura no logra",
        short:"transmitir las ideas que deseas expresar.",
        that:"Por eso desarrollamos la herramienta de escritura Masco AI. Te permite escribir con",
        greater:"mayor rapidez y confianza, además de ahorrarte un tiempo valioso.",
        our:"Nuestro equipo, compuesto por líderes mundiales",
        machine:"ingenieros en visión artificial y desarrolladores",
        device:"de software de dispositivos, están disponibles para",
        perform:"realizar investigaciones personalizadas y desarrollar",
        tailored:"soluciones a medida.",
        it:"Tiene la capacidad de leer y generar",
        content:"contenido de manera rápida y rentable",
        encompassing:"abarcando Inglés, Español,",
        japanese:"Japones",
        operates:"También funciona en tu",
        preferred:"sitio web preferido.",
        connect:"Conecta nuestro software con las aplicaciones que usas y amas.",
        easily:"Incorpora fácilmente la IA en tu flujo de trabajo para mejorar",
        unlockvarious:"Desbloquea diversos beneficios",
        benefits:"de escritura con AI Writer.",
        unlockan:"Desbloquea una variedad de beneficios",
        and:"y mejoras en la escritura a través del",
        power:"poder de AI Writer.",
        learn:"Saber más",
        
        seamless:"Integraciones fluidas",
        withcoca:"con Coca",
        startby:"Comienza introduciendo el concepto de integraciones y su",
        significance:"importancia en la optimización de flujos de trabajo para notas de entrevistas con IA.",
        viewall:"Ver todas las integraciones",  
        build:"Construye tu equipo hoy",
        trough:"a través de Coca",
        suscribe:"Suscríbete a nuestro boletín y recibe lo último en escritura con IA.",
        tryfree:"Prueba gratis 1 mes",
        book:"Reserva una demostración",
        readyto:"Listo",
        getstarted:"para empezar ?",
        if:"Si tienes preguntas, nosotros las",
        answear:"las responderemos todas.",
        subcribe:"Suscribirse",

        enter:"Ingresa tu correo electrónico", 

        maybe:"Tal vez tu pregunta ya ha sido",
        answered:"respondida, échale un vistazo.",
        whatis:"Que es Coca Soft",
        how:"Cómo puedo obtener servicio de Coca Soft",
        whatkind:"Qué tipo de servicio recibiré",
        reserved:"© Todos los derechos reservados",
    }
};


// Función para cambiar idioma y guardar en localStorage
function cambiarIdioma(idioma) {
    localStorage.setItem("idioma", idioma);

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");

        if (translations[idioma][key]) {
            if (element.tagName === "INPUT") {
                element.setAttribute("placeholder", translations[idioma][key]); // Cambia placeholder
            } else {
                element.textContent = translations[idioma][key]; // Cambia texto normal
            }
        }
    });

    // Controlar visibilidad de los spans "writing" y "ai"
    let writingSpan = document.querySelector('[data-i18n="writing"]');
    let aiSpan = document.querySelector('[data-i18n="ai"]');

    if (writingSpan) {
        writingSpan.style.display = idioma === "en" ? "none" : "inline";
    }

    if (aiSpan) {
        aiSpan.style.display = idioma === "en" ? "none" : "inline";
    }
}


// Cargar el idioma guardado al iniciar la página
document.addEventListener("DOMContentLoaded", () => {
    const idiomaGuardado = localStorage.getItem("idioma") || "es";
    cambiarIdioma(idiomaGuardado);
});