function github() {
    window.open("https://github.com/starish-shubham","_blank");    
}
function linkedIn() {
    window.open("https://www.linkedin.com/in/shubham-gupta-071910215/","_blank");    
}
function mailMe() {
    window.open("mailto:shubhamk0108@gmail.com","_blank");    
}
function whatsApp() {
    var phoneNumber = "+91 9315177926"; // Replace with the recipient's phone number, including the country code
    var message = "Hello! This is a test message."; // Replace with your desired message

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");    
    // window.open(`https://wa.me/${9315177926}?text=${encodeURIComponent(hi)}`, "_blank");    
}


// Contact Form Script
function sendMessage() {
    (function () {
        emailjs.init("wf6ckpTPrzlcXWUFE");
    })();

    var serviceID = "service_u8fv7y9";
    var templateID = "Sg__8032";
    var params = {
        sendername: document.querySelector("#name").value,
        senderemail: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value
    };

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert('thankyou' + params['sendername'] + '! Your message has been sent.')
        })
        .catch();
}
