const imageSelected = document.querySelectorAll(".image");
const lightboxImage = document.querySelector(".image-selected");
const lightbox = document.querySelector(".lightbox");
const lightboxClose = document.querySelector(".lightbox-close");

document.addEventListener("click", (event) => {
    if (event.target.getAttribute("class").includes("ref")) {
        const dataSrcForImageSelected = event.target.getAttribute("data-src");
        lightboxImage.setAttribute("src", dataSrcForImageSelected);
        lightbox.style.display = "block";
    } else {
        lightbox.style.display = "none";
    }
});



