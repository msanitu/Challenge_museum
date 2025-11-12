


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

        document.getElementById("result").textContent = 
        '<p id="result">'
                + '"Amount to pay: "' + total.toFixed(2) + '" €"' +
            '</p>'+
            '<p>'
                + 'Name:'+
            '</p>'
            '<p>'
                'E-mail:'
            '</p>'
            '<p>'
                'Date:'
            '</p>'
            '<p>'
                'Time:'
            '</p>'
            '<p>'
                'Ticket amount:'
            '</p>'
            '<p>'
                'Ticket type:'
            '</p>'
            '<div class="opcionales" id="opcionales">'
                '<p>'
                    'Guidenace:'
                '</p>'
                '<p>'
                    'Discount:'
                '</p>;';
    }


}

