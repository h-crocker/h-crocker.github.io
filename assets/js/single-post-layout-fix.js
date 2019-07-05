let mPosts = document.getElementsByClassName("card");
let mPostList = document.getElementsByClassName("post-list");

if (mPosts.length === 1)
    mPostList[0].classList.add("single-post-hack");