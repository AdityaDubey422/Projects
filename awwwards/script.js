window.addEventListener("load", () => {
  document.body.classList.add("loaded"); // Add a class to make content visible
});

// Select the track and duplicate its contents (client logo infinite slider)
const logoTrack = document.querySelector(".list");
const logos = logoTrack.innerHTML; // Get the current logos
logoTrack.innerHTML += logos; // Duplicate the logos for seamless scrolling

// smooth scrolling(locomotive js)
const scroll = new LocomotiveScroll({
  el: document.querySelector("#home"),
  smooth: true,
});

window.addEventListener("load", () => {
  scroll.update(); // Update Locomotive Scroll
});

// gsap

// circle attached to cursor
function circleMouseFollower() {
  const miniCircle = document.querySelector("#mini-circle");

  let xprevious = null;
  let yprevious = null;

  // Calculate the size of the circle once (assuming it’s constant)
  const circleSize = 11;

  window.addEventListener("mousemove", (details) => {
    miniCircle.style.display = "block";

    let xskew = 0;
    let yskew = 0;

    // Calculate skew based on cursor movement
    if (xprevious !== null && yprevious !== null) {
      const xdiff = details.clientX - xprevious;
      const ydiff = details.clientY - yprevious;

      // Normalize the skew values and limit them
      xskew = gsap.utils.clamp(-0.3, 0.3, xdiff / 100); // Horizontal skew
      yskew = gsap.utils.clamp(-0.3, 0.3, ydiff / 100); // Vertical skew
    }

    // Center the circle on the cursor by subtracting half its size
    const offsetX = details.clientX - circleSize / 2;
    const offsetY = details.clientY - circleSize / 2;

    // Update the position and skew of the circle
    miniCircle.style.transform = `translate(${offsetX}px, ${offsetY}px) skew(${xskew}rad, ${yskew}rad)`;

    // Update previous cursor positions
    xprevious = details.clientX;
    yprevious = details.clientY;

    // Reset skew after movement stops
    clearTimeout(window._resetSkewTimer);
    window._resetSkewTimer = setTimeout(() => {
      miniCircle.style.transform = `translate(${offsetX}px, ${offsetY}px) skew(0rad, 0rad)`;
    }, 100); // Adjust the duration if needed
  });

  // Hide the circle when the mouse leaves the window
  window.addEventListener("mouseout", (event) => {
    if (
      event.relatedTarget === null ||
      event.relatedTarget?.nodeName === "HTML"
    ) {
      miniCircle.style.display = "none";
    }
  });
}
circleMouseFollower();

// text animation on page load
function firstpageAnimation() {
  var tl = gsap.timeline();
  tl.to("header", {
    y: 0,
    opacity: 1,
    ease: "power1.inOut",
    duration: 1,
  });

  tl.to(
    ".hero-heading h1",
    {
      y: 0,
      opacity: 1,
      ease: "power1.inOut",
      duration: 1,
    },
    "-=0.5"
  );

  tl.to(
    ".hero-heading p",
    {
      y: 0,
      opacity: 1,
      ease: "power1.inOut",
      duration: 0.5,
    },
    "-=0.3"
  );

  tl.to(
    ".availability p",
    {
      y: 0,
      opacity: 1,
      ease: "power1.inOut",
      duration: 0.5,
    },
    "-=0.3"
  );

  tl.to(
    ".bottom-navigation",
    {
      opacity: 1,
      ease: "power1.inOut",
      duration: 0.5,
    },
    "-=0.2"
  );
}
firstpageAnimation();

Array.from(document.querySelectorAll(".works-list > ul > li> a")).forEach(
  (work) => {
    const workImage = work.querySelector("img");
    let xprevious = null;
    let stopTimeout;
    work.addEventListener("mouseenter", (details) => {
      gsap.to(workImage, {
        duration: 0.4,
        opacity: 1,
        ease: "power1",
        top:
          details.clientY - work.getBoundingClientRect().top + window.scrollY,
        left: details.clientX - work.getBoundingClientRect().left,
      });
    });
    work.addEventListener("mousemove", (details) => {
      let rotationAmount = 0; // Variable to store the rotation amount

      // Check the cursor direction
      if (details.clientX > xprevious) {
        // Moving from left to right
        rotationAmount = 10; // Rotate clockwise by 10 degrees
      } else if (details.clientX < xprevious) {
        // Moving from right to left
        rotationAmount = -10; // Rotate anticlockwise by 10 degrees
      }

      // Set the rotation and position of the image (keep it centered on cursor)
      gsap.to(workImage, {
        duration: 0.4,
        opacity: 1,
        ease: "power1",
        top:
          details.clientY - work.getBoundingClientRect().top + window.scrollY,
        left: details.clientX - work.getBoundingClientRect().left,
        rotation: rotationAmount, // Apply the rotation based on direction
      });

      // Store the current cursor position for the next move
      xprevious = details.clientX;

      clearTimeout(stopTimeout);

      // After a delay, reset the rotation to 0 when the cursor stops moving
      stopTimeout = setTimeout(() => {
        gsap.to(workImage, {
          duration: 0.4,
          rotation: 0, // Reset rotation to 0 degrees after the cursor stops
          ease: "power1",
        });
      }, 100); // Wait for 100ms before resetting the rotation (you can adjust this delay)
    });

    work.addEventListener("mouseleave", () => {
      gsap.to(workImage, {
        duration: 0.4,
        opacity: 0,
        ease: "power1",
        rotation: 0,
      });
    });
  }
);
