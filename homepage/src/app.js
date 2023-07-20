var slider;
var sliderFlag = false;
var breakpoint = 751;

function sliderSet() {
  var windowWidth = window.innerWidth;
  if (windowWidth >= breakpoint && !sliderFlag) {
    slider = $(".slider").bxSlider({
      touchEnabled: false,
      mode: "vertical",
      controls: false,
      auto: "true",
      pager: false,
    });
    sliderFlag = true;
  } else if (windowWidth < breakpoint && sliderFlag) {
    slider.destroySlider();
    sliderFlag = false;
  }
}

$(window).on("load", function () {
  sliderSet();
});

$(window).on("resize", function () {
  if (slider) {
    slider.destroySlider();
    sliderFlag = false;
  }
  sliderSet();
});

var haloInstance;

function initializeHalo() {
  if (haloInstance) {
    haloInstance.destroy();
  }

  var options = {
    el: "#haloBlock",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: window.innerHeight,
    minWidth: window.innerWidth,
    amplitudeFactor: 1,
    size: 0.7,
    baseColor: 0xffffff,
    baseColorSpread: 0,
    backgroundColor: 0x1c1344,
  };

  haloInstance = VANTA.HALO(options);
}

window.addEventListener("resize", function () {
  if (haloInstance) {
    haloInstance.resize();
  }
});

initializeHalo();

$("#mouseControls").change(function () {
  var isChecked = $(this).is(":checked");
  haloInstance.setOptions({ mouseControls: isChecked });
});

$("#touchControls").change(function () {
  var isChecked = $(this).is(":checked");
  haloInstance.setOptions({ touchControls: isChecked });
});

$("#gyroControls").change(function () {
  var isChecked = $(this).is(":checked");
  haloInstance.setOptions({ gyroControls: isChecked });
});

$("#amplitudeFactor").on("input", function () {
  var value = parseFloat($(this).val());
  var adjustedValue = Math.pow(value, 1.5);
  haloInstance.setOptions({ amplitudeFactor: adjustedValue});
});

$("#size").on("input", function () {
  var value = parseFloat($(this).val());
  haloInstance.setOptions({ size: value });
});

$("#color").on("input", function () {
  var colorHex = $(this).val();
  var colorRGB = parseInt(colorHex.replace("#", "0x"));
  haloInstance.setOptions({ baseColor: colorRGB });
});
$("#background").on("input", function () {
  var colorHex = $(this).val();
  var colorRGB = parseInt(colorHex.replace("#", "0x"));
  haloInstance.setOptions({ backgroundColor: colorRGB });
});
$("#saveButton").click(function () {
  html2canvas(document.body).then(function (canvas) {
    var link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "screenshot.png";
    link.click();
  });
});
html2canvas(document.body).then(function(canvas) {
  document.body.appendChild(canvas);
});