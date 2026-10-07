function abrirVentana(id) {

    const ventanas = document.querySelectorAll(".ventana");

    ventanas.forEach(v => {

        v.style.display = "none";

    });

    const ventana = document.getElementById(id);

    ventana.style.display = "block";

    if (id === "habilidades") {

        document.querySelector(".html").style.width = "0";
        document.querySelector(".css").style.width = "0";
        document.querySelector(".js").style.width = "0";

        setTimeout(() => {

            document.querySelector(".html").style.width = "75%";
            document.querySelector(".css").style.width = "50%";
            document.querySelector(".js").style.width = "65%";

        }, 150);

    }
    if (id === "conocimientos") {

        document.querySelector(".hardware").style.width = "0";
        document.querySelector(".redes").style.width = "0";
        document.querySelector(".server").style.width = "0";
        document.querySelector(".linux").style.width = "0";
        document.querySelector(".mantenimiento").style.width = "0";

        setTimeout(() => {

            document.querySelector(".hardware").style.width = "85%";
            document.querySelector(".redes").style.width = "60%";
            document.querySelector(".server").style.width = "70%";
            document.querySelector(".linux").style.width = "55%";
            document.querySelector(".mantenimiento").style.width = "90%";

        }, 150);

    }

}

function cerrarVentana(id) {

    document.getElementById(id).style.display = "none";

}
function actualizarHora() {

    const ahora = new Date();

    const hora = ahora.getHours().toString().padStart(2, "0");

    const minutos = ahora.getMinutes().toString().padStart(2, "0");

    document.getElementById("hora").textContent =
        `${hora}:${minutos}`;

}

actualizarHora();

setInterval(actualizarHora, 1000);
onclick = "abrirVentana('sobreMi')"
onclick = "cerrarVentana('sobreMi')"