var caixa = $("#caixa");

$("#animacao1").on('click', function(){
    caixa.animate({width: "500px", height: "500px", borderRadius: "50%"});
});

$("#animacao2").on('click', function(){
    caixa.animate({width: "300px", height: "300px", backgroundColor: "red", borderRadius: "0%"})
        .animate({marginLeft: "200px"});
          
});

$("#animacao3").on('click', function(){
    caixa.animate({marginTop: "300px", marginRight: "100px", rotate: "360deg"},{duration : 1000, complete : () => {alert("Se o cao tiver depreção, animação")}})  
        .animate({marginLeft: "200px"});
        
});
$("#animacao4").on('click', function(){
    caixa.animate({margin: "0px", rotate: "0deg"});
          
});

$("#animacao5").on('click', function(){
    //caixa.fadeout(1000);
    caixa.slideUp(1000);
    //caixa.hide(2000);          
});

$("#animacao6").on('click', function(){
    //caixa.fadeoIn(1000);
    caixa.slideDown(1000);
    //caixa.show(1000);  
});

$("#animacao7").on('click', function(){
    //caixa.fadeoIn(1000);
    caixa.fadeToggle(1000);
    //caixa.show(1000);  
});

$("#animacao8").on('click', function(){
    caixa.css("transition", "1s");
    caixa.css("backgroundColor", "red");
    $("#teste").attr("placeholder","Isso é um input bacana");
    $("img").attr("src","https://media.istockphoto.com/id/1064058098/pt/foto/puppy-boston-terrier.jpg?s=1024x1024&w=is&k=20&c=U0py4-gKhRoapZvKRIbaeo_X8QW2oEn5podCSYP-BjM=");
    $("img").attr("width", "500px");
  
});



