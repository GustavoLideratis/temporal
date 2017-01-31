console.log("Informativo v 2.0");
window.functionLoad = function() {}
$(window).load(function() {
    var vPageId = "";
    var vPrimaryCategory = "informativo";
    var vOnsiteSearchTerm = null;
    var vOnsiteSearchResults = null;
    var vExploreAttributes = null;
    var caracter = "- Wong";
    var title = LideratisHelper.GetCutValue(window.TITLE, caracter, 0);
    title = LideratisHelper.ClearBlankSpaces(title);
    vPageId = title + window.GLBSEPARADOR + window.SUFIJO;
    dataPageView = new Array();
    dataPageView['pageId'] = vPageId;
    dataPageView['primaryCategory'] = vPrimaryCategory;
    dataPageView['onsiteSearchTerm'] = vOnsiteSearchTerm;
    dataPageView['onsiteSearchResults'] = vOnsiteSearchResults;
    dataPageView['exploreAttributes'] = vExploreAttributes;
    var tagPageView = new LideratisLibrary.PageView(dataPageView);
    digitalData.page = tagPageView.page;
    console.log(digitalData);
    window.functionLoad();
});
