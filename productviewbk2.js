// Este evento se produce despues de que el HTML se ha cargado. - document.ready
$(document).ready(function() {

    // Esta funcion recorrera el objeto dataLayer, buscando el dataLayer.pageCategory:  "Product".
    var posicion = LideratisHelper.LocationIndexVTEX(dataLayer, 'Product', 0);
    // Cumple con la condicion, exite el dataLayer.pageCategory: "Product".
    if (posicion > -1) {
        var prefijo = 'PROD: ';
        var title = '';
        var sufijo = '| WONG';
        var primaryCategory = '';
        /* Declaracion de variables para almacenar datos de producto - PageView*/
        var pageID = prefijo + title + sufijo;
        var searchTerm = null;
        var searchResults = null;
        var atributosPageView = new Array();
        // Posicion de Atributos
        // atributosPageView[1] = 'Ejemplo01';
        // atributosPageView[10] = 'Ejemplo02';
        var dataPageView = new Array;

        /* Declaracion de variables para almacenar datos de producto - ProductView*/
        var productID = '';
        var productName = '';
        var atributosProductView = new Array();
        // Posicion de Atributos
        // atributosProductView[1] = 'Ejemplo01';
        // atributosProductView[5] = 'Ejemplo02';
        var dataProductView = new Array();

        // Datos del Tag PageView.
        dataPageView['pageId'] = pageID;
        dataPageView['primaryCategory'] = primaryCategory;
        dataPageView['onsiteSearchTerm'] = searchTerm;
        dataPageView['onsiteSearchResults'] = searchResults;
        dataPageView['exploreAttributes'] = LideratisHelper.GetArrayAttributes(atributosPageView);
        var tagPageView = new LideratisLibrary.PageView(dataPageView);

        // Datos del Tag Productview.
        dataProductView['productID'] = productID;
        dataProductView['productName'] = productName;
        dataProductView['primaryCategory'] = primaryCategory;
        dataProductView['exploreAttributes'] = LideratisHelper.GetArrayAttributes(atributosProductView);
        var tagProductView = new LideratisLibrary.ProductView(dataProductView);

        // Declaramos la variable digitalData cmo objeto
        window.digitalData = new Object();
        // Almacenamos un objecto
        digitalData.page = tagPageView.page;
        // Almacenamos un array
        digitalData.product = [tagProductView.product[0]];

    }


})
