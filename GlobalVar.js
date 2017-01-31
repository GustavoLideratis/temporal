/******************************************************************************************************************/
// Variables Globales
/******************************************************************************************************************/
window.clientID = window.cm_ClientID.split("|")[1];
window.GLCAT = "CAT: ";
window.GLPROD = "PROD: ";
window.GLART = "ART: ";
window.GLSEPARADOR = " | ";
window.BUSCADORCRE = "Búsqueda con Resultados";
window.BUSCADORSRE = "Búsqueda sin Resultados";
window.TITLE = document.title.trim();
window.INICIO = "Portada";
window.IDENTIFIER = document.getElementById('identifier').getAttribute('content');
/******************************************************************************************************************/
// Validacin por SiteID
/******************************************************************************************************************/
if (window.clientID == "WNF") {
    window.SUFIJO = "WONG";
} else if (window.clientID == "JMB") {
    window.SUFIJO = "JUMBO";
}
