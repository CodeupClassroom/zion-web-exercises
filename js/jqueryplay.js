"use strict";
$(document).ready(function() {

    $('#btn4').click(function() {
        console.log($('#panel4 .panel-heading').toggleClass("underlined"));
        console.log($('#panel4 .panel-body').toggleClass("highlighted"));
    });

    $('#btn1').click(function() {
        $('#panel1').toggleClass('hidden');
    });
});

