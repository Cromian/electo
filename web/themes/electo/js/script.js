
(function ($, jQuery) {
    $(document).ready(function () {
        $( "#menu" ).click(function() {
            $("#about").show();
        });
        $( "#close" ).click(function() {
            $("#about").hide();
        });
    });
})(jQuery);

// Get values
var searchTerm = document.getElementById('edit-keys').value;
document.getElementById('search-term-key').innerHTML = ": " + searchTerm; 