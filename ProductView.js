window.tagProductView = function() {}
window.agregarCarrito = function() {}
// Este evento se produce despues de que el DOM se ha cargado. - document.ready
$(window).load(function() {

    // Esta funcion recorrera el objeto dataLayer, buscando el dataLayer.pageCategory:  "Product".
    var posicion = LideratisHelper.LocationIndexVTEX(dataLayer, 'Product', 0);
    // Cumple con la condicion, exite el dataLayer.pageCategory: "Product".
    //if (posicion > -1) {

    var precioRegular = LideratisHelper.tempNumberOfDecimal(dataLayer[0].productListPriceTo, 2);
    var precioVenta = LideratisHelper.tempNumberOfDecimal(dataLayer[0].productPriceTo, 2);
    var porcentaje = $(".flags p:eq(0)").html();

    // Posicion de Atributos
    var vExploreAttributesPRO = new Array();

    vExploreAttributesPRO[1] = dataLayer[0].productBrandName;
    vExploreAttributesPRO[3] = precioRegular;
    vExploreAttributesPRO[4] = precioVenta;
    vExploreAttributesPRO[5] = porcentaje;

    var listaFlag = new Array();
    $(".flags p").each(function(e) {
        var flaArray = $(this).attr('class').split('flag ')[1] + "_" + $(this).html();
        listaFlag.push(flaArray);
    });
    //console.log("FLAG JOIN 1 " + listaFlag);
    var flagJoin = listaFlag.join('|');
    //console.log("FLAG JOIN 2 " + listaFlag);
    if (flagJoin != '') {
        vExploreAttributesPRO[6] = flagJoin;
    }
    //console.log("FLAG JOIN 3 " + listaFlag);

    /* Declaracion de variables para almacenar datos de producto - ProductView*/
    var vProductID = vtxctx.skus;
    var vProductName = dataLayer[0].productName;
    var vPrimaryCategory = dataLayer[0].productCategoryId;
    var vPrice = LideratisHelper.tempNumberOfDecimal(dataLayer[0].productPriceTo, 2);

    var dataProductView = new Array();
    // Datos del Tag Productview.
    dataProductView['productID'] = vProductID;
    dataProductView['productName'] = vProductName;
    dataProductView['primaryCategory'] = vPrimaryCategory;
    dataProductView['exploreAttributes'] = LideratisHelper.GetArrayAttributes(vExploreAttributesPRO);
    dataProductView['virtualCategory'] = null;
    var tagProductView = new LideratisLibrary.ProductView(dataProductView);
    // Almacenamos un array
    digitalData.product = [tagProductView.product[0]];
    window.tagProductView();
    //}

    /********************************************** Agregar Producto - Shopaction5 ***************************************************/

    // variable que almacena la ubicacion de la etiqueta del botón dentro del html.
    var vNomBtnAdd = '#BuyButton .buy-button';
    $(document).on("click", vNomBtnAdd, function() {

        var dataShopAction5 = new Array();
        dataShopAction5['productID'] = vProductID;
        dataShopAction5['productName'] = vProductName;
        dataShopAction5['quantity'] = '1';
        dataShopAction5['price'] = vPrice;
        dataShopAction5['primaryCategory'] = vPrimaryCategory;
        dataShopAction5['exploreAttributes'] = LideratisHelper.GetArrayAttributes(vExploreAttributesPRO);
        digitalData = new LideratisLibrary.ShopAction5_BtnClick(dataShopAction5);
        console.log(digitalData);
        agregarCarrito();
    });

});
