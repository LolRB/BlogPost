// Dark/Ligth Mode EventListener
document.addEventListener('DOMContentLoaded', () => {
    const modeButton = document.querySelector('.mode-button');
    modeButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  })

  