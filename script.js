window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const blob = loader.querySelector('.blob');
  const grain = loader.querySelector('.grain');
  const vignette = loader.querySelector('.vignette');

  setTimeout(() => {
    blob.style.transition = 'opacity 3s ease';
    grain.style.transition = 'opacity 3s ease';
    vignette.style.transition = 'opacity 3s ease';

    blob.style.opacity = '0';
    grain.style.opacity = '0';
    vignette.style.opacity = '0';

    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.classList.remove('loading'); // ← unlock scrolling + height here
      setTimeout(() => loader.remove(), 700);
    }, 1200);

  }, 900);
});
