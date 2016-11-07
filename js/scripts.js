// Business Logic //



// User Int Logic //
$(document).ready(function() {
  $("form#menu-form").submit(function(event) {
    event.preventDefault();

    $("#orders-list").append("<div class='order'>" + "<i class='glyphicon glyphicon-remove-sign'></i>" + "<li>" + "<ul>" + "</ul>" + "</li>" + "</div>")

    $("input:checked").each(function() {
      $("#orders-list ul").last().append("<li>" + $(this).parent().text() + "</li>")
    });

    $("i").click(function() {
      $(this).parent().remove();
    });

    $("input:checkbox").removeAttr("checked");
  });


});
