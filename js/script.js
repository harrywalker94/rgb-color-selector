$(document).ready(function () {
  /* Button for copying the RGB Color */
  $(".theButton").click(function () {
    // Store the text you want to copy in variable
    var text = $(this).css("background-color");
    $("#rgbPaste").val(text);

    var rgb = text;
    var hexConversion =
      "#" +
      rgb
        .substr(4, rgb.indexOf(")") - 4)
        .split(",")
        .map(color => parseInt(color).toString(16))
        .join("");

    console.log(hexConversion);
    $("#hexConvert").val(hexConversion);
  });

});

function copyRGB() {
  /* Get the text field */
  var copyText = document.getElementById("rgbPaste");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("RGB: " + copyText.value + " Copied!");
}

function copyHex() {
  /* Get the text field */
  var copyText = document.getElementById("hexConvert");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("HEX: " + copyText.value + " Copied!");
}
