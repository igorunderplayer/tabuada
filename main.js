function change () {
    var x = document.querySelector('.box input').value || 0
    var size = Number(document.querySelector('.box select').value) || 10
    console.log(size)
    var tabuada = "";
    for (var i = 0;i < size + 1;i++) {
        let val = x * i;
        tabuada += (`<p> ${x} x ${i} = ${val} </p><hr>`)
    }
    document.querySelector('.box .tabuada').innerHTML = tabuada
}