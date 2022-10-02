let inputs = document.querySelectorAll("#nameField, #emailField, #contactField, #messageField");
let knapp = document.querySelector("#connectBtn");
knapp.disabled = true;

for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("input", () => {
        let values = [];
        inputs.forEach(v => values.push(v.value));
        knapp.disabled = values.includes("");
        if(knapp.disabled == false){
            knapp.style.backgroundColor = "#0F4AB2";
        }else{
            knapp.style.background = "rgba(15, 74, 178, 0.5)";
        }
    })
}

function ClearFields() {
    document.getElementById("nameField").value = "";
    document.getElementById("emailField").value = "";
    document.getElementById("contactField").value = "";
    document.getElementById("messageField").value = "";
    knapp.disabled = true;
    knapp.style.background = "rgba(15, 74, 178, 0.5)";
}

function myFunction(){
    alert("Thank you! We will get in touch with you as soon as possible.");
}


