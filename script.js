const jobCards = document.querySelectorAll(".job-card");
const showAllButton = document.getElementById("showAllButton");

jobCards.forEach(function (card) {
  const details = card.querySelector(".job-details");
  const collapseButton = card.querySelector(".collapse-button");
  const expandButton = card.querySelector(".expand-button");
  const hideButton = card.querySelector(".hide-button");

  collapseButton.addEventListener("click", function () {
    details.hidden = true;
  });

  expandButton.addEventListener("click", function () {
    details.hidden = false;
  });

  hideButton.addEventListener("click", function () {
    card.hidden = true;
  });
});

showAllButton.addEventListener("click", function () {
  jobCards.forEach(function (card) {
    card.hidden = false;
  });
});
