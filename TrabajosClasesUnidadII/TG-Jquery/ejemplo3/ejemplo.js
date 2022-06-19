function zoom(){
    var thumb = document.getElementById('thumb');
    if(thumb.getAttribute("width")=="200"){ 
 
     thumb.setAttribute("width", "500");
     thumb.style.transition = "400ms all ease";
 
    }else{
     thumb.setAttribute("width", "200");
    }
   } 
   
   $(document).ready(function () {
   
    $("#accion1").click(function(){
        $("img").css("width", "500");
        $("img").css("transition", "400ms all ease");
   });

    $("#accion2").click(function(){
        $("img").css("width", "200");
        $("img").css("transition", "400ms all ease");
   });
});