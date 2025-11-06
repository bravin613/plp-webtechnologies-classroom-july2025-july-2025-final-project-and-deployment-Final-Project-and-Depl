document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      this.classList.add('active');
    });
  });
  
  // Add favorite button functionality
  const favoriteButtons = document.querySelectorAll('.property-favorite');
  favoriteButtons.forEach(button => {
    button.addEventListener('click', function() {
      const icon = this.querySelector('i');
      if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        this.style.color = '#ff4757';
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        this.style.color = '#374151';
      }
    });
  });
});
