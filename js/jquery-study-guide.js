"use strict"
$(document).ready(function(){
    $("body").css("padding", "2em");

    $("#blue-button").click(function(){
        $("ul").css("color", "blue");
    });

    $("#bold-button").dblclick(function(){
        $(".make-bold").css("font-weight", "bold");
    });

    //attaching multiple event handlers to one id
    $("#mouse-event").on({
        mouseenter: function(){
            $(this).css("background-color", "black").css("color", "white");
        },
        mouseleave: function(){
            $(this).css("background-color", "lightblue").css("color", "black");
        }
    });

    $("#toggle-para").click(function(){
        $(".toggled").toggle();
    });

    console.log($(".toggled").text());
    console.log($("#w3s").attr("href"));
    console.log($("#get-html").html());

    $("#change1").click(function(){
        $(this).text("This has been changed");
    });

    $("#change2").click(function(){
        $(this).html("<strong>Change this HTML</strong>")
    });

    $("#change3").click(function(){
        $(this).val("Goodbye");
    });

    $("img").hover(function(){
        $(this).attr("src", "img/pineapple.svg");
    });

    $("#refresh").click(function(){
        location.reload(true);
    });

    $("#add-remove").click(function(){
        $("#change-class").toggleClass("d-none");
    });

    console.log($(".styled").css("color"));

    $(".styled2").css({"color":"darkblue", "font-size":"18px"});


});