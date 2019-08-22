
var correctAns = ["Psychedelic Furs", "Blaine", "Andie", "Phil", "Andrew Dice Clay", "bicycle", "1986", "John Hughes", "Harry Dean Stanton", "Howard Deutch"]
var correctCount = 0;

$("#submitBtn").on("click", function () {
    if ($("input:checked").length !== 10) {
        alert("Please answer all questions");
        return
    };

    var ansPicked = $("input:checked")

    for (let i = 0; i < ansPicked.length; i++) {
        if (ansPicked[i].value === correctAns[i]) {
            correctCount++;
        };
    };

    $(".card-title").text(correctCount * 10 + "%");
    $("#qAndA").hide(750);
    $(".card").show(500);


});