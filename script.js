document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const openMenuButton = document.getElementById('open-menu');
    const closeMenuButton = document.getElementById('close-menu');

    // Open the sidebar menu
    openMenuButton.addEventListener('click', () => {
        sidebar.classList.add('open');
        openMenuButton.style.display = 'none'; // Hide the open menu button
        closeMenuButton.style.display = 'block'; // Show the close menu button
    });

    // Close the sidebar menu
    closeMenuButton.addEventListener('click', () => {
        sidebar.classList.remove('open');
        closeMenuButton.style.display = 'none'; // Hide the close menu button
        openMenuButton.style.display = 'block'; // Show the open menu button
    });

    // Close the sidebar menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && !openMenuButton.contains(event.target) && !closeMenuButton.contains(event.target)) {
            sidebar.classList.remove('open');
            closeMenuButton.style.display = 'none'; // Hide the close menu button
            openMenuButton.style.display = 'block'; // Show the open menu button
        }
    });
});
