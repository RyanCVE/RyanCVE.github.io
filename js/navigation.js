// Navigation functionality for the enhanced CV website

function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    const allMenus = document.querySelectorAll('.dropdown-menu');
    
    // Close all other menus
    allMenus.forEach(m => {
        if (m.id !== menuId) {
            m.style.display = 'none';
        }
    });
    
    // Toggle the clicked menu
    if (menu) {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
}

function navigateTo(page) {
    window.location.href = page;
}

function goHome() {
    window.location.href = 'index.html';
}

// Close menus when clicking outside
document.addEventListener('click', function(event) {
    const menuBar = document.querySelector('.menu-bar');
    if (menuBar && !menuBar.contains(event.target)) {
        const allMenus = document.querySelectorAll('.dropdown-menu');
        allMenus.forEach(menu => {
            menu.style.display = 'none';
        });
    }
});

// Prevent menu from closing when clicking inside dropdown
document.addEventListener('click', function(event) {
    if (event.target.closest('.dropdown-menu')) {
        event.stopPropagation();
    }
});

