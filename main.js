function change () {
    var x = document.querySelector('.box input').value || 0
    var tabuada = "";
    for (var i = 0;i < 11;i++) {
        let val = x * i;
        tabuada += (`<p> ${x} * ${i} = ${val} </p>`)
    }
    document.querySelector('.box .tabuada').innerHTML = tabuada
}