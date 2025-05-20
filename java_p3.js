function leer() {
    var tiempo = document.getElementById("horas").value;
    var tipoAuto = document.getElementById("auto").value;

    const tarifas = {
        ac: 20,
        cam: 30,
        camion: 40
    };

    if (tiempo === "" || tiempo <= 0 || isNaN(tiempo)) {
        document.getElementById("total").innerHTML = "<br>Por favor, ingresa una cantidad válida de horas.";
        return;
    }

    var tarifa = tarifas[tipoAuto];
    var total = parseInt(tiempo) * tarifa;

    document.getElementById("total").innerHTML = `<br>Total a pagar: $${total.toFixed(2)}`;
}
