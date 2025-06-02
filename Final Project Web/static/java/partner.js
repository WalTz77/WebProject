document.getElementById("partnerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("confirmationMessage").style.display = "block";
    this.reset();
  });
  
  function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');
  }
  