//Crear la función recibir_datos()
function recibir_datos()
{
    var nombre = document.getElementById('nombre').value
    let correo = document.getElementById('email').value
    var fecha = document.getElementById('fecha').value

    /*console.log(nombre)
    console.log(correo)
    console.log(fecha)*/
    document.getElementById('txtnombre').value = nombre
    document.getElementById('txtemail').value = correo
    document.getElementById('txtfecha').value = fecha
    alert('Nombre: ' +nombre+'\nCorreo: '+correo+'\nFecha: '+fecha)
}

function sumar_datos()
{
    let num1 = parseInt(document.getElementById('numero1').value)
    let num2 = parseInt(document.getElementById('numero2').value)
    let suma = num1 + num2
    document.getElementById('txtnumero1').value = num1
    document.getElementById('txtnumero2').value = num2 
    document.getElementById('txtresultado').value = suma
}

function restar_datos()
{
    let num1 = parseInt(document.getElementById('numero1').value)
    let num2 = parseInt(document.getElementById('numero2').value)
    let resta = num1 - num2
    document.getElementById('txtnumero1').value = num1
    document.getElementById('txtnumero2').value = num2 
    document.getElementById('txtresultado').value = resta
}

function multiplicar_datos()
{
    let num1 = parseInt(document.getElementById('numero1').value)
    let num2 = parseInt(document.getElementById('numero2').value)
    let multiplicar = num1 * num2
    document.getElementById('txtnumero1').value = num1
    document.getElementById('txtnumero2').value = num2 
    document.getElementById('txtresultado').value = multiplicar
}

function dividir_datos()
{
    let num1 = parseInt(document.getElementById('numero1').value)
    let num2 = parseInt(document.getElementById('numero2').value)
    let dividir = num1 / num2
    document.getElementById('txtnumero1').value = num1
    document.getElementById('txtnumero2').value = num2 
    document.getElementById('txtresultado').value = dividir
}