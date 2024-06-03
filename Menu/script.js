document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const itemName = this.getAttribute('data-name');
            const itemPrice = this.getAttribute('data-price');
            const menuItemDisplay = document.getElementById('menuItemDisplay');
            const menuItemImg = document.getElementById('menuItemImg');
            const menuItemDescription = document.getElementById('menuItemDescription');

            // Set the menu item image (assuming you have images for each menu item)
            menuItemImg.src = 'Images/' + itemName + '.jpg';
            // Set the menu item description
            menuItemDescription.textContent = itemName.toUpperCase() + ' (' + itemPrice + ')';
            
            // Display the menu item details
            menuItemDisplay.style.display = 'block';
        });
    });

    // Hide the menu item details when clicking outside of it
    document.addEventListener('click', function(event) {
        const menuItemDisplay = document.getElementById('menuItemDisplay');
        const menuSection = document.getElementById('menu');
        if (!menuSection.contains(event.target)) {
            menuItemDisplay.style.display = 'none';
        }
    });
});
