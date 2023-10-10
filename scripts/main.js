
// creating a repeatable function with diff target elements and durations (in ms) to reveal hidden text
document.addEventListener("DOMContentLoaded", function () {
function fadeInAfterTimeout(targetElementId, timeoutDuration) {
    const targetElement = document.getElementById(targetElementId);

    setTimeout(function () {
        targetElement.classList.add("visible");
    }, timeoutDuration);
}

// the time assignments for every hidden element across pages
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
fadeInAfterTimeout("benson-hidden1", 2500);
fadeInAfterTimeout("benson-hidden2", 11500);
fadeInAfterTimeout("benson-hidden3", 27000);
fadeInAfterTimeout("benson-hidden4", 40000);
fadeInAfterTimeout("benson-hidden5", 46000);
fadeInAfterTimeout("horn-hidden1", 7500);
fadeInAfterTimeout("horn-hidden2", 17500);
fadeInAfterTimeout("horn-hidden3", 29500);
fadeInAfterTimeout("horn-hidden4", 37000);
fadeInAfterTimeout("durutti-hidden1", 1000);
fadeInAfterTimeout("durutti-hidden2", 10000);
fadeInAfterTimeout("durutti-hidden3", 16000);
fadeInAfterTimeout("durutti-hidden4", 29000);
fadeInAfterTimeout("durutti-hidden5", 37000);
fadeInAfterTimeout("thomas-hidden1", 5000);
fadeInAfterTimeout("thomas-hidden2", 16000);
fadeInAfterTimeout("thomas-hidden3", 25000);
fadeInAfterTimeout("thomas-hidden4", 32000);
fadeInAfterTimeout("extremely-hidden1", 500);
fadeInAfterTimeout("extremely-hidden2", 6500);
fadeInAfterTimeout("extremely-hidden3", 16500);
fadeInAfterTimeout("extremely-hidden4", 24000);
fadeInAfterTimeout("extremely-hidden5", 33000);
fadeInAfterTimeout("extremely-hidden6", 40000);
});

// only autoplays the song after all content has loaded
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('background-song');
    audio.play();
});

// when user clicks to access the audio controls, this function hides the instructional text and replaces it with the audio controls
document.getElementById("fix").addEventListener("click", function(event) {
    event.preventDefault();
  
    const errorDiv = document.querySelector(".error");
    if (errorDiv) {
      errorDiv.style.display = "none";
    }
  
    const audioElement = document.getElementById("background-song");
    if (audioElement) {
      audioElement.controls = true;
    }

    audioElement.style.width = '100%';
  });
  
  // using an array of randomly assigned margins for paragraph elements on each page

  function assignRandomMargins() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(function(paragraph) {
        const randomMargin = Math.floor(Math.random() * 1601) - 800;
        paragraph.style.marginLeft = randomMargin + 'px';
    });
  }

  assignRandomMargins();