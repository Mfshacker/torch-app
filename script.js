const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
  // Calculate random positions within the browser window
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  
  // Apply the new position
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
