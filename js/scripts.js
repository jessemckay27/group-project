function Customer(userName, guests, date) {
  this.userName = userName;
  this.guests = guests;
  this.date = date;
  this.pin = number(0,9) + number(0,9) + number(0,9) + number(0,9);
}

Customer.prototype.checkValue = function() {

}

var number = function(min, max) {
  return digit = Math.floor(Math.random()*(max-min+1) + min).toString();
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputUserName = $("#name input").val();
    var inputGuests = $("#guests select").val();
    var inputDate = $("#date input").val();
    var myTable = new Customer(inputUserName, inputGuests, inputDate);

  });

  $("#name div").click(function() {
      if($("#name input").val().length <= 2) {
        alert("Please enter a name")
      } else {
        $("#name").hide();
        $("#guests").show();
      }

  });
});
