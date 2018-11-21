(adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-6128386599502423",
    enable_page_level_ads: true
});

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

function countsearch(parent) {
    var prev = parent.prev();
    var input = prev.find("input");
    console.log(input.val().length)
    if (input.val().length !== 0) {
        var counter = parseInt(localStorage.getItem('counter'));
        counter += 1;
        $(".counter-area").text(counter);
        localStorage.setItem('counter', counter);
    }
}

$(document).ready(function () {
    if (localStorage.getItem('counter') === null) {
        localStorage.setItem('counter', 0);
        $(".counter-area").text("Search away!");
    } else {
        var counter = parseInt(localStorage.getItem('counter'));
        $(".counter-area").text(counter);
    }

    $(window).click(function (e) {
        if ($(e.target).is("svg")) {
            var parent = $(e.target).parent().parent();
            countsearch(parent);
        } else if (e.target.matches(".gsc-search-button")) {
            var parent = $(e.target).parent();
            countsearch(parent);
        } else if (e.target.matches("#menuButton") || e.target.matches(".bar1") || e.target.matches(".bar2") || e.target.matches(".bar3")) {
            $("#menuButton").toggleClass("change");
            $("#myDropdown").toggleClass("show");
        } else {
            $("#menuButton").removeClass("change");
            $("#myDropdown").removeClass("show");
        }
    });
});