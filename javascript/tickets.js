


function Calculate() {

    const ticketNum = parseInt(document.getElementById("quantity").value);

    if (isNaN(ticketNum) || ticketNum < 1) {
        alert("Please enter a valid ticket quantity (min 1)");

    } else {
        const ticketType = parseFloat(document.querySelector('input[name="type"]:checked').value);
        let total = ticketNum * ticketType;

        const guideCheckbox = document.getElementById("guide");
        if (guideCheckbox && guideCheckbox.checked) {
            total += parseFloat(guideCheckbox.value);
        }

        const discountInput = (document.getElementById("discount").value).toUpperCase();

        if (discountInput == "MUSEUM10") {
            total = +(total * 0.9);
        }

        document.getElementById("result").textContent = "Amount to pay: " + total.toFixed(2) + " €";
    }


}

