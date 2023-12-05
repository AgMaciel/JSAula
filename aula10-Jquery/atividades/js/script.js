$("#btnCalcular").on("click", function(){
    let numeroEscolhido = $("#numeroEscolhido").val();
    let resultadoHtml = "";

    for (let i = 0; i <= 10; i++){
        resultadoHtml += `${i} x ${numeroEscolhido} = ${i * numeroEscolhido} <br>`;
    }

    // Define o conteúdo do elemento #numero com a string gerada
    $("#numero").html(resultadoHtml);
});


var btnTema = $('#trocaTema');
var body = $('body');

btnTema.on('click', function(){
    if(btnTema.hasClass('temaClaro')){
        btnTema.removeClass('temaClaro');
        btnTema.addClass('temaEscuro');
        btnTema.text("TEMA CLARO");

        body.removeClass('temaClaro');
        body.addClass('temaEscuro');
    } else {
        btnTema.removeClass('temaEscuro');
        btnTema.addClass('temaClaro');
        btnTema.text("TEMA ESCURO");

        body.removeClass('temaEscuro');
        body.addClass('temaClaro');
    }
});