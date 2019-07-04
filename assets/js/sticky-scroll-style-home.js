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

    // Tablet Home
    if (document.documentElement.scrollTop > 220) {
        if (!mTabletNav[0].classList.contains("scroll-top-home"))
            mTabletNav[0].classList.add("scroll-top-home");
    } else if (document.documentElement.scrollTop < 220) {
        if (mTabletNav[0].classList.contains("scroll-top-home"))
            mTabletNav[0].classList.remove("scroll-top-home");
    }
};