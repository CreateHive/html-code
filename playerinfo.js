const searchInput = document.getElementById('player-search');
const playerInfo = document.getElementById('player-info');

searchInput.addEventListener('input', (event) => {
  const playerName = event.target.value;

  fetch(`/api/players/${playerName}`)
    .then(response => response.json())
    .then(data => {
      if (data) {
        playerInfo.innerHTML = `
          <h2>${data.name}</h2>
          <img src="${data.headImage}" alt="Player Head">
          <p>Online: ${data.online ? 'Yes' : 'No'}</p>
          <p>Claim Blocks: ${data.claimBlocks}</p>
          <p>Playtime: ${data.playtime}</p>
          <p>Last Seen: ${data.lastSeen}</p>
        `;
      } else {
        playerInfo.innerHTML = 'Player not found';
      }
    })
    .catch(error => {
      console.error('Error fetching player data:', error);
      playerInfo.innerHTML = 'An error occurred';
    });
});
