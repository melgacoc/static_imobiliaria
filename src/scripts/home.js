const verBtn = document.getElementById('ver-btn');

const renderSelect = async () => {
  verBtn.addEventListener('click', () => {
    window.location.href = '../application/details.html';
  });
}

renderSelect();
