// Variables globales  que hacen referencia la los Tag.
window.agregarCarrito = function() {};
window.mostrarProducto = function() {};
window.productViewIterator = function() {};
window.listarProdIterator = function() {};
// La function "eventsChaordicClick", nos retorna un objecto con los datos de un producto agregado al carrito
window.eventsChaordicClick = function(products) {

    // Declaracion de variables que almacenaran los datos de un ProductView y ShopAction5
    var cantProd = products.length;
    var vProdProductID = "";
    var vProdProductName = "";
    var vProdPrimaryCategory = "";
    var vProdExploreAttributes = new Array();
    var vProdVirtualCategory = "";
    var vShp5ProductID = "";
    var vShp5ProductName = "";
    var vShp5PrimaryCategory = "";
    var vShp5Quantity = 0;
    var vShp5Price = 0.0;
    var vShp5ExploreAttributes = new Array();
    var vShp5VirtualCategory = "";

    // Se realiza una validacion, de la cantidad de productos que se obtienen de la funcción.
    //  cantProd es igual a 1 => Producto unico.
    //  cantProd  es mayor a 1 => Productos en Combo
    if (cantProd == 1) {
        var producto = products[0];
        var contentProduct = new Array();
        var typeDataOfPrice = typeof producto.oldPrice;
        var validaBrand = ((typeof(producto.details.brand) != 'undefined') ? producto.details.brand : producto.details.brandName);
        /* Atributos del Tag ShopAction5
        Attr1 : Marca
        Attr3 : Precio Regular
        Attr4 : Precio de Venta
        Attr5 : Porcentaje
        */
        vShp5ExploreAttributes[1] = validaBrand;
        vShp5ExploreAttributes[3] = LideratisHelper.NumberOfDecimal(producto.oldPrice, 2);
        vShp5ExploreAttributes[4] = LideratisHelper.NumberOfDecimal(producto.price, 2);
        var fPercent = Math.round((producto.price / producto.oldPrice) * 100);
        var percent = 100 - fPercent;
        if (typeDataOfPrice != 'undefined')
            vShp5ExploreAttributes[5] = percent + '%';

        // Declaracion de variables para almacenar datos del ShopAction5 - Tag ShopAction5
        vShp5ProductID = producto.sku;
        vShp5PrimaryCategory = ((window.IDENTIFIER == 'inicio') ? 'informativo' : window.IDENTIFIER);
        vShp5ProductName = LideratisHelper.Price(producto.name, '"', '');
        vShp5Quantity = 1;
        vShp5Price = LideratisHelper.NumberOfDecimal(producto.price, 2);

        var tagShopAction5 = fnDataShopAction5(vShp5ProductID,
            vShp5PrimaryCategory,
            vShp5ProductName,
            vShp5Quantity,
            vShp5Price,
            vShp5ExploreAttributes,
            vShp5VirtualCategory);

        /* Atributos del Tag ProductView
        Attr1 : Marca
        Attr3 : Precio Regular
        Attr4 : Precio de Venta
        Attr5 : Porcentaje
        */
        vProdExploreAttributes[1] = validaBrand;
        vProdExploreAttributes[3] = LideratisHelper.NumberOfDecimal(producto.oldPrice, 2);
        vProdExploreAttributes[4] = LideratisHelper.NumberOfDecimal(producto.price, 2);
        if (typeDataOfPrice != 'undefined')
            vProdExploreAttributes[5] = percent + '%';
        // Declaracion de variables para almacenar datos del ProductView - Tag ProductView
        vProdProductID = producto.sku;
        vProdProductName = LideratisHelper.Price(producto.name, '"', '');
        vProdPrimaryCategory = ((window.IDENTIFIER == 'inicio') ? 'informativo' : window.IDENTIFIER);
        vProdVirtualCategory = producto.url.split('cm_vc=')[1];

        var dataProductView = fnDataProductView(vProdProductID,
            vProdProductName,
            vProdPrimaryCategory,
            vProdExploreAttributes,
            vProdVirtualCategory);

        tagProductView = new LideratisLibrary.ProductView(dataProductView);
        digitalData = new LideratisLibrary.ShopAction5_BtnClick(tagShopAction5);
        digitalData.product = [tagProductView.product[0]];
        agregarCarrito();
        mostrarProducto();
    } else if (cantProd > 1) {
        //digitalData = new Array();
        //var cart = new Array();
        //LideratisLibrary.initShopAction5Content();
        for (var i = 0; i < cantProd; i++) {
            var producto = products[i];
            var indice = i;
            var typeDataOfPrice = typeof producto.oldPrice;
            var validaBrand = ((typeof(producto.details.brand) != 'undefined') ? producto.details.brand : producto.details.brandName);
            //var contentProduct02 = [];
            /* Atributos del Tag ShopAction5
            Attr1 : Marca
            Attr3 : Precio Regular
            Attr4 : Precio de Venta
            Attr5 : Porcentaje
            */
            vShp5ExploreAttributes[1] = validaBrand;
            vShp5ExploreAttributes[3] = LideratisHelper.NumberOfDecimal(producto.oldPrice, 2);
            vShp5ExploreAttributes[4] = LideratisHelper.NumberOfDecimal(producto.price, 2);
            var fPercent = Math.round((producto.price / producto.oldPrice) * 100);
            var percent = 100 - fPercent;

            // Declaracion de variables para almacenar datos del ShopAction5 - Tag ShopAction5
            vShp5ProductID = producto.sku;
            vShp5PrimaryCategory = ((window.IDENTIFIER == 'inicio') ? 'informativo' : window.IDENTIFIER);
            vShp5ProductName = LideratisHelper.price(producto.name, '"', '');
            vShp5Quantity = 1;
            vShp5Price = LideratisHelper.NumberOfDecimal(producto.price, 2);

            var dataShopAction5 = fnDataShopAction5(vShp5ProductID,
                vShp5PrimaryCategory,
                vShp5ProductName,
                vShp5Quantity,
                vShp5Price,
                vShp5ExploreAttributes,
                vShp5VirtualCategory);
            dataShopAction5['index'] = indice;
            LideratisLibrary.ShopAction5Content(dataShopAction5);
            /* Atributos del Tag ProductView
            Attr1 : Marca
            Attr3 : Precio Regular
            Attr4 : Precio de Venta
            Attr5 : Porcentaje
            */
            vProdExploreAttributes[1] = validaBrand;
            vProdExploreAttributes[3] = LideratisHelper.NumberOfDecimal(producto.oldPrice, 2);
            vProdExploreAttributes[4] = LideratisHelper.NumberOfDecimal(producto.price, 2);
            if (typeDataOfPrice != 'undefined')
                vProdExploreAttributes[5] = percent + '%';

            // Declaracion de variables para almacenar datos del ProductView - Tag ProductView
            vProdProductID = producto.sku;
            vProdProductName = LideratisHelper.Price(producto.name, '"', '');
            vProdPrimaryCategory = ((window.IDENTIFIER == 'inicio') ? 'informativo' : window.IDENTIFIER);
            vProdVirtualCategory = producto.url.split('cm_vc=')[1];
            var dataProductView = fnDataProductView(vProdProductID,
                vProdProductName,
                vProdPrimaryCategory,
                vProdExploreAttributes,
                vProdVirtualCategory);
            dataProductView['index'] = indice;
            LideratisLibrary.ProductView_content(dataProductView);
        }
        digitalData = {
            'product': LideratisLibrary.ProductViewIterator()
        }
        digitalData.cart = {
            'item': LideratisLibrary.ShopAction5()
        }
        window.productViewIterator();
        window.listarProdIterator();
    }
}

// Function que nos retorna, un objeto con los datos del Tag ShopAction5
fnDataShopAction5 = function(vShp5ProductID, vShp5PrimaryCategory, vShp5ProductName, vShp5Quantity, vShp5Price, vShp5ExploreAttributes, vShp5VirtualCategory) {
    dataShopAction5 = new Array();
    dataShopAction5['productID'] = vShp5ProductID;
    dataShopAction5['primaryCategory'] = vShp5PrimaryCategory;
    dataShopAction5['productName'] = vShp5ProductName;
    dataShopAction5['quantity'] = vShp5Quantity;
    dataShopAction5['price'] = vShp5Price;
    dataShopAction5['exploreAttributes'] = LideratisHelper.GetArrayAttributes(vShp5ExploreAttributes);
    dataShopAction5['virtualCategory'] = vShp5VirtualCategory;
    return dataShopAction5;
}
// Function que nos retorna, un objeto con los datos del Tag ProductView
fnDataProductView = function(vProdProductID, vProdProductName, vProdPrimaryCategory, vProdExploreAttributes, vProdVirtualCategory) {
    dataProductView = new Array();
    dataProductView['productID'] = vProdProductID;
    dataProductView['productName'] = vProdProductName;
    dataProductView['primaryCategory'] = vProdPrimaryCategory;
    dataProductView['exploreAttributes'] = LideratisHelper.GetArrayAttributes(vProdExploreAttributes);
    dataProductView['virtualCategory'] = vProdVirtualCategory;
    return dataProductView;
}
