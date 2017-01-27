window.functionLoad = function() {}
$(window).load(function() {

    var vExploreAttributesBusq = new Array();

    var posicionInt           = LideratisHelper.LocationIndexVTEX(dataLayer, 'InternalSiteSearch', 0);
    var posicionCat           = LideratisHelper.LocationIndexVTEX(dataLayer, 'Category', 0);


    var vPageId               = "";
    var vPrimaryCat           = "";
    var vOnsiteSearchTerm     = "";
    var vOnsiteSearchResults  = -1;

    if(posicionInt != -1 && posicionCat == -1){
      vOnsiteSearchResults = dataLayer[posicionInt].siteSearchResults;

      if (vOnsiteSearchResults > 0)
          vPageId = window.BUSCADORCRE;
      else
          vPageId = window.BUSCADORSRE;

      var verificaCat   = typeof(dataLayer[posicionInt].siteSearchCategory);
      var cantSub       = $("#mainCol .sub").length - 1;
      var cbOrdenar     = (($("#mainCol .sub:eq(" + cantSub + ") select#O option:selected").html() == 'Seleccione') ? '' : $("#mainCol .sub:eq(" + cantSub + ") select#O option:selected").html());

      vPrimaryCategory  = ((verificaCat === 'undefined') ? 'Busqueda' : dataLayer[posicionInt].siteSearchCategory);
      vOnsiteSearchTerm = dataLayer[posicionInt].siteSearchTerm;

      if (cbOrdenar != '')
          vExploreAttributesBusq[1] = cbOrdenar;

    }else if(posicionInt == -1 && posicionCat != -1){
      vOnsiteSearchResults = $('.wrapper').length;
      vOnsiteSearchTerm    = $('.bread-crumb ul').children('.last').find('a:eq(0)').html();

      if (vOnsiteSearchResults > 0)
          vPageId = window.BUSCADORCRE;
      else
          vPageId = window.BUSCADORSRE;

      vPrimaryCategory = "Busqueda";

      var cantSub = $("#mainCol .sub").length - 1;
      var cbOrdenar = (($("#mainCol .sub:eq(" + cantSub + ") select#O option:selected").html() == 'Seleccione') ? '' : $("#mainCol .sub:eq(" + cantSub + ") select#O option:selected").html());

      if (cbOrdenar != '')
          vExploreAttributesBusq[1] = cbOrdenar;

    }

    var dataPageView = new Array();
    vPageId += vPageId+window.SEPARADOR+window.SUFIJO

    dataPageView['pageId']              = vPageId;
    dataPageView['primaryCategory']     = vPrimaryCategory;
    dataPageView['onsiteSearchTerm']    = vOnsiteSearchTerm;
    dataPageView['onsiteSearchResults'] = vOnsiteSearchResults;
    dataPageView['exploreAttributes']   = LideratisHelper.GetArrayAttributes(vExploreAttributesBusq);

    window.digitalData = new LideratisLibrary.PageView(dataPageView);
    window.functionLoad();

});
