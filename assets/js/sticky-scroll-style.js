let mDesktopNav = document.getElementsByClassName("desktop-top-nav");
let mTabletNav = document.getElementsByClassName("tablet-top-nav");

window.onscroll = function () {
    // Desktop
    if (document.documentElement.scrollTop > 0) {
        if (!mDesktopNav[0].classList.contains("scroll-top"))
            mDesktopNav[0].classList.add("scroll-top");
    } else if (document.documentElement.scrollTop === 0) {
        if (mDesktopNav[0].classList.contains("scroll-top"))
            mDesktopNav[0].classList.remove("scroll-top");
    }

    // Tablet
    if (document.documentElement.scrollTop > 70) {
        if (!mTabletNav[0].classList.contains("scroll-top"))
            mTabletNav[0].classList.add("scroll-top");
    } else if (document.documentElement.scrollTop < 70) {
        if (mTabletNav[0].classList.contains("scroll-top"))
            mTabletNav[0].classList.remove("scroll-top");
    }
};