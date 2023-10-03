
// creating a repeatable function with diff target elements and durations (in ms) to reveal hidden text
document.addEventListener("DOMContentLoaded", function () {
function fadeInAfterTimeout(targetElementId, timeoutDuration) {
    const targetElement = document.getElementById(targetElementId);

    setTimeout(function () {
        targetElement.classList.add("visible");
    }, timeoutDuration);
}

fadeInAfterTimeout("hidden-element1", 500);
fadeInAfterTimeout("hidden-element2", 3000);
fadeInAfterTimeout("hidden-element3", 6000);
fadeInAfterTimeout("hidden-element4", 7500);
fadeInAfterTimeout("hidden-element5", 9000);
fadeInAfterTimeout("upper-right", 10000);
fadeInAfterTimeout("outer", 12000);
fadeInAfterTimeout("air-hidden1", 2000);
fadeInAfterTimeout("air-hidden2", 10000);
fadeInAfterTimeout("air-hidden3", 20000);
fadeInAfterTimeout("air-hidden4", 25000);
fadeInAfterTimeout("air-hidden5", 37000);
});

document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('background-song');
    audio.play();
});
