// Hacktoberfest Popup
document.addEventListener("DOMContentLoaded", function() {
  var popup = document.getElementById("popup");
  var yesButton = document.getElementById("yesButton");
  var noButton = document.getElementById("noButton");

  yesButton.addEventListener("click", function() {
      // Redirect to the Hacktoberfest repository
      window.location.href = "https://github.com/GauravMKedia/animation-collections";
  });

  noButton.addEventListener("click", function() {
      // Close the popup
      popup.style.display = "none";
      // Enable interactions with the website
      enableWebsiteInteractions();
  });

  // Disable interactions with the website until Yes or No is clicked
  disableWebsiteInteractions();

  // Show the popup when the page loads
  popup.style.display = "block";
});

function disableWebsiteInteractions() {
  // Add CSS to disable interactions with the website
  document.body.style.pointerEvents = "none";
  popup.style.pointerEvents = "auto";
}

function enableWebsiteInteractions() {
  // Remove the CSS to enable interactions with the website
  document.body.style.pointerEvents = "auto";
}
