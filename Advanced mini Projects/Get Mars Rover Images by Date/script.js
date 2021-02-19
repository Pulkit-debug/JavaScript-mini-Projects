// jQuery Date Picker

$(function () {
  $("#datepicker").datepicker();
});

// var gotImages = false;
$("#btn").on("click", function () {
  $("#nasa-images").empty();
  var dateValue = $("#datepicker").val();

  dateValue = dateValue.toString();
  if (dateValue.length > 3) {
    let month = dateValue.slice(0, 2);
    let date = dateValue.slice(3, 5);
    let year = dateValue.slice(6);
    dateValue = year + "-" + month + "-" + date;
    console.log(dateValue);

    $.ajax({
      url:
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" +
        dateValue +
        "&api_key=uFcWi3BfdmLe7zy9HAY9COGe6IAL1ktMIIed55ur",
      method: "GET",
      success: function (result) {
        let array = result.photos;

        for (let i = 0; i < array.length; i++) {
          let imageUrl = array[i].img_src;
          let image = $(document.createElement("img"));
          image.attr("src", imageUrl);
          image.attr("class", "my-image");
          image.appendTo("#nasa-images");
        }
      },
    });
  }
});
