$(document).ready(function() {

    var $monPayment = 0;
    var $principal = 0;
    var $interestRate = 0;
    var $term = 0;

    function calPayment(principal, rate, term) {
        var n = term * 12;
        var i = (rate / 100) / 12;
        payment = principal * ((i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1));
        return payment.toFixed(2);
    }

    $("#submit").click(function() {
        $principal = $("#prin").val();
        $interestRate = $("#rate").val();
        $term = $("#term").val();
        $monPayment = calPayment($principal, $interestRate, $term);
        $("#result").text(" $ " + $monPayment);

    })

})
