let $createPost = document.querySelector(".btn"),
    $closePost = document.querySelector(".form-post-close__btn"),
    $formPost = document.querySelector(".form-post"),
    $editOptions = document.querySelector(".content__buttons"),
    $editBtn = document.querySelector(".ellipsis");

$createPost.addEventListener("click", () => {
    $formPost.classList.add("form-post--active");
})
$closePost.addEventListener("click", () => {
    $formPost.classList.remove("form-post--active");
})
$editBtn.addEventListener("click", () => {
    $editOptions.classList.add("content__buttons--active");
    setTimeout(() => {
        $editOptions.classList.remove("content__buttons--active");
    }, 5000)

})

/* $editBtn.addEventListener("click", () => {
    $editOptions.classList.remove("content__buttons--active");
})
 */