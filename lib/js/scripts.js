var month_text = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var $country = "US";
var $days = 17;
var $date = "2008/01/16";
var $month = 1;
var $year = "2008";
var counter = 0;
/* FOR HOLIDAY API CONNECTION */
var $url = "https://holidayapi.com/v1/holidays?key=0d8bb7b1-ca3e-4294-a357-5476b747d713";
var parameters = '&country=' + $country + '&year=' + $year + '&month=' + $month;
/*---------------------------*/


var month_text = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var $country = "US";
var $days = 17;
var $date = "2008/01/16";
var $month = 1;
var $year = "2008";
var counter = 0;
/* FOR HOLIDAY API CONNECTION */
var $url = "https://holidayapi.com/v1/holidays?key=0d8bb7b1-ca3e-4294-a357-5476b747d713";
var $parameters = '&country=' + $country + '&year=' + $year + '&month=' + $month;
/*---------------------------*/

function paintData() {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': ($url + $parameters),
        'dataType': "json",
        'success': function(data) {
            json = data;
        }

    });
    for (i = 0; i < json.holidays.length; i++) {
        $("ul.output2").append('<li>' + json.holidays[i].name + " " + json.holidays[i].date + '</li>');
        console.log(json);
    }
}
var getData = (function() {
    paintData();
    $country = $('#country').val();
    if ($country == "") {
        $country = "US";
    }
    $date = $('#date').val();
    if ($date == "") {
        $month = 8;
    } else {
        $month = parseInt($date.substr(5, 2));
        $year = parseInt($date.substr(0, 4));
    }
    $month = parseInt($date.substr(5, 2));
    $year = parseInt($date.substr(0, 4));
    $days = $('#days').val();

    $parameters = '&country=' + $country + '&year=' + $year + '&month=' + $month;
    $("p.output").html("<b>The API call is this: </b>" + $url + $parameters + " " + "<br/> <b>The select Date is: </b>" + $date + "<br/> <b>Country Code: </b>" + $country + "<br/> <b>Days: </b>" + $days);
    $("a.month").html(month_text[$month - 1]);
    return $date, $country, $days, $parameters, $year;

});