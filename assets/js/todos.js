// check off specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});
// click on X to delete
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
// Adding new todo
$("input[type='text']").keypress(function (event) { 
    if(event.which === 13){
        //grab then value of new text input
       var todoText = $(this).val();
       $(this).val("");
       //add it to the list
       $("ul").append("<li><span><i class='fa fa-trash'></span> " + todoText + "</li>")
    }
    
});
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();

});
