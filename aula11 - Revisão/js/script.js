var duracao = 60000;

$("btnPlay").on("click", function(){
    $(".progress-bar").animate({widht : "100%"}, {duration: duracao})
})