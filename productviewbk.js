console.log("Inicio Codesnippet Productview");
window.functionLoad = function() {}
window.mostrarProducto = function() {}
window.identificador = digitalData.pageInstanceID;
window.valorDataLayer = '';
$(window).load(function() {
    var prefijo = 'PROD: ';
    var title = LideratisHelper.tempClearQuotationMarks($('title').html().split(' | ')[0]);
    var primaryCat = dataLayer[0].productCategoryId;
    var searchTerm = null;
    var searchResults = null;
    var attr1 = new Array();
    var contentPage = new Array();
    contentPage['pageId'] = prefijo + title + ' | WONG';
    contentPage['primaryCategory'] = primaryCat;
    contentPage['onsiteSearchTerm'] = searchTerm;
    contentPage['onsiteSearchResults'] = searchResults;
    contentPage['exploreAttributes'] = attr1.join("-_-");
    contentPageView = new LideratisLibrary.PageView(contentPage);
    var attr2 = new Array();
    var preRegular = LideratisHelper.tempNumberOfDecimal(dataLayer[0].productListPriceTo, 2);
    var preVenta = LideratisHelper.tempNumberOfDecimal(dataLayer[0].productPriceTo, 2);
    /*Atributos*/
    attr2.push(dataLayer[0].productBrandName);
    attr2.push('');
    attr2.push(preRegular);
    attr2.push(preVenta);
    var listaFlag = new Array();
    var porcentaje = $(".flags p:eq(0)").html();
    attr2.push(porcentaje);
    $(".flags p").each(function(e) {
        var flaArray = $(this).attr('class').split('flag ')[1] + "_" + $(this).html();
        listaFlag.push(flaArray);
    });
    var flag = listaFlag.join('|');
    if (flag != '') {
        attr2.push(flag);
    }
    /*Fin Atributos*/
    var productViewList = new Array();
    //productViewList['productID'] = dataLayer[0].productId;
    productViewList['productID'] = vtxctx.skus;
    productViewList['productName'] = LideratisHelper.tempClearQuotationMarks(dataLayer[0].productName);
    productViewList['primaryCategory'] = dataLayer[0].productCategoryId;
    productViewList['exploreAttributes'] = attr2.join("-_-");
    contentProductView = new LideratisLibrary.ProductView(productViewList);
    window.digitalData = new Object();
    digitalData.page = contentPageView.page; // objecto
    digitalData.product = [contentProductView.product[0]]; // arreglo */
    window.functionLoad();
    /*********************************PRODUCTVIEW************************************/
    window.productViewIterator = function() {}
        /*********************************SHOPACTION5***************************************/
    window.listarProdIterator = function() {}
    window.agregarCarrito = function() {}
    $('.buy-button').click(function(e) {
        e.preventDefault();
        var contentProduct = new Array();
        var precioRegular = LideratisHelper.tempNumberOfDecimal(dataLayer[0].productListPriceTo, 2);
        var precioVenta = LideratisHelper.tempNumberOfDecimal(dataLayer[0].productPriceTo, 2);
        var attr = new Array();
        /*Atributos*/
        attr.push(dataLayer[0].productBrandName);
        attr.push('');
        attr.push(precioRegular);
        attr.push(precioVenta);
        /*FinAtributos*/
        //contentProduct['productID'] = dataLayer[0].productId;
        contentProduct['productID'] = vtxctx.skus;
        contentProduct['productName'] = LideratisHelper.tempClearQuotationMarks(dataLayer[0].productName);
        contentProduct['quantity'] = '1';
        contentProduct['price'] = LideratisHelper.tempNumberOfDecimal(dataLayer[0].productPriceTo, 2);
        contentProduct['primaryCategory'] = dataLayer[0].productCategoryId;
        contentProduct['exploreAttributes'] = attr.join('-_-');
        window.digitalData = new LideratisLibrary.ShopAction5_BtnClick(contentProduct);
        agregarCarrito();
        window.location.href = $(this).attr('href');
    });
    /*********************************SHOPACTION5***************************************/
    /*********************************SHOPACTION5 CHAORDIC******************************/
    window.eventsChaordicClick = function(products) {
            var cantProd = products.length;
            if (cantProd == 1) {
                var producto = products[0];
                var contentProduct = new Array();
                var identifi = typeof producto.oldPrice;
                var validaBrand = ((typeof(producto.details.brand) != 'undefined') ? producto.details.brand : producto.details.brandName);
                window.attr = new Array();
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
                contentProduct['productID'] = producto.sku;
                contentProduct['primaryCategory'] = '';
                contentProduct['productName'] = LideratisHelper.tempClearQuotationMarks(producto.name);
                contentProduct['quantity'] = '1';
                contentProduct['price'] = LideratisHelper.tempNumberOfDecimal(producto.price, 2);
                contentProduct['exploreAttributes'] = LideratisHelper.tempAttributesJoin(attr, '-_-');
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
                    var contentProduct02 = [];
                    var identifi = typeof producto.oldPrice;
                    window.attr01 = new Array();
                    /*Atributos*/
                    attr01.push(producto.details.brand);
                    attr01.push('');
                    attr01.push(LideratisHelper.tempNumberOfDecimal(producto.oldPrice, 2));
                    attr01.push(LideratisHelper.tempNumberOfDecimal(producto.price, 2));
                    /**/
                    //console.log(producto.oldPrice + '-'+ producto.price);
                    var verifica = (producto.price / producto.oldPrice) * 100;
                    //console.log(verifica);
                    var antPorcet = Math.round(verifica);
                    //console.log(antPorcet);
                    var porcent = (100 - antPorcet);
                    if (identifi != 'undefined') {
                        attr01.push(porcent + '%');
                    }
                    /*Fin de Atributos*/
                    contentProduct02['index'] = i;
                    contentProduct02['productID'] = producto.sku;
                    contentProduct02['primaryCategory'] = ((identificador == 'inicio') ? 'informativo' : identificador);
                    contentProduct02['productName'] = LideratisHelper.tempClearQuotationMarks(producto.name);
                    contentProduct02['quantity'] = '1';
                    contentProduct02['price'] = LideratisHelper.tempNumberOfDecimal(producto.price, 2);
                    contentProduct02['exploreAttributes'] = LideratisHelper.tempAttributesJoin(attr01, '-_-');
                    LideratisLibrary.ShopAction5Content(contentProduct02);
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
        /*********************************SHOPACTION5 CHAORDIC******************************/
        /*********************************REGISTRATIONTAG***************************************/
    $('.wong-button').click(function(e) {
        var CantError = $('input.error').length;
        if (CantError == 0) {
            var contentRegistration = new Array();
            contentRegistration['profileID'] = $('#CL_email').val();
            contentRegistration['profileEmail'] = $('#CL_email').val();
            contentRegistration['country'] = 'Peru'
            digitalData = new LideratisLibrary.RegistrationTag(contentRegistration);
            submit_Enviar();
        }
    });
    window.submit_Enviar = function() {}
        /*********************************REGISTRATIONTAG***************************************/
        /*********************************ELEMENTTAG***************************************/
    window.submit_Click = function() {}
    $(".contenedor_sociales .content-sociales-home div, .contenedor_sociales .content_sociales div").each(function(e) {
        $(".contenedor_sociales .content-sociales-home div, .contenedor_sociales .content_sociales div").eq(e).click(function(i) {
            var ContentElement = new Array();
            ContentElement['componentID'] = 'Footer - redes sociales | WONG';
            ContentElement['primaryCategory'] = ((identificador == 'inicio') ? 'informativo' : identificador);
            ContentElement['exploreAttributes'] = $(this).attr('class');
            digitalData = new LideratisLibrary.ElementTag(ContentElement);
            submit_Click();
        });
    });
    /*********************************ELEMENTTAG***************************************/
});
