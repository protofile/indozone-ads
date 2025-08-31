$(document).ready(function(){
    $("a.has-dropdown").click(function(hd){
        hd.preventDefault();
        $(".dropdown").removeClass("show");
        $(".sub-dropdown").removeClass("show");
        $(this).addClass("active");
        $($(this).next()).addClass("show");
    });

    $(document).click(function (e) {
        // Check if click is NOT inside a dropdown or the link that opens it
        if (!$(e.target).closest('.dropdown, .has-dropdown').length) {
            $(".dropdown").removeClass("show");
            $(".sub-dropdown").removeClass("show");
            $("a.has-dropdown").removeClass("active");
        }
    });

    $("a.has-sub-dropdown").click(function(hsd){
        hsd.preventDefault();
        $(this).toggleClass("active");
        $($(this).next()).toggleClass("show");
    });


});