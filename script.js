

const toggleButton = document.querySelector('.menu-items-toggle');
const menuItemsList = document.querySelector('.menu-items-list');

toggleButton.addEventListener('click', () => {
    menuItemsList.classList.toggle('show');
});