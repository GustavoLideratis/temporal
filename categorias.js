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
    console.log('vPrimaryCategory01' + vPrimaryCategory);

    if (posicionCAT != -1) {

        vPrimaryCategory = dataLayer[posicionCAT].categoryId;
        console.log('vPrimaryCategory Cat' + vPrimaryCategory);
    } else if (posicionDEP != -1) {
        vPrimaryCategory = dataLayer[posicionDEP].departmentId;
        console.log('vPrimaryCategory Dep' + vPrimaryCategory);
    }

    // Obtenemos el número de combo box, en la página y obtenemos el último, ya que en la página solo se visualiza el último.
    var cantCbo = $("#mainCol .sub").length - 1;
    // Declaramos la variable cbOrdenar, que se encarga de obtener el el valor seleccionado en el combo de Ordenamiento
    var cbOrdenar = (($("#mainCol .sub:eq(" + cantCbo + ") select#O option:selected").html() == 'Seleccione') ? '' : $("#mainCol .sub:eq(" + cantCbo + ") select#O option:selected").html());
    //verificar--->
    if (cbOrdenar != '')
        vExploreAttributesCatDep[1] = cbOrdenar;

    /*
        // declaramos una variable  que almacenara los tipos de Filtros.
        var listaFiltro = new Array();
        // realizamos un recorrido de todos los filtros en el html.
        $(".navigation-tabs .sr_selected").each(function() {
            // declaramos una variable donde almacera el tipo de filtro.
            var tipoFitro = $(this).parent("div").parent("fieldset").find("h5").html();
            listaFiltro.push(tipoFitro + "_" + $(this).text());
        });
        // en esta variable, separaremos la matriz mediante una coma ','
        var filtros = listaFiltro.join(',');
        // realzamos una validacion si la variable "filtros", se agregara el atributo
        if (filtros != "") {
            vExploreAttributesCatDep[2] = filtros;
        }
    */
    console.log('vPrimaryCategory data' + vPrimaryCategory);

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


});
