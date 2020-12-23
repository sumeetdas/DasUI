function onLoad () {
    const navItems = document.getElementsByTagName("nav-items")[0];

    const navToggles = document.getElementsByTagName("nav-toggle");

    for (let i = 0; i < navToggles.length; i++) {
        navToggles[i].addEventListener("click", e => {
            navItems.classList.toggle("show");
        });
    }

    const navMenuHeaders = document.getElementsByTagName("nav-menu-header");

    for (let i = 0; i < navMenuHeaders.length; i++) {
        // children contains just the DOM elements
        const headerAnchorTag = navMenuHeaders[i].children[0];
        headerAnchorTag.addEventListener("click", e => {
            // parent chain: a => nav-menu-header => nav-menu
            e.target.parentElement.parentElement.querySelector("nav-menu-items").classList.toggle("hide");
        });
    }

    const navItem = document.getElementsByTagName("nav-item");
}

document.addEventListener("DOMContentLoaded", e => {
    onLoad();
})