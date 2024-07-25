let qrText = document.getElementById("qrText")
let qrImage = document.getElementById("qrImage")
let qrButton = document.getElementById("qrButton")

function qrGenerate(){

    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
        qrImage.style.padding = "40px"
    }
    
}

qrButton.addEventListener("click", qrGenerate)