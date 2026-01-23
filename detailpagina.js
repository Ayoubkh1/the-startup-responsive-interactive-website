document.addEventListener("DOMContentLoaded", function () {

  // 1) Element selecteren
  let favoriteButton = document.querySelector('.favorite-button');

  // 2) Event koppelen
  favoriteButton.addEventListener('click', function () {
    // 3) Feedback tonen
    favoriteButton.classList.toggle('is-liked');
  });

});