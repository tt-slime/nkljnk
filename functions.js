function mostrarModal() {
    document.getElementById('modal').style.display = 'block';
}

function fecharModal(event) {
    if (event.target === document.getElementById('modal') || event.target.classList.contains('close')) {
        document.getElementById('modal').style.display = 'none';
    }
}

document.getElementById('login-link').addEventListener('click', mostrarModal);





document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();
  
    function showSlides() {
      let slides = document.getElementsByClassName("slide_inicial");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 2500); // Muda de slide a cada 2 segundos
    }
  });

  
  