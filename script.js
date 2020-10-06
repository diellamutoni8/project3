$("document").ready(function() {

    $("#design-img").click(function() {
        $("#design-img").toggle();
        $("#design-desc").toggle();
    });

    $("#design-desc").click(function() {
        $("#design-img").toggle();
        $("#design-desc").toggle();
    });

    $("#development-img").click(function() {
        $("#development-img").toggle();
        $("#development-desc").toggle();
    });

    $("#development-desc").click(function() {
        $("#development-img").toggle();
        $("#development-desc").toggle();
    });

    $("#product-management").click(function() {
        $("#product-management").toggle();
        $("#product-desc").toggle();
    });

    $("#product-desc").click(function() {
        $("#product-management").toggle();
        $("#product-desc").toggle();
    });

    $("#porto1").hover(function(){
        $("#porto1-name").addClass("porto-title-show")
        $("div#porto1").addClass("porto-section")
    },
    function(){
        $("#porto1-name").removeClass("porto-title-show")
        $("div#porto1").removeClass("porto-section")
    });

    $("#porto2").hover(function(){
        $("#porto2-name").addClass("porto-title-show")
        $("div#porto2").addClass("porto-section")
    },
    function(){
        $("#porto2-name").removeClass("porto-title-show")
        $("div#porto2").removeClass("porto-section")
    });

    $("#porto3").hover(function(){
        $("#porto3-name").addClass("porto-title-show")
        $("div#porto3").addClass("porto-section")
    },
    function(){
        $("#porto3-name").removeClass("porto-title-show")
        $("div#porto3").removeClass("porto-section")
    });

    $("#porto4").hover(function(){
        $("#porto4-name").addClass("porto-title-show")
        $("div#porto4").addClass("porto-section")
    },
    function(){
        $("#porto4-name").removeClass("porto-title-show")
        $("div#porto4").removeClass("porto-section")
    });

    $("#porto5").hover(function(){
        $("#porto5-name").addClass("porto-title-show")
        $("div#porto5").addClass("porto-section")
    },
    function(){
        $("#porto5-name").removeClass("porto-title-show")
        $("div#porto5").removeClass("porto-section")
    });

    $("#porto6").hover(function(){
        $("#porto6-name").addClass("porto-title-show")
        $("div#porto6").addClass("porto-section")
    },
    function(){
        $("#porto6-name").removeClass("porto-title-show")
        $("div#porto6").removeClass("porto-section")
    });

    $("#porto7").hover(function(){
        $("#porto7-name").addClass("porto-title-show")
        $("div#porto7").addClass("porto-section")
    },
    function(){
        $("#porto7-name").removeClass("porto-title-show")
        $("div#porto7").removeClass("porto-section")
    });

    $("#porto8").hover(function(){
        $("#porto8-name").addClass("porto-title-show")
        $("div#porto8").addClass("porto-section")
    },
    function(){
        $("#porto8-name").removeClass("porto-title-show")
        $("div#porto8").removeClass("porto-section")
    });
})