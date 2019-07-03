const mDesktopNav = document.getElementsByClassName("desktop-top-nav");
const mTabletNav = document.getElementsByClassName("tablet-top-nav");

window.onscroll = function () {
    // Desktop
    if (document.documentElement.scrollTop > 0) {
        if (!mDesktopNav[0].classList.contains("scroll-box-shadow"))
            mDesktopNav[0].classList.add("scroll-box-shadow");
    } else if (document.documentElement.scrollTop === 0) {
        if (mDesktopNav[0].classList.contains("scroll-box-shadow"))
            mDesktopNav[0].classList.remove("scroll-box-shadow");
    }

    // Tablet
    if (document.documentElement.scrollTop > 80) {
        if (!mTabletNav[0].classList.contains("scroll-box-shadow"))
            mTabletNav[0].classList.add("scroll-box-shadow");
    } else if (document.documentElement.scrollTop < 80) {
        if (mTabletNav[0].classList.contains("scroll-box-shadow"))
            mTabletNav[0].classList.remove("scroll-box-shadow");
    }
};