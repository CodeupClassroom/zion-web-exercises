"use strict";

$().ready(function() {

    var url = "https://swapi.co/api/people/";


    function onSuccess(data, status, req) {
        $('#panel1').css('opacity', 0.5);
        $('#panel1').removeClass('panel-danger').addClass('panel-primary');
        $('#panel1 .panel-heading').html(data.name);
        // console.log(data);
        $('#hair').html(
            "hair color: " + data.hair_color);
        var planetreq = $.ajax(data.homeworld);
        planetreq.done(function (data2) {
            $('#home').html(
                "homeworld: " + data2.name
            );
        })

    }

    function onFail(req, status, error) {
        $('#panel1').css('opacity', 0.5);
        $('#panel1').removeClass('panel-primary').addClass('panel-danger');
        $('#panel1 .panel-heading').html("Error!!");
        $('#hair').html("These are not the droids you are looking for");
        $('#home').html('');

    }

    function cleanup() {
        $('#panel1').css('opacity', 1);

    }


    $('#btn1').click(function(){
        var input = $('#input').val();
        var response = $.ajax(url + input);
        response.done(onSuccess).fail(onFail).always(cleanup);

    })


})