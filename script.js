function num(a){
    document.getElementById('display').value += a
}

function ac(){
    document.getElementById('display').value = ''
}

function equalto(){
    var sumValue = document.getElementById('display').value;
    var result = eval(sumValue);
    document.getElementById('display').value = result
}