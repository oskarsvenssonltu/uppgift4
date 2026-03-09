// Lägger till klassen "scrolled" när användaren scrollar ner på sidan.
// Används för att ändra navbaren från transparent till en bakgrundsfärg.

  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });