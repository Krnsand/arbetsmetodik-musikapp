const spellistor = [];

document
  .getElementById('spellistaForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const namn = document.getElementById('namn').value.trim();
    const genre = document.getElementById('genre').value.trim();
    const artist = document.getElementById('artist').value.trim();
    const låtar = document.getElementById('låtar').value.trim().split(',');

    skapaSpellista(namn, genre, artist, låtar);
    visaSpellistor();
    this.reset();
  });

function skapaSpellista(namn, genre, artist, låtar) {
  const spellista = {
    namn,
    genre,
    artist,
    låtar: låtar.map((låt) => låt.trim()),
  };
  spellistor.push(spellista);
}

function visaSpellistor() {
  const container = document.getElementById('spellistaContainer');
  container.innerHTML = '';

  spellistor.forEach((s, i) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${i + 1}. ${s.namn}</h3>
      <p><strong>Genre:</strong> ${s.genre}</p>
      <p><strong>Artist:</strong> ${s.artist}</p>
      <p><strong>Låtar:</strong> ${s.låtar.join(', ')}</p>
      <hr>
    `;
    container.appendChild(div);
  });
}
