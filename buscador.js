window.functionLoad = function() {}
$(window).load(function() {

    var vExploreAttributesBusq = new Array();

    var posicionInt = LideratisHelper.LocationIndexVTEX(dataLayer, 'InternalSiteSearch', 0);
    var posicionCat = LideratisHelper.LocationIndexVTEX(dataLayer, 'Category', 0);


    var vPageId = "";
    var vPrimaryCat = "";
    var vOnsiteSearchTerm = "";
    var vOnsiteSearchResults = -1;

    if (posicionInt != -1 && posicionCat == -1) {
        vOnsiteSearchResults = dataLayer[posicionInt].siteSearchResults;

        if (vOnsiteSearchResults > 0)
            vPageId = window.BUSCADORCRE;
        else
            vPageId = window.BUSCADORSRE;

        var verificaCat = typeof(dataLayer[posicionInt].siteSearchCategory);
        var cantSub = $("#mainCol .sub").length - 1;
        //comentar sobre los supuestos por que se coloca el primer div
        var cbOrdenar = (($("#mainCol .sub:eq(" + cantSub + ") select#O option:selected").html() == 'Seleccione') ? '' : $("#mainCol .sub:eq(" + cantSub + ") select#O option:selected").html());

        vPrimaryCategory = ((verificaCat === 'undefined') ? 'Busqueda' : dataLayer[posicionInt].siteSearchCategory);
        vOnsiteSearchTerm = dataLayer[posicionInt].siteSearchTerm;

        if (cbOrdenar != '')
            vExploreAttributesBusq[1] = cbOrdenar;

    } else if (posicionInt == -1 && posicionCat != -1) {
        vOnsiteSearchResults = $('.wrapper').length;
        vOnsiteSearchTerm = $('.bread-crumb ul').children('.last').find('a:eq(0)').html();

        if (vOnsiteSearchResults > 0)
            vPageId = window.BUSCADORCRE;
        else
            vPageId = window.BUSCADORSRE;

        vPrimaryCategory = "Busqueda";

        var cantSub = $("#mainCol .sub").length - 1;
        var cbOrdenar = (($("#mainCol .sub:eq(" + cantSub + ") select#O option:selected").html() == 'Seleccione') ? '' : $("#mainCol .sub:eq(" + cantSub + ") select#O option:selected").html());

        if (cbOrdenar != '')
            //verificar este atributo
            vExploreAttributesBusq[1] = cbOrdenar;

    }

    var dataPageView = new Array();
    vPageId += vPageId + window.SEPARADOR + window.SUFIJO

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






//el dni o email puede ser la llave.
//para la mayoria de retail el login debe de ser el email



/* Url donde se encuentran la cantidad larga de productos para realizar pruebas
http://tienda.wong.com.pe/electro/pequenos-electrodomesticos
*/
