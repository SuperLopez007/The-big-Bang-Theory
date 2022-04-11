


var enviar = document.querySelector(".botonEnvio");
enviar.addEventListener("click", function() {

  //cogo el nombre y apellidos que no estén vacios//

  var nombre = formulario.nombre.value;
  var apellidos = formulario.apellidos.value;

  if ((nombre == "") || (apellidos == "")) {
    alert("Tienes que tener un Nombre y Apellidos");
    return false;
  }
  //valido el dni, poniendo como condición que tenga entre 9 y 10 caracteres//
  var dni = formulario.dni.value;
  var longitudDni = dni.length;
  if (longitudDni < 9) {
    alert("DNI incorrecto.");
    formulario.dni.focus();
    return false;
  }
  //valido la 1 pregunta//
  var respuesta1 = formulario.pregunta1.value;
  if (respuesta1 == "") {
    alert("Error, hay que contestar");
    formulario.pregunta1.focus();
    return false;
  }
  //valido la 2 pregunta//
  var profesionElegida = formulario.pregunta2.selectedIndex;
  var profesion = formulario.pregunta2.options[profesionElegida].value;
  if (profesion == "0") {
    alert("escoge algo");
    formulario.pregunta2.focus();
    return false;
  }
  //validamos la 3 pregunta//

  var aficcion = formulario.pregunta3.selectedIndex;
  var aficcionElegida = formulario.pregunta3.options[aficcion].value;
  if (aficcionElegida == "ejemplo") {
    alert(" Debes completar el campo");
    formulario.pregunta3.focus();
    return false;
  }
  //validamos la 4 pregunta//
  var novio = formulario.amor.value;
  if (novio == "") {
    alert("Escoje una opción");
    return false;
  }
  //validadmos la 5 pregunta//
  var serie = formulario.serie.value;
  if (serie == "") {
    alert("Marca una Serie");
    return false;
  }
  //validamos la 6 pregunta//
  var trabajo = formulario.trabajo.value;
  if (trabajo == "") {
    alert("Marca una trabajo");
    return false;
  }
  // validamos la 7 pregunta//
  var odioso = formulario.odioso.value;
  if (odioso == "") {
    alert("Marca una opción");
    return false;
  }
  //valido la pregunta 8,9 y 10//
  var nacionalidad = formulario.nacionalidad.value;
  var premio = formulario.premio.value;
  var comentario = formulario.comentario.value;

  if ((nacionalidad == "") || (premio == "") || (comentario == "")) {
    alert("No puedes dejar el campo vacio");
    return false;
  }

  // sacar las respuestas correctas// pregunta1
  var nota = 0;
  var penny = formulario.pregunta1.value;
  penny = penny.toLowerCase();
  if (penny == "camarera") {
    nota++;
  }
  //pregunta 2//

  var numTrabajoSheldon = formulario.pregunta2.selectedIndex;
  var trabajoSheldon = formulario.pregunta2.options[numTrabajoSheldon].value;
  if (trabajoSheldon == "fisicoTeorico") {
    nota++;
  }
  // pregunta 3 //
  var numAficion = formulario.pregunta3.selectedIndex;
  var aficion = formulario.pregunta3.options[numAficion].value;
  if (aficion == "comics") {
    nota++;
  }
  //pregunta 4 //
  var marido;
  var pareja = false;
  var arrayPosiblePareja = formulario.amor;
  var longitudArrayPosiblePareja = arrayPosiblePareja.length;
  var i = 0;

  while ((pareja == false) && (i < longitudArrayPosiblePareja)) {
    if (arrayPosiblePareja[i].checked) {
      pareja = true;
      marido = arrayPosiblePareja[i].value;
    }
    i++;
  } //fin del while/7
  if (marido == "Leonard") {
    nota++;
  }
  //pregunta 5 //
  var serieInfancia;
  var movie = false;
  var arraySeries = formulario.serie;
  var longitudArraySeries = arraySeries.length;
  var e = 0;

  while ((movie == false) && (e < longitudArraySeries)) {
    if (arraySeries[e].checked) {
      movie = true;
      serieInfancia = arraySeries[e].value;
    }
    e++;
  } //fin del while//
  if (serieInfancia == "El profesor Protón") {
    nota++;
  }
  //pregunta 6//
  var trabajoPenny;
  var curro = false;
  var arrayCurro = formulario.trabajo;
  var longitudArrayCurro = arrayCurro.length;
  var d = 0;

  while ((curro == false) && (d < longitudArrayCurro)) {
    if (arrayCurro[d].checked) {
      curro = true;
      trabajoPenny = arrayCurro[d].value;
    }
    d++;
  } //fin del while//
  if (trabajoPenny == "Visitadora Farmaceútica") {
    nota++;
  }
  //jpregunta 7//
  var pega;
  var estado = false;
  var arrayEstado = formulario.odioso;
  var longitudArrayEstado = arrayEstado.length;
  var f = 0;

  while ((estado == false) && (f < longitudArrayEstado)) {
    if (arrayEstado[f].checked) {
      estado = true;
      pega = arrayEstado[f].value;
    }
    f++;
  } //fin del while//
  if (pega == "Intolerancia a la lactosa") {
    nota++;
  }
  // pregunta 8 //
  var origen;
  var pais = false;
  var arrayNacion = formulario.nacionalidad;
  var longitudArrayNacion = arrayNacion.length;
  var g = 0;

  while ((pais == false) && (g < longitudArrayNacion)) {
    if (arrayNacion[g].checked) {
      pais = true;
      origen = arrayNacion[g].value;
    }
    g++;
  } //fin del while
  if (origen == "Indio") {
    nota++;
  }
  //pregunta 9//
  var logro;
  var premioLogrado = false;
  var arrayPremio = formulario.premio;
  var longitudArrayPremio = arrayPremio.length;
  var h = 0;

  while ((premioLogrado == false) && (h < longitudArrayPremio)) {
    if (arrayPremio[h].checked) {
      premioLogrado = true;
      logro = arrayPremio[h].value;
    }
    h++;
  } //fin del while

  if (logro == "Premio Nobel de Fisica") {
    nota++;
  }

  // pregunta 10//

  var resumen = formulario.comentario.value;
  if (resumen !== "") {
    nota++;
  }

  // comunico al personal la nota que saco //
  if (nota < 5) {
    var fraseSuspenso = document.createElement("h2");
    fraseSuspenso.textContent = ("Has suspendido, tu nota fue " + nota);
    var padre = document.querySelector(".papi");
    var imagenSuspenso = document.createElement("img");
    imagenSuspenso.src = "Imagenes/noHasAprobado.jpg";
    imagenSuspenso.classList.add("noHasAprobado");
    padre.appendChild(imagenSuspenso);
    padre.appendChild(fraseSuspenso);
    fraseSuspenso.classList.add("suspenso");
var musica=new Audio("Sonidos/star wars.mp3");
musica.play();

    return false;

  } else if (nota >= 5) {
    var fraseAprobado = document.createElement("h2");
    fraseAprobado.textContent = ("Has aprobado, tu nota fue " + nota);
    var hijo = document.querySelector(".papi");
    var imagenAprobado = document.createElement("img");
    imagenAprobado.src = "Imagenes/verticalbbg.jpg";
    hijo.appendChild(imagenAprobado);
    hijo.appendChild(fraseAprobado);
fraseAprobado.classList.add("aprobado");
var musica2=new Audio("Sonidos/trek.mp3");
musica2.play();
  }
//busco la variable del boton//
enviar.disabled=true;

});


var limpiar = document.querySelector(".botonLimpiar");
limpiar.addEventListener("click", function() {
  formulario.reset();

var reintentar=document.querySelector(".botonReintentar");
reintentar.addEventListener("click",function(){
  location.reload();
});




});
