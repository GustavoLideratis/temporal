window.tagProductView = function() {}
window.agregarCarrito = function() {}
// Este evento se produce despues de que el DOM se ha cargado. - document.ready
$(window).load(function() {

    // Esta funcion recorrera el objeto dataLayer, buscando el dataLayer.pageCategory:  "Product".
    var posicion = LideratisHelper.LocationIndexVTEX(dataLayer, 'Product', 0);
    // Si cumple con la condicion, exite el dataLayer.pageCategory: "Product".
    if (posicion > -1) {
        //Variable de atributos de un producto.
        var precioRegular = LideratisHelper.NumberOfDecimal(dataLayer[posicion].productListPriceTo, 2);
        var precioVenta = LideratisHelper.NumberOfDecimal(dataLayer[posicion].productPriceTo, 2);
        var porcentaje = $(".flags p:eq(0)").html();

        // Variable que almacena la Matriz de Atributos
        var vExploreAttributesPRO = new Array();
        /* Atributos
        Attr1 : Marca de Productos
        Attr3 : Precio Regular
        Attr4 : Precio de Venta
        Attr5 : Poncentaje de Descuento
        Attr6 : Flag de Atiquetas de la vista de un Producto
        */
        vExploreAttributesPRO[1] = dataLayer[posicion].productBrandName;
        vExploreAttributesPRO[3] = precioRegular;
        vExploreAttributesPRO[4] = precioVenta;
        vExploreAttributesPRO[5] = porcentaje;

        var listaFlag = new Array();
        $(".flags p").each(function(e) {
            var flaArray = $(this).attr('class').split('flag ')[1] + "_" + $(this).html();
            listaFlag.push(flaArray);
        });
        var flagJoin = listaFlag.join('|');
        if (flagJoin != '') {
            vExploreAttributesPRO[6] = flagJoin; // Attr6 : Flag de Atiquetas de la vista de un Producto
        }

        /* Declaracion de variables para almacenar datos de producto - Tag ProductView*/
        var vProductID = vtxctx.skus;
        var vProductName = dataLayer[posicion].productName;
        var vPrimaryCategory = dataLayer[posicion].productCategoryId;
        var vPrice = LideratisHelper.NumberOfDecimal(dataLayer[posicion].productPriceTo, 2);

        var dataProductView = new Array();
        // Datos del Tag Productview.
        dataProductView['productID'] = vProductID;
        dataProductView['productName'] = vProductName;
        dataProductView['primaryCategory'] = vPrimaryCategory;
        dataProductView['exploreAttributes'] = LideratisHelper.GetArrayAttributes(vExploreAttributesPRO);
        dataProductView['virtualCategory'] = null;
        var tagProductView = new LideratisLibrary.ProductView(dataProductView);
        // Almacenamos un array en el objeto digitalData.product
        digitalData.product = [tagProductView.product[0]];
        //Llamamos a la funcion del Tag del Producto  - window.tagProductView()
        window.tagProductView();

        /********************************************** Agregar Producto - Shopaction5 ***************************************************/

        // variable que almacena la ubicacion de la etiqueta del botón dentro del html.
        var vNomBtnAdd = '#BuyButton .buy-button';
        $(document).on("click", vNomBtnAdd, function() {

            var dataShopAction5 = new Array();
            //Datos del Tag Shopaction5.
            dataShopAction5['productID'] = vProductID;
            dataShopAction5['productName'] = vProductName;
            dataShopAction5['quantity'] = '1';
            dataShopAction5['price'] = vPrice;
            dataShopAction5['primaryCategory'] = vPrimaryCategory;
            dataShopAction5['exploreAttributes'] = LideratisHelper.GetArrayAttributes(vExploreAttributesPRO);
            digitalData = new LideratisLibrary.ShopAction5_BtnClick(dataShopAction5);
            console.log(digitalData);
            //Llamamos a la funcion del Tag del Shopaction5  - window.agregarCarrito()
            window.agregarCarrito();
        });

    }
});
