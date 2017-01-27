window.functionLoad = function() {}
$(window).load(function() {
    var posicion = LideratisHelper.LocationIndexVTEX(dataLayer, 'Product', 0);
    if (posicion != -1) {
        var vPageId = LideratisHelper.tempClearQuotationMarks($('title').html().split(' | ')[0]);
        var vPrimaryCategory = dataLayer[posicion].productCategoryId;
        var vOnsiteSearchTerm = null;
        var vOnsiteSearchResults = null;
        var vExploreAttributesPVPRO = new Array();

        vPageId = window.GLPROD + vPageId + window.GLSEPARADOR + window.SUFIJO

        var dataPageView = new Array();
        dataPageView['pageId'] = vPageId;
        dataPageView['primaryCategory'] = vPrimaryCategory;
        dataPageView['onsiteSearchTerm'] = vOnsiteSearchTerm;
        dataPageView['onsiteSearchResults'] = vOnsiteSearchResults;
        dataPageView['exploreAttributes'] = LideratisHelper.GetArrayAttributes(vExploreAttributesPVPRO);
        var tagPageView = new LideratisLibrary.PageView(dataPageView);
        digitalData.page = tagPageView.page; // objecto
        window.functionLoad();
    }


});
