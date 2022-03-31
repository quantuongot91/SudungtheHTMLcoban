let img;
function  imgObj() {
    img = document.getElementById('myImage') ;
    img.style.position = 'relative';
    img.style.left = '0px'
}

function movefunction () {
    img.style.left = parseInt(img.style.left) + 10 +'px'
}
window.onload = imgObj;