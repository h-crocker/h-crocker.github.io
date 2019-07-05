let mDesktopNav = document.getElementsByClassName("desktop-top-nav");
let mTabletNav = document.getElementsByClassName("tablet-top-nav");
let mTabletHeader = document.getElementsByTagName("header");

window.onscroll = function () {
    // Desktop
    if (document.documentElement.scrollTop > 0) {
        mDesktopNav[0].classList.add("scroll-top");
    } else if (document.documentElement.scrollTop === 0) {
        mDesktopNav[0].classList.remove("scroll-top");
    }

    // Tablet
    if (document.documentElement.scrollTop > 65) {
        mTabletNav[0].classList.add("scroll-top");
    } else if (document.documentElement.scrollTop < 65) {
        mTabletNav[0].classList.remove("scroll-top");
    }

    // Home
    if (document.documentElement.scrollTop > 180) {
        mDesktopNav[0].classList.add("scroll-top-home");
        mTabletNav[0].classList.add("scroll-top-home");
        mTabletHeader[0].classList.add("scroll-top-home-header");
    } else if (document.documentElement.scrollTop < 180) {
        mDesktopNav[0].classList.remove("scroll-top-home");
        mTabletNav[0].classList.remove("scroll-top-home");
        mTabletHeader[0].classList.remove("scroll-top-home-header");
    }
};