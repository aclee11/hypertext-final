
// creating a repeatable function with diff target elements and durations (in ms) to reveal hidden text
document.addEventListener("DOMContentLoaded", function () {
function fadeInAfterTimeout(targetElementId, timeoutDuration) {
    const targetElement = document.getElementById(targetElementId);

    setTimeout(function () {
        targetElement.classList.add("visible");
    }, timeoutDuration);
}

fadeInAfterTimeout("hidden-element1", 1500);
fadeInAfterTimeout("hidden-element2", 3000);
fadeInAfterTimeout("hidden-element3", 4500);
fadeInAfterTimeout("hidden-element4", 6000);
fadeInAfterTimeout("hidden-element5", 7500);
fadeInAfterTimeout("hidden-element6", 11000);
fadeInAfterTimeout("hidden-element7", 12500);
fadeInAfterTimeout("hidden-element8", 14000);
fadeInAfterTimeout("hidden-element9", 15500);
fadeInAfterTimeout("hidden-element10", 17000);
fadeInAfterTimeout("hidden-element11", 18500);
fadeInAfterTimeout("upper-right", 20000);
});
