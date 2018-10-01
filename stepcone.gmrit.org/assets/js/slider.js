$(window).load( function() {
    
    $('#myslideshow1').smoothSlides({
        effectDuration: 3500
    });
    
    $('xmp').click(function(){
        var saveContent = $(this).html();
        $("body").append("<input type='text' id='temp' style=''>");
        $("#temp").val(saveContent).select();
        document.execCommand("copy");
        $("#temp").remove();
        $("body").append('<div class="message">Copied To Clipboard</div>');
        $(".message").slideDown();
        setTimeout(function(){
            $(".message").slideUp(function(){
                $(this).remove();
            });
        }, 1000)
    });
    
});