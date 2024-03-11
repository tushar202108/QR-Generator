let textinput = document.getElementById('textinput');
let imagebox = document.getElementById('image-box');
let QRimage= document.getElementById('QRimage');

function generateQr(){
    QRimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +textinput.value;

}
