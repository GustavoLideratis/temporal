$(window).load(function() {

    window.eventsChaordicClick = function(products) {
        var cantProd = products.length;
        if (cantProd == 1) {


            var producto = products[0];
            var contentProduct = new Array();
            var identifi = typeof producto.oldPrice;
            var validaBrand = ((typeof(producto.details.brand) != 'undefined') ? producto.details.brand : producto.details.brandName);
            var attr = new Array();
            /*Atributos*/
            attr.push(producto.details.brand);
            attr.push('');
            attr.push(LideratisHelper.tempNumberOfDecimal(producto.oldPrice, 2));
            attr.push(LideratisHelper.tempNumberOfDecimal(producto.price, 2));
            /**/
            //console.log(producto.oldPrice + '-'+ producto.price);
            var verifica = (producto.price / producto.oldPrice) * 100;
            //console.log(verifica);
            var antPorcet = Math.round(verifica);
            //console.log(antPorcet);
            var porcent = (100 - antPorcet);
            if (identifi != 'undefined') {
                attr.push(porcent + '%');
            }
            /**/
            /*Fin de Atributos*/

            // contentProduct['productID'] = producto.sku;
            // contentProduct['primaryCategory'] = '';
            // contentProduct['productName'] = LideratisHelper.tempClearQuotationMarks(producto.name);
            // contentProduct['quantity'] = '1';
            // contentProduct['price'] = LideratisHelper.tempNumberOfDecimal(producto.price, 2);
            // contentProduct['exploreAttributes'] = LideratisHelper.tempAttributesJoin(attr, '-_-');

            var vDatosCHRD = products[0];
            var vProductID = vDatosChaordic.sku;
            var vPrimaryCategory = '';
            var vProductName = LideratisHelper.tempClearQuotationMarks(vDatosChaordic.name);
            var vPrice = LideratisHelper.tempNumberOfDecimal(vDatosChaordic.price, 2);
            var vExploreAttributesCHRD = new Array();
            var vVirtualCategory = null;

            //Atributos
            var marcaProducto = vDatosChaordic.details.brand;
            var precioRegular = LideratisHelper.NumberOfDecimal(vDatosChaordic.oldPrice, 2);
            var precioVenta = LideratisHelper.NumberOfDecimal(vDatosChaordic.price, 2);
            //Attr1
            vExploreAttributesCHRD[1] = marcaProducto;
            vExploreAttributesCHRD[3] = precioRegular;
            vExploreAttributesCHRD[4] = precioVenta;

            // Obtenr el descuento en %
            var paso1 = (vDatosChaordic.price / vDatosChaordic.oldPrice) * 100;
            var paso2 = Math.round(paso1);
            var porcentaje = (100 - paso2);
            if (typeof(vDatosChaordic.oldPrice) != 'undefined') {
                vExploreAttributesCHRD[5] = porcentaje + '%';
            }

            // Datos del Tag Shopaction5.
            var dataShopAction5 = new Array();
            dataShopAction5['productID'] = vProductID;
            dataShopAction5['productName'] = vProductName;
            dataShopAction5['quantity'] = '1';
            dataShopAction5['price'] = vPrice;
            dataShopAction5['primaryCategory'] = vPrimaryCategory;
            dataShopAction5['exploreAttributes'] = LideratisHelper.GetArrayAttributes(vExploreAttributesCHRD);
            dataShopAction5['virtualCategory'] = vVirtualCategory;







            /*Product view*/
            var productViewList = new Array();
            var attrpro = new Array();
            attrpro.push(validaBrand);
            attrpro.push(LideratisHelper.tempNumberOfDecimal(producto.oldPrice, 2));
            attrpro.push(LideratisHelper.tempNumberOfDecimal(producto.price, 2));
            if (identifi != 'undefined') {
                attrpro.push(porcent + '%');
            }
            productViewList['productID'] = producto.sku;
            productViewList['productName'] = LideratisHelper.tempClearQuotationMarks(producto.name);
            productViewList['primaryCategory'] = ((identificador == 'inicio') ? 'informativo' : identificador);
            productViewList['exploreAttributes'] = LideratisHelper.tempAttributesJoin(attrpro, '-_-');
            productViewList['virtualCategory'] = producto.url.split('cm_vc=')[1];







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









            contentProductView = new LideratisLibrary.ProductView(productViewList);
            /*Fin Product View*/
            window.digitalData = new LideratisLibrary.ShopAction5_BtnClick(contentProduct);
            window.digitalData.product = [contentProductView.product[0]];
            agregarCarrito();
            mostrarProducto();
        } else if (cantProd > 1) {
            var digitalData = new Array();
            var cart = new Array();
            //LideratisLibrary.initShopAction5Content();
            for (var i = 0; i < cantProd; i++) {
                var producto = products[i];
                var validaBrand = ((typeof(producto.details.brand) != 'undefined') ? producto.details.brand : producto.details.brandName);
                //console.log(producto);
                var contentProduct = [];
                var identifi = typeof producto.oldPrice;
                var attr = new Array();
                /*Atributos*/
                attr.push(producto.details.brand);
                attr.push('');
                attr.push(LideratisHelper.tempNumberOfDecimal(producto.oldPrice, 2));
                attr.push(LideratisHelper.tempNumberOfDecimal(producto.price, 2));
                /**/
                //console.log(producto.oldPrice + '-'+ producto.price);
                var verifica = (producto.price / producto.oldPrice) * 100;
                //console.log(verifica);
                var antPorcet = Math.round(verifica);
                //console.log(antPorcet);
                var porcent = (100 - antPorcet);
                if (identifi != 'undefined') {
                    attr.push(porcent + '%');
                }
                /*Fin de Atributos*/
                contentProduct['index'] = i;
                contentProduct['productID'] = producto.sku;
                contentProduct['primaryCategory'] = ((identificador == 'inicio') ? 'informativo' : identificador);
                contentProduct['productName'] = LideratisHelper.tempClearQuotationMarks(producto.name);
                contentProduct['quantity'] = '1';
                contentProduct['price'] = LideratisHelper.tempNumberOfDecimal(producto.price, 2);
                contentProduct['exploreAttributes'] = LideratisHelper.tempAttributesJoin(attr, '-_-');
                LideratisLibrary.ShopAction5Content(contentProduct);
                /*Product view*/
                var productViewList = new Array();
                var attrpro = new Array();
                attrpro.push(validaBrand);
                attrpro.push(LideratisHelper.tempNumberOfDecimal(producto.oldPrice, 2));
                attrpro.push(LideratisHelper.tempNumberOfDecimal(producto.price, 2));
                if (identifi != 'undefined') {
                    attrpro.push(porcent + '%');
                }
                productViewList['index'] = i;
                productViewList['productID'] = producto.sku;
                productViewList['productName'] = LideratisHelper.tempClearQuotationMarks(producto.name);
                productViewList['primaryCategory'] = ((identificador == 'inicio') ? 'informativo' : identificador);
                productViewList['exploreAttributes'] = LideratisHelper.tempAttributesJoin(attrpro, '-_-');
                productViewList['virtualCategory'] = producto.url.split('cm_vc=')[1];
                LideratisLibrary.ProductView_content(productViewList);
                /*Fin Product View*/
            }
            window.digitalData = {
                'product': LideratisLibrary.ProductViewIterator()
            }
            window.digitalData.cart = {
                'item': LideratisLibrary.ShopAction5()
            }
            window.productViewIterator();
            window.listarProdIterator();
        }
    }

});
