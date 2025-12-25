const API_URL = 'https://script.google.com/macros/s/AKfycbwawjoiWcjt8aVoXaO9vy5CjG9gSbjk6ipaQ0fzJPr608h74DT5Oq5_geRrMMJ64fGc/exec';

fetch(API_URL)
  .then(r => r.json())
  .then(data => {
    const tbl = document.getElementById('tbl');
    tbl.innerHTML =
      '<tr>' +
      Object.keys(data[0]).map(h => `<th>${h}</th>`).join('') +
      '<th>Actions</th></tr>';

    data.forEach(r => {
      tbl.innerHTML +=
        '<tr>' +
        Object.values(r).map(v => `<td>${v}</td>`).join('') +
        `<td>
          <button onclick="alert('Notes UI here')">Update</button>
          <button onclick="alert('Generate CV')">CV</button>
        </td></tr>`;
    });
  });
