console.log("aplicación calculadora");
function sumar(){
    const forma = document.getElementById("forma");
    const operandoA = document.getElementById("operandoA");
    const operandoB = document.getElementById("operandoB");
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado)) {
        resultado = "La operación no incluye números"
    } else{
        console.log(`Resultado: ${resultado}`);
        document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
    }
}