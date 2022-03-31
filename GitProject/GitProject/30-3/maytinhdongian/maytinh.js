function click(a) {
    document.getElementById('hienthi').value += a;
}

function undo() {
    let b = document.getElementById('hienthi').value;
    b = b.slice(0, -1);
    document.getElementById('hienthi').value = b;
}

function kq() {
    let result = document.getElementById('hienthi').value;
    result = eval(result);
    document.getElementById('hienthi').value = result
}