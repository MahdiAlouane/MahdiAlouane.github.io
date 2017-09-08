$(function() {
    $('.container .col-md-3 input').focus(function(){
        $(this).parents('.col-md-3').addClass('flash');
        setTimeout(function() {
            $(this).parents('.col-md-3').addClass('flash');
        }, 600);
    });
});