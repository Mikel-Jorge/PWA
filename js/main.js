//TODO Revisar el método para que se lance con JQuery al cargar la página entera (Sino en el onload igual no puede cachear bien la página)
window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        
        //TODO Revisar ruta
        navigator.serviceWorker.register('sw.js');
    }
}