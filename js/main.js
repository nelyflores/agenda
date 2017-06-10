
function cargarPagina(){
  $("#agregar").click(generar);
  $("#buscar").click(filtrarContacto)

};


function generar(){
  //obtenemos todos los valores
  var $total=$("#contactostotal");
  var $numerocontactos= $(".collection-item");
  var $nuevonombre=$("#nombre").val();
  var $nuevotelefono=$("#telefono").val();
  var $nuevomail=$("#email").val();
  var $lista=$("#listas");
  //creamos elementos
  var $elementolista=$("<li>",{'class':'collection-item avatar contact'});
  var $imagen=$("<img>",{"class":"circle"});
  var $titulo=$("<span>",{"class":"title"});
  var $nombre=document.createTextNode($nuevonombre);
  var $parrafoTelefono=$("<p>");
  var $iconotelefono=$("<i>",{"class":"tiny material-icons"});
  var $telefono=document.createTextNode($nuevotelefono);
  var $parrafomail=$("<p>");
  var $iconomail=$("<i>",{"class":"tiny, material-icons"});
  var $mail=document.createTextNode($nuevomail);
  var $estrella=$("<a>",{"class":"secondary-content"});
  var $iconoestrella=$("<i>",{"class":"material-icons"});
  //Agrgamos los nodos e imprimos en el HTML
  $lista.append($elementolista);
  $imagen.attr('src','img/persona.jpg');
  $elementolista.append($imagen);
  $elementolista.append($titulo);
  $titulo.append($nombre);
  $elementolista.append($parrafoTelefono);
  $iconotelefono.text="phone";
  $parrafoTelefono.append($iconotelefono);
  $parrafoTelefono.append($telefono);
  $elementolista.append($parrafomail);
  $iconomail.text="mail";
  $parrafomail.append($iconomail);
  $parrafomail.append($mail);
  $elementolista.append($estrella);
  $iconoestrella.text="grade";
  $estrella.append($iconoestrella);
  var $totalcontacto=$numerocontactos.length;
  console.log($totalcontacto);
  $total.text=$totalcontacto;

}
function filtrarContacto(e){
  e.preventDefault();
var filtro=$("#search").val();
var contactos=$(".contact");
console.log(contactos);


}
	$(document).ready(cargarPagina);
