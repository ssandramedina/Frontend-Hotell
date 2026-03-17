const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event){
    event.preventDefault();


    bookingForm.style.display = "none";

    const confirmation = document.createElement("p");
    confirmation.textContent = `Bokningen är bekräftad! Välkommen åter.`;
    confirmation.style.color = "beige";
    confirmation.style.fontSize = "30px";
    confirmation.style.marginTop = "30px";

    document.querySelector(".booking-section").appendChild(confirmation);

});