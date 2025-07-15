// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Generate content (sample text for now)
document.getElementById("generate-btn").addEventListener("click", function () {
  const topic = document.getElementById("input-topic").value;
  const tone = document.getElementById("tone").value;
  const time = document.getElementById("time-limit").value;

  const generated = `Here's a ${tone.toLowerCase()} content about "${topic}" generated in ${time} as a demo. You can replace this with real AI output.`;

  document.getElementById("output").value = generated;
});

// Reset input and output
document.getElementById("reset-btn").addEventListener("click", function () {
  document.getElementById("input-topic").value = "";
  document.getElementById("tone").selectedIndex = 0;
  document.getElementById("time-limit").selectedIndex = 0;
  document.getElementById("output").value = "";
});
