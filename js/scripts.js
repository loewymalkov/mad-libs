$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var yournameInput = $("input#yourname").val();
    var friendsnameInput = $("input#friendsname").val();
    var yourpetInput= $("input#yourpet").val();
    var expressionInput = $("input#expression").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $(".yourname").text(yournameInput);
    $(".friendsname").text(friendsnameInput);
    $(".yourpet").text(yourpetInput);
    $(".expression").text(expressionInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});