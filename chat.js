document.getElementById('whatsapp-button').addEventListener('click', function() {
    // Reemplaza '123456789' con el número de teléfono al que deseas enviar el mensaje.
    var phoneNumber = '+573226643958';
    
    // Puedes personalizar el mensaje predefinido.
    var message = '¡Hola! Estoy interesado en vender con su página.';

    // Construye el enlace de WhatsApp.
    var whatsappLink = 'https://wa.me/' + phoneNumber + '/?text=' + encodeURIComponent(message);

    // Abre el enlace en una nueva ventana o pestaña.
    window.open(whatsappLink, '_blank');
});
