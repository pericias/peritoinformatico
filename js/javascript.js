document.addEventListener("DOMContentLoaded", function() {
    let menu = document.getElementById("menu");

    let timeoutId;

    // Función para ocultar el menú lentamente después de 4 segundos de inactividad
    function hideMenu() {
        let opacity = 1; // Inicializar la opacidad
        timeoutId = setTimeout(function() {
            let fadeEffect = setInterval(function () {
                if (opacity <= 0) {
                    clearInterval(fadeEffect); // Detener el efecto de desvanecimiento
                    menu.style.display = "none"; // Ocultar el menú cuando la opacidad llega a 0
                } else {
                    opacity -= 0.05; // Reducir gradualmente la opacidad
                    menu.style.opacity = opacity; // Aplicar la opacidad al menú
                }
            }, 50); // Intervalo de tiempo para el efecto de desvanecimiento
        }, 7000); // Tiempo de espera antes de comenzar el efecto de desvanecimiento
    }

    // Mostrar el menú cuando se detecta actividad
    function showMenu() {
        clearTimeout(timeoutId);
        menu.style.display = "block"; // Mostrar el menú cuando se detecta actividad
        menu.style.opacity = 1; // Restaurar la opacidad
        hideMenu(); // Reiniciar el temporizador
    }

    // Agregar eventos de mousemove y keyup para detectar actividad del usuario
    document.addEventListener("mousemove", showMenu);
    document.addEventListener("keyup", showMenu);

    // Inicialmente ocultar el menú después de 4 segundos
    hideMenu();
});
