$(document).ready(function() {
  $("#survey").submit(function(event) {
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);

    $("#letterOutput").show();

    event.preventDefault();
  });
});
