window.functionLoad = function() {}
$(window).load(function() {

    // Declaramos una variable, donde se almacenara los atributos en una Matriz
    var vExploreAttributesBusq = new Array();

    // Esta funcion recorrera el objeto dataLayer, buscando el dataLayer.pageCategory:  "InternalSiteSearch".
    var posicionInt = LideratisHelper.LocationIndexVTEX(dataLayer, 'InternalSiteSearch', 0);
    // Esta funcion recorrera el objeto dataLayer, buscando el dataLayer.pageCategory:  "Category".
    var posicionCat = LideratisHelper.LocationIndexVTEX(dataLayer, 'Category', 0);

    /* Declaracion de variables con valores vacios, para luego reutilizarlos y almacenar datos de un pageView - Tag PageView*/
    var vPageId = "";
    var vPrimaryCategory = "";
    var vOnsiteSearchTerm = "";
    var vOnsiteSearchResults = -1;

    // Se realiza una validacion si el valor de la varibale "posicionInt", es diferente a "-1" y la variable "posicionCat" es igual a "-1"
    // quiere decir que estamos dentro del dataLayer.pageCategory: InternalSiteSearch
    if (posicionInt != -1 && posicionCat == -1) {
        // En esta variale se obtendra la cantidad de productos encontrados luego de realizar una busqueda.
        vOnsiteSearchResults = dataLayer[posicionInt].siteSearchResults;
        // Esta varible almacena el termino de busqueda.
        vOnsiteSearchTerm = dataLayer[posicionInt].siteSearchTerm;
        // Realizaremos una validacion con la cantidad de producto, si la cantidad de producto es mayor "0"
        // Agregaremos el vPageId = 'Busqueda con resultados' si no
        // vPageID = 'Busqueda sin Resultados'.
        if (vOnsiteSearchResults > 0)
            vPageId = window.BUSCADORCRE;
        else
            vPageId = window.BUSCADORSRE;
        // Declaramos una variable que se encarga de verificar la existencia del siteSearchCategory.
        var verificaCat = typeof(dataLayer[posicionInt].siteSearchCategory);
        // Esta variable, obtendra un el valor de la primaryCategory
        vPrimaryCategory = ((verificaCat === 'undefined') ? 'Busqueda' : dataLayer[posicionInt].siteSearchCategory);
        // Obtenemos el número de combo box, en la página y obtenemos el último, ya que en la página solo se visualiza el último.
        var cantCbo = $("#mainCol .sub").length - 1;
        // Declaramos la variable cbOrdenar, que se encarga de obtener el el valor seleccionado en el combo de Ordenamiento
        var cbOrdenar = (($("#mainCol .sub:eq(" + cantCbo + ") select#O option:selected").html() == 'Seleccione') ? '' : $("#mainCol .sub:eq(" + cantCbo + ") select#O option:selected").html());
        //verificar--->
        if (cbOrdenar != '')
            vExploreAttributesBusq[1] = cbOrdenar;

    } else if (posicionInt == -1 && posicionCat != -1) {
        // En esta variale se obtendra la cantidad de productos encontrados luego de realizar una busqueda.
        vOnsiteSearchResults = $('.wrapper').length;
        // Esta varible almacena el termino de busqueda.
        vOnsiteSearchTerm = $('.bread-crumb ul').children('.last').find('a:eq(0)').html();
        // Realizaremos una validacion con la cantidad de producto, si la cantidad de producto es mayor "0"
        // Agregaremos el vPageId = 'Busqueda con resultados' si no
        // vPageID = 'Busqueda sin Resultados'.
        if (vOnsiteSearchResults > 0)
            vPageId = window.BUSCADORCRE;
        else
            vPageId = window.BUSCADORSRE;
        // Esta variable, obtendra un el valor de la primaryCategory
        vPrimaryCategory = "Busqueda";

        var cantSub = $("#mainCol .sub").length - 1;
        // Declaramos la variable cbOrdenar, que se encarga de obtener el el valor seleccionado en el combo de Ordenamiento
        var cbOrdenar = (($("#mainCol .sub:eq(" + cantSub + ") select#O option:selected").html() == 'Seleccione') ? '' : $("#mainCol .sub:eq(" + cantSub + ") select#O option:selected").html());

        if (cbOrdenar != '')
            //verificar este atributo
            vExploreAttributesBusq[1] = cbOrdenar;

    }

    var dataPageView = new Array();
    // adicionamos a la variable vPageId Separador y el sufijo que son variables globales.
    vPageId += vPageId + window.SEPARADOR + window.SUFIJO
    // Datos del Tag PageView - Búsqueda.
    dataPageView['pageId'] = vPageId;
    dataPageView['primaryCategory'] = vPrimaryCategory;
    dataPageView['onsiteSearchTerm'] = vOnsiteSearchTerm;
    dataPageView['onsiteSearchResults'] = vOnsiteSearchResults;
    dataPageView['exploreAttributes'] = LideratisHelper.GetArrayAttributes(vExploreAttributesBusq);
    window.digitalData = new LideratisLibrary.PageView(dataPageView);
    window.functionLoad();

});

//Documentacion del todos los codigos


// 1.
// cuando seleccionamoos algun selector del combo - cuando se realiza una busqueda.
// PageId => Busqueda con resultados - Filtro aplicados
// Busqueda con resultados - Ordenamiento aplicado
// atrinbuto 30  - Termino de Busqueda
// atributo 31   - Cantidad de  resultados
// atributo 32   - Filtro aplicados
// atributo 33   - Selector del Combo  "Orden Seleccionado"

// 2 Cuando realizamos un click en los enlaces de la izquierda, despues de realizar una busqueda.
// PageID => Busqueda con resultados - Filtro aplicados
// filtros facetados
// se debe de realizar los mismos pasos anteriores, desglozando los atributos del 30 al 33
// atrinbuto 30  - Termino de Busqueda
// atributo 31   - Cantidad de  resultados
// atributo 32   - Filtro aplicados
// atributo 33   - Selector del Combo  "Orden Seleccionado".

// verificar si se puede realizar un conversion event al seleccionar un valor del select menor precio, mejor evaluado.






//el dni o email puede ser la llave al momento de ralizar un registration.
//para la mayoria de retail el login debe de ser el email



/* Url donde se encuentran la cantidad larga de productos para realizar pruebas
http://tienda.wong.com.pe/electro/pequenos-electrodomesticos
*/
