
function Calculate() {

    let ticketNum = document.getElementById("quantity").value;

    if (ticketNum < 1) {
        alert("Please enter a valid ticket quantity");
    }else{
        
        let ticketType = document.querySelector('input[name="type"]:checked').value;

        let total = parseFloat(ticketNum * ticketType);

        let guide = parseInt(document.querySelector('input[name="guide"]:checked').value);
        total += guide;
        let discount = document.getInner("discount").value;


        if (discount == "MUSEUM10") {
            
            total = total-(total/0.1);
            document.getElementById("result").innerHTML = "Amount to pay:  " + total; 

        }else{
            document.getElementById("result").innerHTML = "Amount to pay:  " + total; 
        }

        

    }
}

