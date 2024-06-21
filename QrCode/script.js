document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    let imgBox = document.getElementById("imgBox");
    let qrImage = document.getElementById("qrImage");
    let qrText = document.getElementById("qrText");

    let config;
    fetch('config.json')
        .then(response => response.json())
        .then(data => {
            config = data;
            // document.getElementById("generateButton").addEventListener("click", generateQR);
        });

    
    function generateQR() {
        if (qrText.value.length > 0) {
            let qrCodeURL = `${config.qrCodeAPI}?size=${config.qrCodeSize}&data=${qrText.value}`;
            qrImage.src = qrCodeURL;
            imgBox.classList.add("show-img");
        } else {
            qrText.classList.add("error");
            setTimeout(() => {
                qrText.classList.remove("error");
            }, 1000)
        }
    }

    document.getElementById("generateButton").addEventListener("click", generateQR);
});