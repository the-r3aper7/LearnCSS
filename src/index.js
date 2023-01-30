// Create the intersection observer
const observer = new IntersectionObserver(async (entries, ) => {
    // Check if the element is intersecting (visible)
    entries.forEach((element) => {
        if (element.isIntersecting) {
            // await new Promise(r => setTimeout(r, 2000));
            element.target.classList.add("show")
        } else {
            element.target.classList.remove("show")
        }
    })
});

// Select the element to observe
const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((toObserve)=>{
    observer.observe(toObserve);
})
