window.agregarCarrito = function() {}
window.mostrarProducto = function() {}

$(document).ready(function() {
    $('.wrapperAmountInCart').find('.btn').live('click', function(e) {
        // Variable de atributos de un producto.
        var vDivSelector = $(this);
        var precioRegular = LideratisHelper.Price(LideratisHelper.Price(vDivSelector.parents('.wrapper').find('.valor-de').children('strong').html(), 'Antes: S/. ', ''), ',', '');
        var precioVenta = LideratisHelper.Price(LideratisHelper.Price(vDivSelector.parents('.wrapper').find(".valor-por strong").html().split(":")[1].trim(), 'S/. ', ''), ',', '');
        var porcentaje = vDivSelector.parents('.wrapper').children('.discount-tag').find('.porcentaje').html();
        var vExploreAttributesPRO = new Array();
        /* Atributos
        Attr1 : Marca de Productos
        Attr3 : Precio Regular
        Attr4 : Precio de Venta
        Attr5 : Poncentaje de Descuento
        */
        vExploreAttributesPRO[1] = 'Por Definir';
        if (typeof precioRegular != 'undefined' && precioRegular != '')
            vExploreAttributesPRO[3] = precioRegular;
        vExploreAttributesPRO[4] = precioVenta;
        if (typeof porcentaje != 'undefined' && porcentaje != '')
            vExploreAttributesPRO[5] = porcentaje;

        /* Declaracion de variables para almacenar datos de producto - Tag ProductView y Shopaction5 - Tag ShopAction5*/
        var vProductID = vDivSelector.attr('data-template').split('/')[3];
        var vProductName = LideratisHelper.Price(vDivSelector.parents('.wrapper').find('h3 a').html(), '"', '');
        var vPrimaryCategory = vtxctx.categoryId;
        var vPrice = precioVenta;

        var dataShopAction5 = new Array();
        //Datos del Tag Shopaction5
        dataShopAction5['productID'] = vProductID;
        dataShopAction5['productName'] = vProductName;
        dataShopAction5['quantity'] = '1';
        dataShopAction5['price'] = vPrice;
        dataShopAction5['primaryCategory'] = vPrimaryCategory;
        dataShopAction5['exploreAttributes'] = LideratisHelper.GetArrayAttributes(vExploreAttributesPRO);
        var tagShopaction5 = new LideratisLibrary.ShopAction5_BtnClick(dataShopAction5);

        /*Product view*/
        var dataProductView = new Array();
        // Datos del Tag Productview.
        dataProductView['productID'] = vProductID;
        dataProductView['productName'] = vProductName;
        dataProductView['primaryCategory'] = vPrimaryCategory;
        dataProductView['exploreAttributes'] = LideratisHelper.GetArrayAttributes(vExploreAttributesPRO);
        dataProductView['virtualCategory'] = null;
        var tagProductView = new LideratisLibrary.ProductView(dataProductView);

        // Almacenamos los datos de la variable tagShopaction5 dentro del objeto digitalData
        window.digitalData = tagShopaction5
        // Almacenamos los datos de la variable tagProductView dentro del objeto digitalData.product
        window.digitalData.product = [tagProductView.product[0]];
        window.agregarCarrito();
        window.mostrarProducto();
    });


});
