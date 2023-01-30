const options = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: [0, 0.5, 1]
}

// Create the intersection observer
const observer = new IntersectionObserver(async (entries, ) => {
    // Check if the element is intersecting (visible)
    entries.forEach((element) => {
        if (element.isIntersecting) {
            // await new Promise(r => setTimeout(r, 2000));
            element.target.classList.add("show")
            console.log(element);
            console.log("Element is now visible!");
        } else {
            console.log(element);
            element.target.classList.remove("show")
            console.log("Element is no longer visible!");
        }
    })
}, options);

// Select the element to observe
const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((toObserve)=>{
    observer.observe(toObserve);
})
