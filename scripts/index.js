document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const mobileNavbar = document.querySelector('.navbar__mobile');
  const button = document.querySelectorAll('.burguer');
  const mainContent = document.querySelector('.main-content');
  const mobileLinks = document.querySelectorAll('.mobile__links a');

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {
      navbar.classList.add('active');
    } else {
      navbar.classList.remove('active');
    }
  });

  button.forEach(btn => {
    btn.addEventListener('click', function() {
      mobileNavbar.classList.toggle('active');
      mainContent.classList.toggle('blurred');
    });
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileNavbar.classList.remove('active');
      mainContent.classList.remove('blurred');
    });
  });
});
