console.log("LideratisHelper v2");
window.LideratisHelper = new Object();
/*Library Gustavo*/
LideratisHelper.tempClearQuotationMarks = function(texto) {
    try {
        var cadena = texto
        if (typeof(cadena) !== 'undefined') {
            if (typeof(cadena) === 'string') {
                cadena = cadena.replace(/"/gi, ' ');
                cadena = cadena.replace(/" /gi, ' ');
                cadena = cadena.replace(/' /gi, " ");
                cadena = cadena.replace(/,/gi, " ");
                cadena = cadena.replace(/  /gi, " ");
            }
        } else {
            cadena = '';
        }
        return cadena;
    } catch (error) {
        console.log("MSG: " + error.message);
    }
}
LideratisHelper.tempPrice = function(valor) {
    try {
        var precio = valor;
        if (typeof precio !== 'undefined') {
            if (typeof precio === 'string') {
                precio = precio.replace('S/. ', '');
                precio = precio.replace('Antes: ', '');
                precio = precio.replace(',', '');
                precio = precio.replace(/,/gi, '');
            }
        } else {
            precio = '';
        }
        return precio;
    } catch (error) {
        console.log("MSG: " + error.message);
    }
};
LideratisHelper.tempcleanEmptyFields = function(texto) {
    try {
        var cadena = texto;
        if (typeof cadena !== 'undefined') {
            if (typeof cadena === 'string') {
                cadena = texto.replace(/ /, '');
            }
        } else {
            cadena = '';
        }
        return cadena
    } catch (error) {
        console.log(error.message);
    }
};
LideratisHelper.tempcleanCharacter = function(cadena, caracter, posicion) {
    try {
        var texto = cadena;
        if (typeof texto !== 'undefined') {
            if (typeof texto === 'string') {
                texto = texto.split(caracter);
                texto = texto[posicion];
            }
        } else {
            texto = '';
        }
        return texto;
    } catch (error) {
        console.log("MSG: " + error.message);
    }
};
LideratisHelper.tempAttributesJoin = function(arre, caracter) {
    try {
        var arreglo = arre;
        arreglo = arreglo.join(caracter);
        return arreglo;
    } catch (error) {
        console.log("MSG: " + error.message);
    }
};
LideratisHelper.tempNumberOfDecimal = function(valor, ndecimal) {
    try {
        var precio = valor;
        if (typeof precio !== 'undefined') {
            if (typeof precio === 'string') {
                precio = parseFloat(precio);
            }
            precio = precio.toFixed(ndecimal);
        }
        return precio;
    } catch (error) {
        console.log("MSG: " + error.message);
    }
}
LideratisHelper.tempCantDecimal = function(numero) {
    var regex = /^\d+(?:\.\d{0,2})$/;
    var regex1 = /^\d+(?:\.\d{0,1})$/;
    var valor = numero;
    var result;
    try {
        if (regex.test(valor)) {
            result = valor;
        }
        if (regex1.test(valor)) {
            result = valor + '0';
        }
        if (regex.test(valor) == false && regex1.test(valor) == false) {
            result = valor + '.00';
        }
        return result;
    } catch (error) {
        console.log("MSG: " + error.message);
    }
};
/*Library Jesus*/
/******************************************************************************************************************/
//La funcion "GetCutValue",
//@texto    : Cadena
//@caracter : Caracter a remplazar
//@posicion : Posicion
/******************************************************************************************************************/
LideratisHelper.GetCutValue = function(cadena, caracter, posicion) {
    try {
        var texto = cadena;
        if (typeof texto !== 'undefined') {
            if (typeof texto === 'string') {
                texto = texto.split(caracter);
                texto = texto[posicion];
            }
        } else {
            texto = '';
        }
        return texto;
    } catch (error) {
        console.log("MSG: " + error.message);
    }
};
/******************************************************************************************************************/
//La funcion "ClearQuotationMarks", se encarga de quitar las comillas simple y comillas dobles de los textos.
//@texto   : Cadena
/******************************************************************************************************************/
LideratisHelper.ClearQuotationMarks = function(texto) {
        try {
            var cadena = texto;
            if (typeof(cadena) !== 'undefined') {
                if (typeof(cadena) === 'string') {
                    cadena = cadena.replace(/['"]+/g, '');
                }
            } else {
                cadena = '';
            }
            return cadena;
        } catch (error) {
            console.log("MSG: " + error.message);
        }
    }
    /******************************************************************************************************************/
    //La funcion "ClearBlankSpaces", se encarga de eliminar los espacios en blanco de una cadena.
    //@texto    : Cadena
    /******************************************************************************************************************/
LideratisHelper.ClearBlankSpaces = function(texto) {
        try {
            var cadena = texto;
            if (typeof(cadena) !== 'undefined') {
                if (typeof(cadena) === 'string') {
                    cadena = cadena.replace(/ +/g, ' ').trim();
                }
            } else {
                cadena = '';
            }
            return cadena;
        } catch (error) {
            console.log("MSG: " + error.message);
        }
    }
    /******************************************************************************************************************/
    //La funcion "Price", se encarga de remplazar una parte de la cadena por una cadena deseada.
    //@valor       : Cadena Obtenida.
    //@caracter    : Contenido a ser remplazado
    //reemplazo    : Cadena deseada.
    /******************************************************************************************************************/
LideratisHelper.Price = function(valor, caracter, reemplazo) {
    try {
        var valor_in = valor;
        if (typeof valor_in !== 'undefined') {
            if (typeof valor_in === 'string') {
                valor_in = valor_in.replace(caracter, reemplazo);
            }
        } else {
            valor_in = '';
        }
        return valor_in;
    } catch (error) {
        console.log("MSG: " + error.message);
    }
};
/******************************************************************************************************************/
//La funcion "AttributesJoin", Se encarga de obtener la matriz y convertirlos en una cadena, para posteriormente separarlos
// por un separador especificado
//@arre         : Matriz.
//@caracter    : separador de una cadena.
/******************************************************************************************************************/
LideratisHelper.AttributesJoin = function(array, caracter) {
    try {
        var arreglo = array;
        arreglo = arreglo.join(caracter);
        return arreglo;
    } catch (error) {
        console.log("MSG: " + error.message);
    }
};
/******************************************************************************************************************/
//La funcion "NumberOfDecimal", Se encarga de obtener un valor numero y indicarle la cantidad de decimales.
//@arre         : Matriz.
//@caracter    : separador de una cadena.
/******************************************************************************************************************/
LideratisHelper.NumberOfDecimal = function(valor, ndecimal) {
    try {
        var precio = valor;
        if (typeof precio !== 'undefined') {
            if (typeof precio === 'string') {
                precio = parseFloat(precio);
            }
            precio = precio.toFixed(ndecimal);
        }
        return precio;
    } catch (error) {
        console.log("MSG: " + error.message);
    }
};
/******************************************************************************************************************/
//La funcion "PrefixSuffix", permite que agregemos un prefijo, sufijo y un titutlo.
//@prefix    : Nombre del Prefijo.
//@suffix    : Nombre del Sufijo.
//@title     : Titulo de la página.
/******************************************************************************************************************/
LideratisHelper.PrefixSuffix = function(prefix, suffix, title) {
    try {
        var iPrefix = prefix;
        var iSuffix = suffix;
        var iTitle = title;
        var tTitle;
        if (typeof iPrefix !== 'undefined' && typeof iSuffix !== 'undefined') {
            if (typeof iPrefix === 'string' && typeof iSuffix === 'string') {
                tTitle = (iPrefix != "") ? iPrefix.toUpperCase().trim() + ": " : "";
                tTitle += iTitle + " | " + iSuffix;
            }
            tTitle = tTitle.trim();
        }
        return tTitle;
    } catch (error) {
        console.log("MSG: " + error.message);
    }
};
/******************************************************************************************************************/
//La funcion "ValidateVariable", Se encarga de validar el tipo de variable para identificar si es verdadera.
//@typeVar    : Tipo de Variable "String, Number, booleanos, "
//@varName    : Nombre de la variable.
/******************************************************************************************************************/
LideratisHelper.ValidateVariable = function(typeVar, varName) {
    try {
        var validate = false;
        if (typeof varName !== 'undefined' && typeof varName === typeVar)
            validate = true;
        return validate;
    } catch (error) {
        console.log("MSG: " + error.message);
    }
};
/******************************************************************************************************************/
//La funcion "CreateCookies", realiza la creacion de un nueva Cookies
//@cookie_name      : Nombre de la Cookie
//@cookie_value     : Valor de la Cookie.
//@lifespan_in_days : Duración en días.
//@valid_domain     : Validación del Dominio.
/******************************************************************************************************************/
LideratisHelper.CreateCookies = function(cookie_name, cookie_value, lifespan_in_days, valid_domain) {
    var domain_string = valid_domain ? ("; domain=" + valid_domain) : '';
    document.cookie = cookie_name + "=" + encodeURIComponent(cookie_value) +
        "; max-age=" + 60 * 60 * 24 * lifespan_in_days +
        "; path=/" + domain_string;
};
/******************************************************************************************************************/
//La funcion "GetCookies", Realiza la lectura de una Cookie existente
//@cookie_name      : Nombre de la Cookie
/******************************************************************************************************************/
LideratisHelper.GetCookies = function(cookie_name) {
    var cookie_string = document.cookie;
    if (cookie_string.length != 0) {
        var cookie_value = cookie_string.match('(^|;)[\s]*' + cookie_name + '=([^;]*)');
        return decodeURIComponent(cookie_value[2]);
    }
    return '';
};
/******************************************************************************************************************/
//La funcion "DeleteCookie", Realiza la eliminacion de una Cookie existente.
//@cookie_name      : Nombre de la Cookie.
//@valid_domain     : Validación del Dominio.
/******************************************************************************************************************/
LideratisHelper.DeleteCookie = function(cookie_name, valid_domain) {
    var domain_string = valid_domain ? ("; domain=" + valid_domain) : '';
    document.cookie = cookie_name + "=; max-age=0; path=/" + domain_string;
};
/******************************************************************************************************************/
//La funcion "GetParameter", Se encarga de obtener el valor de un parametro que se encuentra en la URL.
//@name      : Nombre del parametro.
/******************************************************************************************************************/
LideratisHelper.GetParameter = function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};
/******************************************************************************************************************/
//La funcion "AdicionarAtributos"
/******************************************************************************************************************/
LideratisHelper.AdicionarAtributos = function(attr) {};
/******************************************************************************************************************/
//La funcion "GetArrayAttributes", Se encarga de Ordenar los atributos con el caracter  "-_-", ademas de tomar el indice de la matriz.
//@array      : Arreglo de atributos.
/******************************************************************************************************************/
LideratisHelper.GetArrayAttributes = function(array) {
    var indexSize = LideratisHelper.GetArrayIndexHigher(array);
    arrayAttr = new Array();
    for (var i = 1; i <= indexSize; i++) {
        arrayAttr[i - 1] = (typeof array[i] !== "undefined") ? array[i] : "";
    }
    return arrayAttr.join("-_-");
};
/******************************************************************************************************************/
//La funcion "GetArrayIndexHigher", Obtiene el elemento del arreglo con el indice mayor.
//@array      : Arreglo de Atributos.
/******************************************************************************************************************/
LideratisHelper.GetArrayIndexHigher = function(array) {
    var indexFinal = -1;
    array.forEach(function(value, index) {
        console.log(index);
        if (indexFinal < index) {
            indexFinal = index;
        }
    });
    console.log(indexFinal);
    return indexFinal;
};
/******************************************************************************************************************/
//La funcion "URL", Se encarga de obtener los componentes de una URL
//@numero    : Posicion del componente.
//  0       => Protocolo
//  1       => Obtencion del dominio del sitio.
//  2       => Obtencion del Pathname de la web.
//  3       => Obtencion de la URL completa.
/******************************************************************************************************************/
LideratisHelper.URL = function(numero) {
    switch (numero) {
        case 0:
            return window.location.protocol
            break;
        case 1:
            return window.location.host
            break;
        case 2:
            return window.location.pathname
            break;
        case 3:
            return window.location.href
        default:
            return "-1"
    }
}
/******************************************************************************************************************/
//La funcion "LocationIndexVTEX", ubica el indice del atributo que queremos obtener, además de contener los datos necesarios parea el seguimiento
//@dataLayer   : Envia un arreglo que contiene los datos de una pagina.
//@textLayer   : Es el nombre del atributo del cual obtenemos el index.
//@type        : Es el atributo del cual se va a obtener el index.
/******************************************************************************************************************/
LideratisHelper.LocationIndexVTEX = function(dataLayer,textLayer,type){
    var posicion = -1;
    dataLayer.forEach(function(elem,ind) {
        var texto = "";
        if(type == 0){
            texto = elem.pageCategory;
        }else if(type == 1){
            texto = elem.event;
        }
        if (typeof(texto) != 'undefined' && texto != "") {
            if (texto.toString() == textLayer) {
                validaPosicion = true;
                posicion = parseInt(ind);
            }
        }
    });
    return posicion;
}
