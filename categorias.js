window.functionLoad = function() {}
$(window).load(function() {
    // Esta funcion recorrera el objeto dataLayer, buscando el dataLayer.pageCategory:  "Category".
    var posicionCAT = LideratisHelper.LocationIndexVTEX(dataLayer, 'Category', 0);
    var posicionDEP = LideratisHelper.LocationIndexVTEX(dataLayer, 'Department', 0);
    // Si cumple con la condicion, exite el dataLayer.pageCategory: "Category", accedera al contenido que se encuentra dentro de la condicion.

    var vPageId = LideratisHelper.ClearBlankSpaces(LideratisHelper.GetCutValue(window.TITLE, '|', 0));
    var vPrimaryCategory = '';
    var vOnsiteSearchTerm = null;
    var vOnsiteSearchResults = null;
    var vExploreAttributesCatDep = new Array();
    // adicionamos a la variable vPageId el prefijo y sufijo que son variables globales.
    vPageId = window.GLCAT + vPageId + window.GLSEPARADOR + window.SUFIJO

    if (posicionCAT != -1) {

        vPrimaryCategory = dataLayer[posicionCAT].categoryId;
    } else if (posicionDEP != -1) {
        vPrimaryCategory = dataLayer[posicionDEP].departmentId;
    }

    // Obtenemos el número de combo box, en la página y obtenemos el último, ya que en la página solo se visualiza el último.
    var cantCbo = $("#mainCol .sub").length - 1;
    // Declaramos la variable cbOrdenar, que se encarga de obtener el el valor seleccionado en el combo de Ordenamiento
    var cbOrdenar = (($("#mainCol .sub:eq(" + cantCbo + ") select#O option:selected").html() == 'Seleccione') ? '' : $("#mainCol .sub:eq(" + cantCbo + ") select#O option:selected").html());
    var cbId = $("#mainCol .sub:eq(" + cantCbo + ") select#O").val();


    if (cbOrdenar != '') {
        vExploreAttributesCatDep[33] = cbId;
    }

    var dataPageView = new Array();
    // Datos del Tag PageView.
    dataPageView['pageId'] = vPageId;
    dataPageView['primaryCategory'] = vPrimaryCategory;
    dataPageView['onsiteSearchTerm'] = vOnsiteSearchTerm;
    dataPageView['onsiteSearchResults'] = vOnsiteSearchResults;
    dataPageView['exploreAttributes'] = LideratisHelper.GetArrayAttributes(vExploreAttributesCatDep);

    var tagPageView = new LideratisLibrary.PageView(dataPageView);
    // Almacenamos los datos de la variable tagPageView objeto digitalData.page
    digitalData.page = tagPageView.page; // objecto
    window.functionLoad();

    /*Cheked*/

});
