// Business Logic //



// User Int Logic //
$(document).ready(function() {
  var tableTotal = 0
  $("form#menu-form").submit(function(event) {
    event.preventDefault();

    $("#orders-list").append("<div class='order'>" + "<i class='glyphicon glyphicon-remove-sign'></i>" + "<li>" + $("input#order-name-input").val().toUpperCase() + "<ul>" + "</ul>" + "</li>" + "</div>");

    $("input:checked").each(function() {
      $("#orders-list ul").last().append("<li>" + $(this).parent().text() + "</li>");
      tableTotal += parseInt($(this).val());
    });

    $("i").click(function() {
      $(this).parent().remove();
    });

    $("input:checkbox").prop("checked", false);
    $("input#order-name-input").val("")
    $("#submit-orders-button").show();
  });

  $("#submit-orders-button").click(function() {
    $("#order-confirmation-list").append($("#orders-list").children());
    $("span#table-total").empty();
    $("span#table-total").append(tableTotal);
    $("i").remove();
    $("#menu-page-row").slideUp(function() {
      $("#submit-orders-button").hide();
    });
    $("#order-confirmation-row").slideDown();
  });

  $("#order-more-button").click(function() {
    $("#order-confirmation-row").slideUp(function() {
      $("#menu-page-row").slideDown();
    });

  });

});
