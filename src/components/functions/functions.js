var Functions = [];
Functions.verificarFaixa = function(min, max, value){
    var retorno;
    retorno = value > max ? false : true;
    retorno = value < min ? false : true;
    return retorno;
}

Functions.ajustarDatasVetor = function(vetor){
    vetor.forEach(function(e, i){
        e.date_hour = (new Date(e.date_hour)).toLocaleString('pt-BR',{})
    });
    return vetor;
}

Functions.ismobile = function(){
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    return isMobile.any();
}
export default Functions;