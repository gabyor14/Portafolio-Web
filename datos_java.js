function leer(){
    //Referencia por Pseudoclase
    var nombre = document.forms["formulario"].elements[0].value;
    //document.getElementById("datos").innerHTML = nombre;

    //Referencia por ID
    var clave = document.getElementById("pass").value;
    //document.getElementById("datos").innerHTML = "\<br>Nombre: " + nombre + "\<br>Password: " + clave;

    //Referencia por TagName
    var car = document.getElementsByTagName("select")[0].value
    //document.getElementById("datos").innerHTML = "\<br>Nombre: " + nombre + "\<br>Password: " + clave + "\n<br>Carrera: " + car;

    //Referencia por Name
    var gen = document.getElementsByName("genero");
    var i, g;
    for(i=0; i<gen.length; i++){
        if(gen[i].checked){  //Checked es el valor de seleccionado
            g = gen[i].value;
        }
    }
    
    //Referencia por ID
    var p = document.getElementById("privacidad").checked;
    document.getElementById("datos").innerHTML = "\<br>Nombre: " + nombre + "\<br>Password: " + clave + "\n<br>Carrera: " + car + "\n<br>Género: " + g + "\n<br>Aceptó el acuerdo: " + p;
}