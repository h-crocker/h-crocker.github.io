let mProjects = document.getElementsByClassName("project-card");
let mProjectsList = document.getElementsByClassName("project-list");

if (mProjects.length == 1)
    mProjectsList[0].classList.add("max-1-projects");

if (mProjects.length == 2)
    mProjectsList[0].classList.add("max-2-projects");

if (mProjects.length === 3)
    mProjectsList[0].classList.add("max-3-projects");