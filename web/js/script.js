(function () {
    // var cx = '013847816764164610777:gqjz22fhera'; // henry
    var cx = '017879021595272184798:_cfyhvhsqp4'; // jiayi
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();

function countsearch()
        {
            var counter = parseInt(sessionStorage.getItem('counter'));
            counter +=1;
            $(".counter-area").text(counter);
            sessionStorage.setItem('counter', counter);
        };

$(document).ready(function () {
    if (sessionStorage.getItem('counter') == null){
        sessionStorage.setItem('counter', 0);
        $(".counter-area").text("Search away!");
    } else {
        var counter = parseInt(sessionStorage.getItem('counter'));
        $(".counter-area").text(counter);
    }
    $(window).click(function (e) {
        console.log(e.target);
        if (e.target.matches(".gsc-search-button")) {
            $(".gsc-search-button").on('click', countsearch());
        }
        if (e.target.matches("#menuButton") || e.target.matches(".bar1") || e.target.matches(".bar2") || e.target.matches(".bar3")) {
            $("#menuButton").toggleClass("change");
            $("#myDropdown").toggleClass("show");
        } else {
            $("#menuButton").removeClass("change");
            $("#myDropdown").removeClass("show");
        }
    });
});