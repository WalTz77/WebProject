// Handle login modal
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");

loginBtn.onclick = () => loginModal.classList.remove("hidden");
closeModal.onclick = () => loginModal.classList.add("hidden");
window.onclick = e => {
  if (e.target === loginModal) loginModal.classList.add("hidden");
};

function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('open');
}
