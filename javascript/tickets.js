


function Calculate() {

    const ticketNum = parseInt(document.getElementById("quantity").value);

    if (ticketNum < 1) {
        alert("Please enter a valid ticket quantity (min 1)");
    } else {
        const ticketType = parseFloat(document.querySelector('input[name="type"]:checked').value);
        let total = ticketNum * ticketType;

        const guideCheckbox = document.getElementById("guide");
        if (guideCheckbox && guideCheckbox.checked) {
           document.getElementById("guidance").style.visibility = "visible";
            total += parseFloat(guideCheckbox.value);
        }

        const discountInput = (document.getElementById("discount").value).toUpperCase();

        if (discountInput == "MUSEUM10") {
            total = +(total * 0.9);
          document.getElementById("code").style.visibility = "visible";
        }


        /* MAIDER  */
        

       /* if (ticketType == 12) {
            const type = "Adult";
        } else if (ticketType == 8) {
            const type = "Student";
        } else {
            const type = "Child";
        } */

        document.getElementById("moneyAmount").textContent = "Amount to pay: " + total.toFixed(2) + " €";
        document.getElementById("name").textContent = "Name: " + (document.getElementById("nameForm").value);
        document.getElementById("email").textContent = "E-mail: " + (document.getElementById("emailForm").value);
        document.getElementById("date").textContent = "Date: " + (document.getElementById("dateday").value) + "/" + (document.getElementById("datemonth").value) + "/" + (document.getElementById("dateyear").value);
        document.getElementById("time").textContent = "Time: " + (document.getElementById("hour").value);
        document.getElementById("ticketAmount").textContent = "Ticket Amount: " + (document.getElementById("quantity").value);
        document.getElementById("typeTicket").textContent = "Ticket type: " + type;
        document.getElementById("guidance").textContent = "Guidenace: Yes";
        document.getElementById("code").textContent = "Discount: 10%";
    }





}




