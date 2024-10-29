const sidebar = document.querySelector('nav');
const sidebarToggle = document.getElementById('menu-icon');

sidebarToggle.addEventListener('click', toggleSidebar);

function toggleSidebar() {
    let status = sidebarToggle.ariaSelected;

    console.log(status);

    if (status === 'true') {
        // close the sidebar
        sidebar.ariaSelected = 'false';
        sidebarToggle.ariaSelected = 'false';
    }
    else {
        // open the sidebar
        sidebar.ariaSelected = 'true';
        sidebarToggle.ariaSelected = 'true';
    }
}
