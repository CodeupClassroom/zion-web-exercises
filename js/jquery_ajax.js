"use strict";

$().ready(function() {

    var url = "https://swapi.co/api/people/";
    var planeturl = "https://swapi.co/api/planets/";
    // for (var i = 1; i < 88; i++) {
    //     var response = $.ajax(url + i + '/');
    //     response.done(function(data, status, res) {
    //         console.log(data.url + ' = ' + data.name );
    //     });
    //     response.fail(function (req, status, error) {
    //         console.log(req);
    //     });
    //     response.always(function() {
    //         console.log(i);
    //     })
    // }
    $('#btn1').click(function(){
        var input = $('#input').val();
        var response = $.ajax(url + input);
        response.done(function (data) {
            $('#panel1 .panel-heading').html(data.name);
            console.log(data);
            $('#hair').html(
                "hair color: " + data.hair_color);
            var planetreq = $.ajax(data.homeworld);
            planetreq.done(function (data2) {
                $('#home').html(

                    "homeworld: " + data2.name
                );
            })

        });

    })
    //
    // var response = $.ajax(url + '20');
    //
    // response.done(function (data, status, req) {
    //     console.log(data.name);
    //     console.log(status);
    //     console.log(req);
    // });
    //
    // response.fail(function () {
    //     console.error("This is not the response you are looking for")
    // });
    // console.log(response.responseJSON.name);


})