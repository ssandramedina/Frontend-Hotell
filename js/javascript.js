const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const room = document.getElementById("room").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;

    alert(`Tack ${name} ${lastname}! \nDitt ${room}-rum har nu blivit bokat! För ${guests} gäster från ${checkin} till ${checkout}. \n Ett bekräftelse-mail skickas till ${email}.`);
});