console.log("codesnippet - Busqueda 2");
window.functionLoad = function() {}
$(window).load(function() {
    var vExploreAttributesBusq = new Array();
    var vPageId = "";
    var vPrimaryCategory = "Busqueda";
    var vOnsiteSearchTerm = "";
    var vOnsiteSearchResults = 0;

    var vEventName = "";
    var vEventAction = "";
    var vEventPrimaryCategory = "";
    var vEventExploreAttributes = new Array();

    var posicionInt = LideratisHelper.LocationIndexVTEX(dataLayer, 'InternalSiteSearch', 0);

    var posicionCat = LideratisHelper.LocationIndexVTEX(dataLayer, 'Category', 0);

    var cantCbo = $("#mainCol .sub").length - 1;
    var cbOrdenar = (($("#mainCol .sub:eq(" + cantCbo + ") select#O option:selected").html() == 'Seleccione') ? '' : $("#mainCol .sub:eq(" + cantCbo + ") select#O option:selected").html());
    var cbId = $("#mainCol .sub:eq(" + cantCbo + ") select#O").val();

    if (cbId == "OrderByPriceASC" || cbId == "OrderByReviewRateDESC") {
        var listaConvert = new Array();

        // NOMBRE DE COMBO
        vEventName = "Selección de combo" + window.SEPARADOR + window.SUFIJO;
        vEventAction = "2";
        vEventPrimaryCategory = vPrimaryCategory;

        listaConvert['eventName'] = 'Formulario Adquirir - Conversion';
        listaConvert['eventAction'] = '2';
        listaConvert['primaryCategory'] = vEventPrimaryCategory;

        // TEMPORAL El ID DE SELECCION
        vEventExploreAttributes[1] = cbId;
        listaConvert['exploreAttributes'] = vEventExploreAttributes;

        window.digitalData = new LideratisLibrary.ConversionTag(listaConvert);
    }

    if (posicionInt != -1 && posicionCat == -1) {
        var verificaSSCat = typeof(dataLayer[posicionInt].siteSearchCategory);
        var sufBuscador = "";

        if (verificaSSCat !== 'undefined')
            vExploreAttributesBusq[32] = dataLayer[posicionInt].siteSearchForm;

        if (cbOrdenar == '') {
            vOnsiteSearchResults = dataLayer[posicionInt].siteSearchResults;
            vOnsiteSearchTerm = dataLayer[posicionInt].siteSearchTerm;
        } else if (typeof(cbOrdenar) != 'undefined' && cbOrdenar != '') {
            vOnsiteSearchResults = null;
            vOnsiteSearchTerm = null;
            vExploreAttributesBusq[30] = dataLayer[posicionInt].siteSearchResults;
            vExploreAttributesBusq[31] = dataLayer[posicionInt].siteSearchTerm;
            vExploreAttributesBusq[33] = cbOrdenar;
            sufBuscador = " - Filtro Aplicado";
        }


        if (dataLayer[posicionInt].siteSearchResults > 0) {
            vPageId = window.BUSCADORCRE + sufBuscador;
        } else {
            vPageId = window.BUSCADORSRE;
        }
        console.log("searchCategory voageid: " + vPageId);

    } else if (posicionInt == -1 && posicionCat != -1) {

        var verificaSSCat = typeof(dataLayer[posicionCat].siteSearchCategory);
        var vSearchResults = $('.wrapper').length;

        if (verificaSSCat !== 'undefined')
            vExploreAttributesBusq[32] = dataLayer[posicionCat].siteSearchForm;

        if (cbOrdenar == '') {
            vOnsiteSearchResults = $('.wrapper').length;
            vOnsiteSearchTerm = $('.bread-crumb ul').children('.last').find('a:eq(0)').html();
        } else {
            vOnsiteSearchResults = null;
            vOnsiteSearchTerm = null;
            vExploreAttributesBusq[30] = $('.wrapper').length;
            vExploreAttributesBusq[31] = $('.bread-crumb ul').children('.last').find('a:eq(0)').html();
            vExploreAttributesBusq[33] = cbOrdenar;
        }

        //if (vSearchResults > 0) {
        if (cbOrdenar != '') {
            vPageId = window.BUSCADORCRE + " - Ordenamiento Aplicado";
        } else if (cbOrdenar == '' && vSearchResults > 0) {
            vPageId = window.BUSCADORCRE;
        } else {
            vPageId = window.BUSCADORSRE;
        }
        console.log("Categoria voageid: " + vPageId);
    }

    var dataPageView = new Array();
    vPageId = vPageId + window.GLSEPARADOR + window.SUFIJO

    dataPageView['pageId'] = vPageId;
    dataPageView['primaryCategory'] = vPrimaryCategory;
    dataPageView['onsiteSearchTerm'] = vOnsiteSearchTerm;
    dataPageView['onsiteSearchResults'] = vOnsiteSearchResults;
    dataPageView['exploreAttributes'] = LideratisHelper.GetArrayAttributes(vExploreAttributesBusq);

    window.digitalData = new LideratisLibrary.PageView(dataPageView);
    window.functionLoad();
});
