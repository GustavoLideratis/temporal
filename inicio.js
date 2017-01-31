window.functionLoad = function() {}
$(window).load(function() {
    var vPageId = "";
    var vPrimaryCategory = "informativo";
    var vOnsiteSearchTerm = null;
    var vOnsiteSearchResults = null;
    var vExploreAttributes = null;
    vPageId = window.INICIO + window.GLSEPARADOR + window.SUFIJO;
    dataPageView = new Array();
    dataPageView['pageId'] = vPageId;
    dataPageView['primaryCategory'] = vPrimaryCategory;
    dataPageView['onsiteSearchTerm'] = vOnsiteSearchTerm;
    dataPageView['onsiteSearchResults'] = vOnsiteSearchResults;
    dataPageView['exploreAttributes'] = vExploreAttributes;
    var tagPageView = new LideratisLibrary.PageView(dataPageView);
    digitalData.page = tagPageView.page;
    window.functionLoad();
});
