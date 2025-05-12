const playlists = [];

document
  .getElementById('playlistForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const genre = document.getElementById('genre').value.trim();
    const artist = document.getElementById('artist').value.trim();
    const songs = document.getElementById('songs').value.trim().split(',');

    createPlaylist(name, genre, artist, songs);
    displayPlaylists();
    this.reset();
  });

function createPlaylist(name, genre, artist, songs) {
  const playlist = {
    name,
    genre,
    artist,
    songs: songs.map((song) => song.trim()),
  };
  playlists.push(playlist);
}

function displayPlaylists() {
  const container = document.getElementById('playlistContainer');
  container.innerHTML = '';

  playlists.forEach((p, i) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${i + 1}. ${p.name}</h3>
      <p><strong>Genre:</strong> ${p.genre}</p>
      <p><strong>Artist:</strong> ${p.artist}</p>
      <p><strong>Songs:</strong> ${p.songs.join(', ')}</p>
      <hr>
    `;
    container.appendChild(div);
  });
}
