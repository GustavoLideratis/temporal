console.log("Inicio Codesnippet Informativo");
window.functionLoad = function() {}
window.valorDataLayer = ''
window.identificador = digitalData.pageInstanceID;
window.prefijo = '';
window.title = $('title').text().replace(' – Wong', '');
window.primaryCat = 'informativo';
window.searchTerm = '';
window.searchResults = 0;
window.attr = new Array();
/*********************************PAGEVIEW***************************************/
setTimeout(function() {
    if (identificador == 'categoria' || identificador == 'departamento') {
        var listaFiltro = new Array();
        $(".navigation-tabs .sr_selected").each(function() {
            var tipo = $(this).parent("div").parent("fieldset").find("h5").html();
            listaFiltro.push(tipo + "_" + $(this).text());
        });
        var cantSub = $("#mainCol .sub").length - 1;
        var orden = (($("#mainCol .sub:eq(" + cantSub + ") select#O option:selected").html() == 'Seleccione') ? '' : $("#mainCol .sub:eq(" + cantSub + ") select#O option:selected").html());
        var filtros = listaFiltro.join(',');
        prefijo = 'CAT: ';
        searchTerm = null;
        searchResults = null;
        var antTitle = $('title').text().replace(' – Wong', '');
        title = LideratisHelper.GetCutValue(antTitle, ' | ', 0);
        primaryCat = vtxctx.categoryId;
        if (orden != "") {
            attr.push(orden);
        } else {
            attr.push('');
        }
        if (filtros != "") {
            attr.push(filtros);
        }
    }
    if (identificador == 'busqueda' && dataLayer[0].pageCategory == 'InternalSiteSearch') {
        searchResults = dataLayer[0].siteSearchResults;
        if (searchResults > 0) {
            title = 'Búsqueda con Resultados';
        } else {
            title = 'Búsqueda sin Resultados';
        }
        var verificaCat = typeof(dataLayer[0].siteSearchCategory);
        primaryCat = ((verificaCat == 'undefined') ? 'Busqueda' : dataLayer[0].siteSearchCategory);
        searchTerm = dataLayer[0].siteSearchTerm;
        var cantSub = $("#mainCol .sub").length - 1;
        var orden = (($("#mainCol .sub:eq(" + cantSub + ") select#O option:selected").html() == 'Seleccione') ? '' : $("#mainCol .sub:eq(" + cantSub + ") select#O option:selected").html());
        if (orden != '') {
            attr.push(orden);
        }
    } else if (identificador == 'busqueda' && dataLayer[0].pageCategory == 'Category') {
        var cantPro = $('.wrapper').length;
        var busqueda = $('.bread-crumb ul').children('.last').find('a:eq(0)').html();
        if (cantPro > 0) {
            title = 'Búsqueda con Resultados';
        } else {
            title = 'Búsqueda sin Resultados';
        }
        primaryCat = "Busqueda";
        if (identificador == 'Category') {
            searchTerm = null;
            searchResults = null;
        } else {
            searchTerm = busqueda;
            searchResults = cantPro;
        }
        var cantSub = $("#mainCol .sub").length - 1;
        var orden = (($("#mainCol .sub:eq(" + cantSub + ") select#O option:selected").html() == 'Seleccione') ? '' : $("#mainCol .sub:eq(" + cantSub + ") select#O option:selected").html());
        if (orden != '') {
            attr.push(orden);
        }
    }
    if (identificador == 'carrito') {
        title = 'Bolsa de Compras';
        primaryCat = "flujo de compras";
    }
    if (identificador == 'orden') {
        primaryCat = 'orden';
    }
    if (identificador == 'inicio') {
        title = 'Portada';
        searchTerm = null;
        searchResults = null;
    }
    /*if (valorDataLayer != '') {
        attr.push('');
        attr.push('');
        attr.push('');
        attr.push('');
        attr.push('');
        attr.push('');
        attr.push(valorDataLayer);
    }*/
    var contentPage = new Array();
    if (title != 'Portada') {
        contentPage['pageId'] = prefijo + title + ' | WONG';
    } else {
        contentPage['pageId'] = title + ' | WONG';
    }
    contentPage['primaryCategory'] = primaryCat;
    contentPage['onsiteSearchTerm'] = searchTerm;
    contentPage['onsiteSearchResults'] = searchResults;
    contentPage['exploreAttributes'] = LideratisHelper.tempAttributesJoin(attr, '-_-');
    window.digitalData = new LideratisLibrary.PageView(contentPage);
    window.functionLoad();
}, 1500);
window.functionLoad = function() {}
window.agregarCarrito = function() {}
window.mostrarProducto = function() {}
    /*********************************PAGEVIEW***************************************/
    /*********************************SHOPACTION5***************************************/
if (identificador == 'categoria' || identificador == 'departamento' || identificador == 'busqueda') {
    $('.wrapperAmountInCart').find('.btn').live('click', function(e) {
        //e.preventDefault();
        var divSelector = $(this);
        var contentProduct = new Array();
        var verificarprecioRegular = LideratisHelper.tempPrice(divSelector.parents('.wrapper').find('.preco').find('.valor-de').children('strong').html());
        var precioRegular = (LideratisLibrary.isset(verificarprecioRegular) ? verificarprecioRegular : '0.00');
        var precioVenta = LideratisHelper.tempPrice(divSelector.parents('.wrapper').find(".valor-por strong").html().split(":")[1].trim());
        var valorPorcent = divSelector.parents('.wrapper').children('.discount-tag').find('.porcentaje').html();
        /*Atributos*/
        window.attr = new Array();
        attr.push('Por Definir');
        attr.push('');
        attr.push(precioRegular);
        attr.push(precioVenta);
        if (valorPorcent != '') {
            attr.push(valorPorcent);
        }
        //validacion del porcentaje calculables
        //var porcent = (precioVenta / precioRegular)
        //attr.push();
        /*Fin Atributos*/
        contentProduct['productID'] = divSelector.attr('data-template').split('/')[3];
        contentProduct['primaryCategory'] = vtxctx.categoryId;
        contentProduct['productName'] = LideratisHelper.tempClearQuotationMarks(divSelector.parents('.wrapper').find('h3 a').html());
        contentProduct['quantity'] = '1';
        contentProduct['price'] = precioVenta;
        contentProduct['exploreAttributes'] = LideratisHelper.tempAttributesJoin(attr, '-_-');
        /*Product view*/
        var productViewList = new Array();
        var attrpro = new Array();
        attrpro.push('Por Definir');
        attrpro.push(precioRegular);
        attrpro.push(precioVenta);
        attrpro.push(valorPorcent);
        //productViewList['productID'] = dataLayer[0].productId;
        productViewList['productID'] = divSelector.attr('data-template').split('/')[3];
        productViewList['productName'] = LideratisHelper.tempClearQuotationMarks(divSelector.parents('.wrapper').find('h3 a').html());
        productViewList['primaryCategory'] = vtxctx.categoryId;
        productViewList['exploreAttributes'] = LideratisHelper.tempAttributesJoin(attrpro, '-_-');
        contentProductView = new LideratisLibrary.ProductView(productViewList);
        /*Fin Product View*/
        window.digitalData = new LideratisLibrary.ShopAction5_BtnClick(contentProduct);
        window.digitalData.product = [contentProductView.product[0]];
        agregarCarrito();
        mostrarProducto();
    });
    //window.agregarCarrito = function() {}
}
/*********************************SHOPACTION5***************************************/
/************************PAGEVIEW**CATEGORIAS Y DEPARTAMENTOS**********************/
if (identificador == 'categoria' || identificador == 'departamento') {
    var attrcat = new Array();
    var contenedor
    $('.search-multiple-navigator').find('input[type=checkbox]').on('click', function(e) {
        var listaFiltro = new Array();
        $("input[type=checkbox]:checked").each(function() {
            var tipo = $(this).parent().parent("div").parent("fieldset").find("h5").html();
            listaFiltro.push(LideratisHelper.tempcleanEmptyFields(tipo + "_" + $(this).parent().text()));
        });
        var orden = (($("select#O option:selected").html() == 'Seleccione') ? '' : $("select#O option:selected").html());
        var filtro = listaFiltro.join('|');
        if (orden != '') {
            attrcat.push(orden);
        } else {
            attrcat.push('');
        }
        if (filtro != '') {
            attrcat.push(filtro);
        }
        var contentCat = new Array();
        contentCat['pageId'] = prefijo + title + ' | WONG';
        //contentCat['primaryCategory'] = dataLayer[0].categoryId;
        contentCat['primaryCategory'] = vtxctx.categoryId;
        contentCat['onsiteSearchTerm'] = null;
        contentCat['onsiteSearchResults'] = null;
        contentCat['exploreAttributes'] = LideratisHelper.tempAttributesJoin(attrcat, "-_-");
        window.digitalData = new LideratisLibrary.PageView(contentCat);
        clickFunction();
        attrcat.length = 0;
    });
    //if (cantCkeck != 0) {
    $('.uncheck-marked').click(function() {
            var filtroLista = new Array()
            $("input[type=checkbox]:checked").each(function() {
                var tipo = $(this).parent().parent("div").parent("fieldset").find("h5").html();
                filtroLista.push(LideratisHelper.tempcleanEmptyFields(tipo + "_" + $(this).parent().text()));
            });
            var orden = (($("select#O option:selected").html() == 'Seleccione') ? '' : $("select#O option:selected").html());
            var filtro = filtroLista.join('|');
            attrcat.push(orden);
            //if (filtro != '') {
            //  attrcat.push(filtro);
            // }
            var contenidoCategoria = new Array();
            contenidoCategoria['pageId'] = prefijo + title + ' | WONG';
            //contenidoCategoria['primaryCategory'] = dataLayer[0].categoryId;
            contenidoCategoria['primaryCategory'] = vtxctx.categoryId;
            contenidoCategoria['onsiteSearchTerm'] = null;
            contenidoCategoria['onsiteSearchResults'] = null;
            contenidoCategoria['exploreAttributes'] = LideratisHelper.tempAttributesJoin(attrcat, "-_-");
            window.digitalData = new LideratisLibrary.PageView(contenidoCategoria);
            clickFunction();
            attrcat.length = 0;
        })
        //}
    window.clickFunction = function() {}
}
/*********************************PAGEVIEW***************************************/
/*********************************REGISTRATIONTAG***************************************/
$('.wong-button').click(function(e) {
    //e.preventDefault();
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
window.submit_Click = function() {}
    /*********************************ELEMENTTAG***************************************/
    /*********************************SHOP ACTION5 CATEGORIAS**************************/
window.eventsChaordicClick = function(products) {
        var cantProd = products.length;
        if (cantProd == 1) {
            var producto = products[0];
            var contentProduct = new Array();
            var identifi = typeof producto.oldPrice;
            var validaBrand = ((typeof(producto.details.brand) != 'undefined') ? producto.details.brand : producto.details.brandName);
            window.attr = new Array();
            /*Atributos*/
            attr.push(validaBrand);
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
            contentProduct['primaryCategory'] = ((identificador == 'inicio') ? 'informativo' : identificador);
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
            //productViewList['productID'] = dataLayer[0].productId;
            productViewList['productID'] = producto.sku;
            productViewList['productName'] = LideratisHelper.tempClearQuotationMarks(producto.name);
            productViewList['primaryCategory'] = ((identificador == 'inicio') ? 'informativo' : identificador);
            productViewList['exploreAttributes'] = LideratisHelper.tempAttributesJoin(attrpro, '-_-');
            productViewList['virtualCategory'] = producto.url.split('cm_vc=')[1];
            //console.log("entro virtualCategory " + producto.url);
            contentProductView = new LideratisLibrary.ProductView(productViewList);
            /*Fin Product View*/
            window.digitalData = new LideratisLibrary.ShopAction5_BtnClick(contentProduct);
            window.digitalData.product = [contentProductView.product[0]];
            agregarCarrito();
            mostrarProducto();
        }
    }
    /*********************************SHOP ACTION5 CATEGORIAS**************************/
