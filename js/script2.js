const dateTitle = document.querySelector(".cover-date");
const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-open");

const date = new Date();
dateTitle.innerHTML = `${
  date.getMonth() + 1
} / ${date.getDate()} / ${date.getFullYear()}`;

const tl = gsap.timeline({
  default: { duration: 1, ease: "power2.easeOut" },
  paused: true,
  reversed: true,
});
tl.to(".cover", {
  width: "60%",
})
  .to(
    "nav",
    {
      height: "100vh",
    },
    "-=0.5"
  )
  .fromTo(
    ".nav-open",
    {
      opacity: 0,
      x: 50,
    },
    {
      opacity: 1,
      x: 0,
      onComplete: function () {
        navOpen.style.pointerEvents = "auto";
        console.log("done");
      },
    }
  );
navButton.addEventListener("click", (e) => {
  if (tl.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  toggle(tl);
});

function toggle(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}
