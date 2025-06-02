document.addEventListener('DOMContentLoaded', function() {
    const forumForm = document.getElementById('forumForm');
    
    forumForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const topicInput = document.getElementById('forumTopic');
      const postInput = document.getElementById('forumPost');
      const topic = topicInput.value.trim();
      const post = postInput.value.trim();
      
      
      if (!topic || !post) {
        alert('Please fill in both topic and post fields');
        return;
      }
      document.getElementById("confirmationMessage").style.display = "block";
      
      // Reset form
      forumForm.reset();
      
    });
  });
  
function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('open');
}
