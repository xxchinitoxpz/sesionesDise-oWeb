$(document).ready(function () {
    //$('p').CSS('color','red');
    //Btn1
    $("#accion1").click(function () {
        //Getter
        console.log("accion1");
        console.log($('p').css('font-size'));
        //Setter
        $("p").css('color',' red');
    });
    /////////////////////
    //Btn2
    $("#accion2").click(function () {
        $("p").css('font-family',' Times New Roman');
        console.log("accion2");
        console.log($('p').css('font-family'));
    });
    //////////////////////
    //BTN3
    $("#accion3").click(function () {
        $("body").css('background-color','black');
        $("body").css('color','white');
        $("h1").css('color',' white');
        $("a").css('color',' white');
        $("div").css('background-color','black');
        $("ul").css('background-color','black');
        ////
        $(".integra li").css('color','white');
        $(".lista li").css({
            'color':' black',
            'background-color':'black'
        });
        //$("ul").css('background-color','black');
        $(".parrafo1").css('background-color','black');
        $(".conteiner-btns").css('background-color','black');
        $(".conteiner").css('background-color','black');
        $("p").css({
            'font-family':' Arial',
            'color':' white',
            'text-align': 'justify'
        });
    });
    ////
    $("#accion4").click(function () {
        $("li").css('color',' black');
        $(".cuerpo").css('background-color','white');
        /////
        $(".integra").css('color','black');
        $(".integra").css('background-color','antiquewhite');
        $(".gp4").css('background-color','antiquewhite');
        $(".gridCabeza").css('background-color','antiquewhite');
        $(".img").css('background-color','antiquewhite');
        //////
        $("body").css('color',' black');
        $("a").css('color',' black');
        $(".parrafo1").css('background-color','white');
        $(".conteiner-btns").css('background-color','white');
        $(".conteiner").css('background-color','white');
        $("ul").css('background-color','antiquewhite');
        $("body").css('background-color','white');
        $("h1").css('color',' black');
        $(".lista li").css({
            'color':' black',
            'background-color':'antiquewhite'
        });
        $("p").css({
            'font-family':' Arial',
            'color':' black',
            'text-align': 'left'
        });
    });

});
