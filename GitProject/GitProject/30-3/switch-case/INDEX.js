let btn = document.getElementById('btn');

btn.addEventListener('click',click)
function click() {
    let input = document.getElementById("input").value;
    switch (input) {
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            alert('thang co 31 ngay')
            break;
        case '2':
            alert('thang co 28 hoac 29 ngay')
            break;
        default:
            alert('thang co 30 ngay')


    }

}