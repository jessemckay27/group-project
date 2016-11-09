
// Business Logic //
function Customer(userName, guests, date) {
  this.userName = userName;
  this.guests = guests;
  this.date = date;
  this.pin = number(0,9) + number(0,9) + number(0,9) + number(0,9);
}

var number = function(min, max) {
  return digit = Math.floor(Math.random()*(max-min+1) + min).toString();
}

// User Int Logic //
$(document).ready(function() {
  var tableTotal = 0
  $("form#menu-form").submit(function(event) {
    event.preventDefault();

    $("#orders-list").append("<div class='order-item'>" + "<i class='glyphicon glyphicon-remove-sign'></i>" + "<li>" + $("input#order-name-input").val().toUpperCase() + "<ul>" + "</ul>" + "</li>" + "</div>");

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

  $("form#one").submit(function(event) {
    event.preventDefault();
    if ($("#date input").val().length === 10) {
      var inputUserName = $("#name input").val();
      var inputGuests = $("#guests select").val();
      var inputDate = $("#date input").val();

      var myTable = new Customer(inputUserName, inputGuests, inputDate);
    }
  });

  $("#submit-fix-pin").click(function(){
    $("#two").hide();
    $("#menu-page-row").fadeIn(300);
  });

  $("#register").click(function() {
    $("#landing").hide();
    $("#name").fadeIn(500);
  });

  $("#name .submit").click(function() {
      if($("#name input").val().length < 2) {
        $(this).addClass("error-warning");
      } else {
        $("#name").hide();
        $("#guests").fadeIn(300);
      }
    });

  $("#guests .submit").click(function() {
    $("#guests").hide();
    $("#date").fadeIn(300);
  });

  $("#date button").click(function() {
    if($("#date input").val().length !== 10) {
      $("#date button").addClass("error-warning");
    } else {
      $("#date").hide();
      $("#landing").fadeIn(300);
    }
  });

  $("#sign-in").click(function(){
    $("#landing").hide();
    $("#row1").hide();
    $("#menu-page-row").fadeIn(300);
  });

});
