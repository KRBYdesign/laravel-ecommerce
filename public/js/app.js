const sidebar = document.querySelector('nav');
const sidebarToggle = document.getElementById('menu-icon');
const menExpand = document.getElementById('men-expand');
const menMenu = document.getElementById('men-menu')
const womenExpand = document.getElementById('women-expand');
const womenMenu = document.getElementById('women-menu');
const headerLogo = document.querySelector('.app-logo[alt="Header Logo"]');

// handle clicks on the header logo -> home page
headerLogo.addEventListener('click', () => {
    console.log('clicked the home logo');
    window.location.href = '/';
})

// expand the sidebar
sidebarToggle.addEventListener('click', toggleSidebar);

// handle clicks on the sidebar drop down elements
// don't navigate to a new page if the user clicked on the expand icon
document.getElementById('men-link').addEventListener('click', (click) => {
    let menLocation = menExpand.getBoundingClientRect();

    if (!isMouseEventInElement(click, menLocation)) {
        window.location.href = "/shop/men"
    }


});
document.getElementById('women-link').addEventListener('click', (click) => {
    if (!isMouseEventInElement(click, womenExpand.getBoundingClientRect())) {
         window.location.href = '/shop/women';
    }
});

// handle the clicks on the expand icons to expand the drop-down menus
menExpand.addEventListener('click', () => {
    toggleSidebarMenu('men');
});
womenExpand.addEventListener('click', () => {
    toggleSidebarMenu('women');
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

function isMouseEventInElement(event, elementLocation) {
    if (event.x < elementLocation.left || event.x > elementLocation.right || event.y < elementLocation.top || event.y > elementLocation.bottom) {
        return false;
    }

    return true;
}
