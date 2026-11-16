// JCR Drones - shared information-panel interaction
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("moreInfoButton");
  const information = document.getElementById("moreInfoText");

  // These elements only appear on pages that use the information panel.
  if (!button || !information) return;

  // Keep each page's original button wording and icon for the closed state.
  const originalButtonContent = button.innerHTML;

  if (window.jQuery) {
    $("#moreInfoButton").on("click", function () {
      const isOpen = $("#moreInfoText").toggleClass("show").hasClass("show");
      $(this).attr("aria-expanded", isOpen);
      $(this).html(isOpen
        ? '<i class="fa-solid fa-circle-minus" aria-hidden="true"></i> Hide information'
        : originalButtonContent);
    });
  } else {
    // Vanilla JavaScript fallback if jQuery does not load.
    button.addEventListener("click", function () {
      const isOpen = information.classList.toggle("show");
      button.setAttribute("aria-expanded", String(isOpen));
      button.innerHTML = isOpen
        ? '<i class="fa-solid fa-circle-minus" aria-hidden="true"></i> Hide information'
        : originalButtonContent;
    });
  }
});
