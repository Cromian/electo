
(function ($, jQuery) {
    $(document).ready(function () {
        $( "#menu" ).click(function() {
            $("#content").hide();
            $("#about").show();
            $(".overlay-bg").show();
        });

        $( ".ajax-link" ).on('click', function() {
            $(".overlay-bg").show();
            $("#content").show();
            $("#about").hide();
        });

        $( "#close" ).click(function() {
            $("#about").hide();
            $("#content").hide();
            $(".overlay-bg").hide();
        });
    });
})(jQuery);

// Get values
var searchTerm = document.getElementById('edit-keys').value;
document.getElementById('search-term-key').innerHTML = ": " + searchTerm; 


// Footer Dates
var d = new Date();
var n = d.getFullYear();
document.getElementById("ft-date").innerHTML = n;