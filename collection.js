var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function() {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("p").textContent

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"
        } else {
            productlist[count].style.display = "block"
        }
    }
})

function shownavbar() {
    document.getElementById("sideNavbar").style.right = "0";
}

function closenavbar() {
    document.getElementById("sideNavbar").style.right = "-300px";
}

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const statusMessage = document.getElementById("statusMessage");

    if (name === "" || email === "" || message === "") {
        statusMessage.textContent = "Please fill in all fields.";
        statusMessage.style.color = "red";
    } else {
        statusMessage.textContent = "Your message has been sent successfully!";
        statusMessage.style.color = "green";
        document.getElementById("contactForm").reset();
    }
});