// Get array containing every element with class "project-description-frame"
let allProjects = document.querySelectorAll(".project-description-frame");

// Loop across each project element in the allProject array
for (let i = 0; i < allProjects.length; i += 1) {
  let thisProjectElement = allProjects[i];

  // Add event listener to shift the project description into the frame
  thisProjectElement.addEventListener("mouseenter", (e) => {
    console.log(e.currentTarget);
    e.currentTarget.children[1].classList.remove("content-hidden");
    //.classList.remove("content-hidden");
  });

  //Add event listener to shift the project description out of the frame
  thisProjectElement.addEventListener("mouseleave", (e) => {
    console.log(e.currentTarget);
    e.currentTarget.children[1].classList.add("content-hidden");
  });
}
