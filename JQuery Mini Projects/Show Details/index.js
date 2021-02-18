var detailsSection = $("#item-details");
// $("body").height(window.innerHeight - 10);
$("#btn").on("click", function (event) {
  // grab the information

  var name = $("#name").val();
  var email = $("#email").val();
  var phoneNumber = $("#number").val();

  event.preventDefault();
  let item =
    '<div class="detail"><h3>' +
    name +
    "</h3> <h3>" +
    email +
    "</h3><h3>" +
    phoneNumber +
    "</h3></div>";
  detailsSection.append(item);
});
