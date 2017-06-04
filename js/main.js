
var btnagregar=document.getElementById('agregar');
btnagregar.addEventListener("click",generar);

function generar(){
  var total=document.getElementById("contactostotal");
  var numerocontactos=document.getElementsByClassName('collection-item');
  console.log(numerocontactos);
  var totalcontacto=numerocontactos.length;
  var nuevonombre=document.getElementById('nombre').value;
  var nuevotelefono=document.getElementById("telefono").value;
  var nuevomail=document.getElementById("email").value;
  var lista= document.getElementById('listas');
  var elementolista= document.createElement("li");
  elementolista.classList.add("collection-item","avatar");
  lista.appendChild(elementolista);

  var imagen= document.createElement("img");
  imagen.classList.add("circle");
  imagen.setAttribute('src','img/persona.jpg');
  elementolista.appendChild(imagen);

  var titulo=document.createElement("span");
  titulo.classList.add("title");
  elementolista.appendChild(titulo);
  titulo.innerHTML=nuevonombre;

  var parrafoTelefono=document.createElement("p");
  elementolista.appendChild(parrafoTelefono);


  var iconotelefono=document.createElement("i");
  iconotelefono.classList.add("tiny", "material-icons");
  iconotelefono.innerHTML="phone";
  parrafoTelefono.appendChild(iconotelefono);
  var telefono=document.createTextNode(nuevotelefono);
  parrafoTelefono.appendChild(telefono);

  var parrafomail=document.createElement("p");
  elementolista.appendChild(parrafomail);

  var iconomail=document.createElement("i");
  iconomail.classList.add("tiny", "material-icons");
  iconomail.innerHTML="mail";
  parrafomail.appendChild(iconomail);
  var mail=document.createTextNode(nuevomail);
  parrafomail.appendChild(mail);


  var estrella=document.createElement("a");
  estrella.classList.add("secondary-content");
  elementolista.appendChild(estrella);

  var iconoestrella=document.createElement("i");
  iconoestrella.classList.add( "material-icons");
  iconoestrella.innerHTML="grade";
  estrella.appendChild(iconoestrella);
  total.innerHTML=totalcontacto;

}
