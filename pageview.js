window.functionLoad = function() {}
$(window).load(function() {
    // Esta funcion recorrera el objeto dataLayer, buscando el dataLayer.pageCategory:  "Product".
    var posicion = LideratisHelper.LocationIndexVTEX(dataLayer, 'Product', 0);
    // Si cumple con la condicion, exite el dataLayer.pageCategory: "Product", accedera al contenido que se encuentra dentro de la condicion.
    if (posicion != -1) {
        //Variable de atributos de un producto.
        var vPageId = LideratisHelper.ClearBlankSpaces(LideratisHelper.GetCutValue($('title').html(), '|', 0));
        var vPrimaryCategory = dataLayer[posicion].productCategoryId;
        var vOnsiteSearchTerm = null;
        var vOnsiteSearchResults = null;
        var vExploreAttributesPVPRO = new Array();
        // adicionamos a la variable vPageId el prefijo y sufijo que son variables globales.
        vPageId = window.GLPROD + vPageId + window.GLSEPARADOR + window.SUFIJO

        var dataPageView = new Array();
        // Datos del Tag PageView.
        dataPageView['pageId'] = vPageId;
        dataPageView['primaryCategory'] = vPrimaryCategory;
        dataPageView['onsiteSearchTerm'] = vOnsiteSearchTerm;
        dataPageView['onsiteSearchResults'] = vOnsiteSearchResults;
        dataPageView['exploreAttributes'] = LideratisHelper.GetArrayAttributes(vExploreAttributesPVPRO);
        var tagPageView = new LideratisLibrary.PageView(dataPageView);
        // Almacenamos los datos de la variable tagPageView objeto digitalData.page
        digitalData.page = tagPageView.page; // objecto
        window.functionLoad();
    }


});
