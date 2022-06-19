var t=18;

$(document).ready(function(){
    $("#boton").on("click",function(){
	    
        $("#parrafo").css("color", "#000000");
        $("#parrafo").css("font-size", t+"px");
        t=t+5;
        
        
    });
});




$(document).ready(function(){
    $("#ta").on("click",function(){
	    
        $("#parrafo").css("font-size", "18px");
        
        t=18;
        
    });
});
$(document).ready(function(){
    $("#iz").on("click",function(){
	    $("#caja").css("float", "left");
        
    });
});
$(document).ready(function(){
    $("#de").on("click",function(){
	    $("#caja").css("float", "right");
        
    });
});
$(document).ready(function(){
    $("#or").on("click",function(){
	    $("#caja").css("float", "none");
        
    });
});