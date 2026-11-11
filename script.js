const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    result.textContent = "Thank you, " + name + "! Your form is working.";

    form.reset();
});


function contactMe() {
    const phone = "919045480479";

    const message = "Hello Mayank, I visited your portfolio!";

    const url = "https://wa.me/" + phone +
        "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}



