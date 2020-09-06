//search script
$(document).ready(function(){
    $("#topsearch").on("enterKey", function() {
        var value = $(this).val().toLowerCase();
        $("#container").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});