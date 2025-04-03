document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:puzzle.studio88@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

    window.location.href = mailtoLink;
  });

  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    // Alterna entre ☰ e ✖
    if (mobileMenu.classList.contains("hidden")) {
      menuBtn.textContent = "☰"; // Ícone de hambúrguer
    } else {
      menuBtn.textContent = "✖"; // Ícone de fechar
    }
  });
