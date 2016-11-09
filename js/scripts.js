function Customer(userName, guests, date) {
  this.userName = userName;
  this.guests = guests;
  this.date = date;
  this.pin = number(0,9) + number(0,9) + number(0,9) + number(0,9);
}

Customer.prototype.pinCheck = function() {
  if(this.pin === myPin) {
    alert("this works!");
  }
}

var number = function(min, max) {
  return digit = Math.floor(Math.random()*(max-min+1) + min).toString();
}

$(document).ready(function() {
  $("form#one").submit(function(event) {
    event.preventDefault();

    var inputUserName = $("#name input").val();
    var inputGuests = $("#guests select").val();
    var inputDate = $("#date input").val();
    var myTable = new Customer(inputUserName, inputGuests, inputDate);
    console.log(myTable);
    $("form#two").submit(function(event) {
      event.preventDefault();

      var myPin = $("#pin input").val();
      $("#submit-fix-pin").click(function(){
        myTable.pinCheck();
      });
    });
  });






  $("#register").click(function() {
    $("#landing").hide();
    $("#name").fadeIn(500);
  });

  $("#name .submit").click(function() {
      if($("#name input").val().length <= 2) {
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
    $("#date").hide();
    $("#landing").fadeIn(300);
  });

  $("#sign-in").click(function(){
    $("#landing").hide();
    $("#pin").show();
  });




});
