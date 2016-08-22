$(document).ready(function(){
    $('form').submit(function(){
        var first_name = $('input[name="first_name"]').val();
        var last_name = $('input[name="last_name"]').val();
        var description = $('textarea').val();
        var name_string = "<h3>";
        name_string += first_name +" " + last_name;
        name_string += "</h3>";
        var desc_string = "<p>"+ description + "</p>";
        var contact_string = "<div class ='contact' info ='";
        contact_string += desc_string + "' >" + name_string +"</div>";
        $('#contacts').append(contact_string)
        return false;
    })
    $(document).on('click','.contact',swapInfo)

});

function swapInfo (){
    console.log("clicked")
    var temp = $(this).html();
    $(this).html($(this).attr('info'));
    $(this).attr('info',temp);
}
