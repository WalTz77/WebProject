document.addEventListener("DOMContentLoaded", () => {
  const createForm = document.getElementById("createAccountForm");
  const successMessage = document.getElementById("successMessage");

  if (!createForm) {
    console.error("Form not found!");
    return;
  }

  createForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const specialChars = "@#$%";

    if (password.length < 8) {
      alert("Password must be at least 8 characters long!");
      return;
    }

    const containsSpecial = [...specialChars].some(char => password.includes(char));
    if (!containsSpecial) {
      alert("Password must contain at least one special character (@, #, $, %)!");
      return;
    }

    if (!email || !phone || !username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Creating account with:");
    console.log({ email, phone, username, password });

    // Show the success message
    successMessage.style.display = "block";

    //  After a few seconds, redirect to homepage
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000); // 2 seconds delay
  });
});
