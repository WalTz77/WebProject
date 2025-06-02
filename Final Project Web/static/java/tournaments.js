 // Example tournament data
 const tournaments = [
    { date: '2025-05-10', time: '18:00', prize: '$500', rank: 'Gold', id: 1 },
    { date: '2025-05-15', time: '20:00', prize: '$1000', rank: 'Platinum', id: 2 },
    { date: '2025-06-01', time: '17:00', prize: '$250', rank: 'Silver', id: 3 },
  ];

  const tableBody = document.getElementById('tournament-table-body');

  tournaments.forEach(tournament => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${tournament.date}</td>
      <td>${tournament.time}</td>
      <td>${tournament.prize}</td>
      <td>${tournament.rank}</td>
      <td><button class="join-btn" onclick="joinTournament(${tournament.id})">Join</button></td>
    `;

    tableBody.appendChild(row);
  });

  function joinTournament(id) {
    alert(`You have joined tournament #${id}!`);
    
  }

  function joinTournament(id) {
    
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      document.body.appendChild(toastContainer);
    }
  
    // Create the toast message
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.innerText = `Successfully joined tournament #${id}!`;
  
    toastContainer.appendChild(toast);
  
    // Animate in
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
  
    // Animate out and remove
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 500);
    }, 3000);
  
    // disable join btn
    const joinBtn = document.querySelector(`button[onclick="joinTournament(${id})"]`);
    if (joinBtn) {
      joinBtn.disabled = true;
      joinBtn.innerText = 'Joined';
      joinBtn.classList.add('joined-button');
    }
  }
  

  function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');
  }
  