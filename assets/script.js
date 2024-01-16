const slides = [
	{
		image: "./assets/images/slideshow/slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
	    image : "./assets/images/slideshow/slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image : "./assets/images/slideshow/slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image: "./assets/images/slideshow/slide4.jpg",
	    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
];

document.addEventListener("DOMContentLoaded", function() {
	const banner = document.getElementById("banner");
	const bannerImages = document.querySelectorAll(".banner-img");
	const arrowLeft = document.getElementById("arrowLeft");
	const arrowRight = document.getElementById("arrowRight");
	const dots = document.querySelectorAll(".dot");
	const tagline = document.querySelector(".tagline p");
	let currentIndex = 0;
  
  // Fonction pour afficher l'image correspondant à l'index donné
  function showImage(index) {
    // Masquer toutes les images
    bannerImages.forEach(function(image) {
      image.style.display = "none";
    });

    // Afficher l'image correspondant à l'index
    bannerImages[index].style.display = "block";

    // Mettre à jour la classe des points
    dots.forEach(function(dot, dotIndex) {
      dot.classList.remove("dot_selected");
      if (dotIndex === index) {
        dot.classList.add("dot_selected");
      }
    });

    // Mettre à jour la tagline
    tagline.innerHTML = slides[index].tagLine;
  }

  // Gestionnaire d'événement pour la flèche gauche
  arrowLeft.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + bannerImages.length) % bannerImages.length;
    showImage(currentIndex);
  });

  // Gestionnaire d'événement pour la flèche droite
  arrowRight.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % bannerImages.length;
    showImage(currentIndex);
  });

  // Gestionnaire d'événement pour les points
  dots.forEach(function(dot, dotIndex) {
    dot.addEventListener("click", function() {
      currentIndex = dotIndex;
      showImage(currentIndex);
    });
  });

  // Afficher la première image au chargement de la page
  showImage(currentIndex);
});

