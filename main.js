document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    const logo = document.getElementById('logo');
    const closeButton = document.getElementById('menu-close');
  
    toggleButton.addEventListener('click', () => {
      menu.classList.toggle('hidden'); 
      logo.classList.toggle('hidden'); 
    });
  
    closeButton.addEventListener('click', () => {
      menu.classList.add('hidden');    
      logo.classList.remove('hidden'); 
    });
  });