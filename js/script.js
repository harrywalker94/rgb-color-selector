$(document).ready(function () {
  //will display rgb value of selected panel in the reset panel
  $(".theButton").mouseenter(function () {
    var colorText = $(this).css("background-color");
    $(".superButton").text(colorText);
  });

  $("#btn").click(function () {
    // Single line Reset function executes on click of Reset Button
    $(".superButton").text("");
  });

  /* Button for copying the RGB Color */
  $(".theButton").click(function () {
    // Store the text you want to copy in variable
    var text = $(this).css("background-color");

    // Move the text to input tag to execute copy command
    var tempElement = $("<input>")
      .val(text)
      .appendTo("body")
      .select();
    document.execCommand("copy");
    tempElement.remove();

    alert("RGB Colour Copied");
  });

});
