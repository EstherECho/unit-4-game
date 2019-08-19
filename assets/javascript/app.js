var targetNumber = "";

function renderTargetNumber() {
    targetNumber = "";
    targetNumber = Math.floor(Math.random() * 101) + 19;
    $("#number-to-guess").text(targetNumber);
};
renderTargetNumber();

var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var wins = 0;
var losses = 0;
var score = 0;

var imageCrystal1 = $("<img>");
var imageCrystal2 = $("<img>");
var imageCrystal3 = $("<img>");
var imageCrystal4 = $("<img>");

function renderCrystalValue() {
    crystalValue = "";
    crystalValue = Math.ceil(Math.random() * 12);
};

function newCrystalValue() {
    renderCrystalValue();
    imageCrystal1.attr("data-crystalValue", crystalValue);
    renderCrystalValue();
    imageCrystal2.attr("data-crystalValue", crystalValue);
    renderCrystalValue();
    imageCrystal3.attr("data-crystalValue", crystalValue);
    renderCrystalValue();
    imageCrystal4.attr("data-crystalValue", crystalValue);
}

function valueCrystals() {
    imageCrystal1 = $("<img>");
    imageCrystal1.addClass("crystal-image");
    imageCrystal1.attr("src", "https://media.gettyimages.com/photos/crystal-and-metal-picture-id94922745?s=2048x2048");
    renderCrystalValue();
    imageCrystal1.attr("data-crystalValue", crystalValue);
    $("#crystals").append(imageCrystal1);

    imageCrystal2 = $("<img>");
    imageCrystal2.addClass("crystal-image");
    imageCrystal2.attr("src", "https://media.gettyimages.com/photos/amethyst-crystals-picture-id184119870?s=2048x2048");
    renderCrystalValue();
    imageCrystal2.attr("data-crystalValue", crystalValue);
    $("#crystals").append(imageCrystal2);

    imageCrystal3 = $("<img>");
    imageCrystal3.addClass("crystal-image");
    imageCrystal3.attr("src", "https://glyphwork.files.wordpress.com/2013/12/quartz1.jpg");
    renderCrystalValue();
    imageCrystal3.attr("data-crystalValue", crystalValue);
    $("#crystals").append(imageCrystal3);

    imageCrystal4 = $("<img>");
    imageCrystal4.addClass("crystal-image");
    imageCrystal4.attr("src", "https://www.thoughtco.com/thmb/JVS3w-aBpRK3zdCdnFe9n81sCa0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/close-up-of-quartz-crystals-with-pink-sault-651473419-5ac7e32b30371300378c15d7.jpg");
    renderCrystalValue();
    imageCrystal4.attr("data-crystalValue", crystalValue);
    $("#crystals").append(imageCrystal4);
};
valueCrystals();

$(".crystal-image").on("click", function () {

    var crystalValue = ($(this).attr("data-crystalValue"));

    crystalValue = parseInt(crystalValue);

    score += crystalValue;

    if (score === targetNumber) {
        wins++;
        $("#wins").empty();
        $("#wins").append(wins);
        renderTargetNumber();
        score = 0;
        newCrystalValue();
    } else if (score >= targetNumber) {
        losses++;
        $("#losses").empty();
        $("#losses").append(losses);
        renderTargetNumber();
        score = 0;
        newCrystalValue();
    }

    $("#score").empty();
    $("#score").append(score);
});