$(function () { // document ready function
    function displayNumberTrivia() {
        var num = parseInt($("#input-number").val());
        var my_url = "//numbersapi.com/" + num;
        my_url = my_url + "/trivia?notfound=floor&fragment";

        $.get(my_url, function (data) {
            $("#number-answer").css("display","block");
            $(".show-number").html(`${num} is `);
            $(".show-text").text(data);
        });
    };
    function displayDateTrivia() {
        var myMonth = parseInt($("#nameMonth").val());
        var myDay = parseInt($("#nameDay").val());
        if ((myMonth === 2) && (myDay > 29)) {
            /* Feb has max 29 days */
            swal({
                title: 'February does not have more than 29 days!',
                text: 'Please enter date correctly',
                type: 'error',
                confirmButtonText: 'Ok',
                onClose: function () {
                    return;
                }
            })
        } else if (((myMonth === 4) || (myMonth === 6) || (myMonth === 9) || (myMonth === 11)) && (myDay > 30)) {
            /* Months like Apr, June, etc have only 30 days, so error message is displayed */
            swal({
                title: 'This month does not have more than 30 days!',
                text: 'Please enter date correctly',
                type: 'error',
                confirmButtonText: 'Ok',
                onClose: function () {
                    return;
                }
            })
        }
        else { /* for all other months */
            var my_url = "//numbersapi.com/" + myMonth;
            my_url = my_url + "/" + myDay;

            my_url = my_url + "/date?notfound=floor&fragment";

            $.get(my_url, function (data) {
                $("#date-answer").css("display","block");
                $(".show-date").html(`On ${myDay}/${myMonth}, `);
                $(".show-fact").text(data);

            });
        }
    };
    function displayYearTrivia() {
        var myYear = parseInt($("#nameYear").val());
        var my_url = "//numbersapi.com/" + myYear;
        my_url = my_url + "/year?notfound=floor&fragment";
        $.get(my_url, function (data) {
            $("#year-answer").css("display","block");
            $(".show-year").html(`Year ${myYear} `);
            $(".show-fact-year").text(data);
        });
    };
    $("#button-number-enter").on("click", function () {
        displayNumberTrivia();
    });
    $("#button-date-enter").on("click", function () {
        displayDateTrivia();
    });
    $("#button-year-enter").on("click", function () {
        displayYearTrivia();
    });
});  
