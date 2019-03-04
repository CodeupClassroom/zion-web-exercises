"use strict";
$(document).ready(function() {

    $("#btn1").click(function() {
        $("#panel1").delay(minutesToMilliseconds(1)).toggle(5000);
    });
    $("#btn2").click(function() {
        $("#panel2").fadeToggle(500);
    });
    $("#btn3").click(function() {
        $("#panel3").slideToggle(500);
    });
    $("#btn4").click(function() {
        if($('#panel1').is(":visible")) {
            console.log("It's visible!");
        } else {
            console.log("It's NOT visible")
        }
        $("#panel1").delay(1000).toggle(1000);
        if($('#panel2').is(":visible")) {
            console.log("It's visible!");
        } else {
            console.log("It's NOT visible")
        }
        $("#panel2").fadeToggle(500);
        if($('#panel3').is(":visible")) {
            console.log("It's visible!");
        } else {
            console.log("It's NOT visible")
        }
        $("#panel3").slideToggle(500);
        $("#panel4").delay(500).slideToggle(500);
    });

});

function minutesToMilliseconds(minutes) {
    return minutes*60*1000;
}