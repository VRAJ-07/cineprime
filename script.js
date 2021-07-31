function sendMail(params) {
    var tempParams = {
        name: document.getElementById("name").value,
        contact: document.getElementById("contact").value,
        email: document.getElementById("email").value,
        date: document.getElementById("date").value,
        location: document.getElementById("location").value,
        msg: document.getElementById("msg").value,
    };

    emailjs.send('service_3z9fxfm', 'template_pvopmnk', tempParams)
    .then(function(res) {
        console.log("success", res.status);
    })
}