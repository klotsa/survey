$(document).ready(function() {
  $("#survey").submit(function(event) {
    var nameInput = $("input#name").val();
    var favoriteFood = $("#food").val();
    var bestTeam = $("input:radio[name=team]:checked").val();
    var birthYear = $("#born").val();
    var bestColor = $("#color").val();

    $(".name").text(nameInput);
    $(".food").text(favoriteFood);
    $(".team").text(bestTeam);
    $(".born").text(birthYear);
    $(".color").text(bestColor);

    event.preventDefault();
  });
});
