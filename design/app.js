function toggleAnswer(index) {
    const answer = document.getElementById(`an${index}`);
    const icon = document.getElementById(`icon${index}`); 
    const isActive = answer.classList.contains('show'); //Devuelve valor boleano true o false si tiene la clase show

    // Cierra todas las respuestas al eliminar la clase show
    document.querySelectorAll('.an').forEach(an => an.classList.remove('show'));
    // Cambia todos los íconos no seleccionados al ícono de más
    document.querySelectorAll('.icon').forEach(ic => ic.src = './assets/images/icon-plus.svg');

    // Afecta la pregunta seleccionada con respuesta no activa y la muestra
    if (!isActive) {
        answer.classList.add('show');
        icon.src = './assets/images/icon-minus.svg';
    }
}
