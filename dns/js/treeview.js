jQuery(document).ready(function () {
    $("#treeview .parent").click(function (e) {
        e.stopPropagation();
        $(this).find(">ul ").toggle("slow");
        if ($(this).hasClass("close"))
            $(this).removeClass("close");
        else
            $(this).addClass("close");
    });
})

jQuery(document).ready(function() {
    $('#treeview .parent li').click(function(e) {
        e.stopPropagation();
        $('#treeview .parent li ul li').removeClass('selected');
        $(this).addClass('selected');
    })
})

jQuery(document).ready(function() {
    $('input[type="checkbox"]').click(function(e) {
        e.stopPropagation();
    });
})
