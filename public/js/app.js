const sidebar = document.querySelector('nav');
const sidebarToggle = document.getElementById('menu-icon');
const menExpand = document.getElementById('men-expand');
const menMenu = document.getElementById('men-menu')
const womenExpand = document.getElementById('women-expand');
const womenMenu = document.getElementById('women-menu')

sidebarToggle.addEventListener('click', toggleSidebar);
menExpand.addEventListener('click', () => {
    toggleSidebarMenu('men')
});
womenExpand.addEventListener('click', () => {
    toggleSidebarMenu('women')
});

function toggleSidebar() {
    let status = sidebarToggle.ariaSelected;

    // console.log(status);

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

function toggleSidebarMenu(menu) {
    let menuElement;
    let menuToggle;

    if (menu === 'men') {
        menuElement = menMenu;
        menuToggle = menExpand;
    }
    else if (menu === 'women') {
        menuElement = womenMenu;
        menuToggle = womenExpand;
    }

    // what is the status of the menu
    let status = menuElement.ariaSelected;

    // console.log(`Toggling ${menuElement.id} and ${menuToggle.id}`)

    if (status === 'true') {
        menuElement.ariaSelected = 'false';
        menuToggle.classList.replace('fa-caret-down', 'fa-caret-up')
        // console.log('To status false')
    } else {
        menuElement.ariaSelected = 'true';
        menuToggle.classList.replace('fa-caret-up', 'fa-caret-down')
        // console.log('To status true')
    }
}
