// jQuery Date Picker

$(function () {
  $("#datepicker").datepicker();
});

var nextBtn = $("#next-btn");
var prevBtn = $("#prev-btn");
var nextClicked = false;
var prevClicked = false;
$("#btn").on("click", function (event) {
  event.preventDefault();
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
        var array = result.photos;

        if (array.length == 0) {
          alert("No Photos available for this Date");
        } else {
          if (array.length > 10) {
            var pageArrayLength = 10;
            for (let i = 0; i < pageArrayLength; i++) {
              let imageUrl = array[i].img_src;
              let image = $(document.createElement("img"));
              image.attr("src", imageUrl);
              image.attr("class", "my-image");
              image.appendTo("#nasa-images");
            }
            // console.log(pageArrayLength);
            // console.log(array.length);
          }

          nextBtn.on("click", function () {
            nextClicked = true;

            $("#nasa-images").empty();
            var prevPageLength = pageArrayLength;
            // if (prevClicked) {
            //   pageArrayLength = pageArrayLength + 10;
            //   // prev
            //   prevClicked = false;
            // }
            if (pageArrayLength + 10 <= array.length) {
              pageArrayLength = pageArrayLength + 10;
              displayNextImages(prevPageLength, pageArrayLength, array);
            } else {
              pageArrayLength = array.length - pageArrayLength;
              displayNextImages(prevPageLength, pageArrayLength, array);
            }
          });

          prevBtn.on("click", function () {
            prevClicked = true;
            $("#nasa-images").empty();
            var nextPageLength = pageArrayLength;
            if (nextClicked) {
              // this is a HACK don't know why I need this.
              pageArrayLength = pageArrayLength - 10;
              nextClicked = false;
            }

            if (pageArrayLength - 10 >= 0) {
              pageArrayLength = pageArrayLength - 10;

              displayPrevImages(nextPageLength, pageArrayLength, array);
            } else {
              alert("Ruk ja besharam kahatam hogyi Images");
            }
          });

          // console.log(array.length);
        }
      },
    }).fail(function () {
      alert("Request to Nasa has been failed.");
    });
  }
});

var displayNextImages = (prevPageLength, pageArrayLength, array) => {
  for (let i = prevPageLength; i < pageArrayLength; i++) {
    console.log("coming" + prevPageLength);
    let imageUrl = array[i].img_src;
    let image = $(document.createElement("img"));
    image.attr("src", imageUrl);
    image.attr("class", "my-image");
    image.appendTo("#nasa-images");
  }
};

var displayPrevImages = (nextPageLength, pageArrayLength, array) => {
  console.log(nextPageLength);
  console.log(pageArrayLength);
  // console.log(array);
  for (let i = pageArrayLength; i < nextPageLength; i++) {
    console.log("coming" + pageArrayLength);
    let imageUrl = array[i].img_src;
    let image = $(document.createElement("img"));
    image.attr("src", imageUrl);
    image.attr("class", "my-image");
    image.appendTo("#nasa-images");
  }
};
