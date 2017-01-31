window.submit_Enviar = function() {};
window.submit_Click = function() {};
$(document).ready(function() {
    // Registro de Usuarios
    // variable que almacena la ubicacion de la etiqueta del botón dentro del html.
    var vNomBtnRegistroCorreo = 'input.wong-button';

    $(document).on("click", vNomBtnRegistroCorreo, function() {
        var vChecked = $('#CL_isNewsletterOptIn').prop('checked');
        var vCantError = $('input.error').length;
        if (vChecked == true && vCantError == 0) {
            /* Declaracion de variables para almacenar datos de Registro - Tag Registration*/
            var vProfileID = $('#CL_email').val();
            var vProfileEmail = $('#CL_email').val();
            var vCountry = 'Perú';

            var dataRegistration = new Array();
            //Datos del Tag Regitration.
            dataRegistration['profileID'] = vProfileID;
            dataRegistration['profileEmail'] = vProfileEmail;
            dataRegistration['country'] = vCountry;
            digitalData = new LideratisLibrary.RegistrationTag(dataRegistration);
            window.submit_Enviar();
        }
    });

    //Registro de Click - Redes Sociales
    var vBtnRedesSociales = '.contenedor_sociales .content-sociales-home div, .contenedor_sociales .content_sociales div';
    $(document).on('click', vBtnRedesSociales, function() {
        /* Declaracion de variables para almacenar datos de Element - Tag Element*/
        var vComponentID = 'Footer - redes sociales' + window.GLSEPARADOR + window.SUFIJO;
        var vPrimaryCategory = ((window.IDENTIFIER == 'inicio') ? 'informativo' : window.IDENTIFIER);
        var vExploreAttributes = new Array();
        /* Atributos
        Attr1 : Tipo de Red Social.
        */
        vExploreAttributes[1] = $(this).attr('class');
        //Datos del Tag Element.
        var dataElement = new Array();
        dataElement['componentID'] = vComponentID;
        dataElement['primaryCategory'] = vPrimaryCategory;
        dataElement['exploreAttributes'] = LideratisHelper.GetArrayAttributes(vExploreAttributes);
        digitalData = new LideratisLibrary.ElementTag(dataElement);
        window.submit_Click();

    });

});
