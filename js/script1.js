// gsap.from(".logo", 1, {
//   opacity: 0,
//   x: -20,
//   ease: "power1.out",
// });
// gsap.from("nav ul li", {
//   duration: 1,
//   opacity: 0,
//   x: -20,
//   ease: "power3.out",
//   stagger: 0.1,
// });
// gsap.from(".search", 1, {
//   opacity: 0,
//   delay: 0.5,
//   x: -20,
//   ease: "power1.out",
// });
// gsap.from(".menu", 1, {
//   opacity: 0,
//   delay: 0.6,
//   x: -20,
//   ease: "power1.out",
// });
// gsap.from(".title", 1, {
//   opacity: 0,
//   delay: 1,
//   y: 20,
//   ease: "power1.out",
// });
// gsap.from(".btn", 1, {
//   opacity: 0,
//   delay: 1.6,
//   y: 20,
//   ease: "power1.out",
// });
// gsap.from(".line-one", 1, {
//   opacity: 0,
//   delay: 2,
//   y: -800,
//   ease: "power1.out",
// });
// gsap.from(".line-two", 1, {
//   opacity: 0,
//   delay: 2.5,
//   y: -800,
//   ease: "power1.out",
// });
// gsap.from(".img", 2, {
//   opacity: 0,
//   delay: 2.9,
//   y: -800,
//   ease: "power1.out",
// });
// gsap.from(".year", 1, {
//   opacity: 0,
//   delay: 1.4,
//   y: -20,
//   ease: "power1.out",
// });
// gsap.to(".next", 1, {
//   opacity: 1,
//   x: 0,
//   delay: 4,
//   ease: "power1.out",
// });
// gsap.fromTo(
//   ".media ul li",
//   {
//     opacity: 0,
//     x: 40,
//   },
//   {
//     duration: 1,
//     opacity: 1,
//     x: 0,
//     ease: "power1.out",
//     stagger: 0.2,
//     delay: 3.4,
//   }
// );

// for animation step by step
const timeline = gsap.timeline({ default: { duration: 1 } });
timeline
  .from(".logo", {
    opacity: 0,
    x: -20,
    ease: "power1.out",
  })
  .from(
    "nav ul li",
    {
      opacity: 0,
      x: -20,
      ease: "power3.out",
      stagger: 0.1,
    },
    1
  )
  .from(".search", {
    opacity: 0,
    x: -20,
    ease: "power1.out",
  })
  .from(".menu", {
    opacity: 0,
    x: -20,
    ease: "power1.out",
  })
  .from(".title", {
    opacity: 0,
    y: 20,
    ease: "power1.out",
  })
  .from(".btn", {
    opacity: 0,
    y: 20,
    ease: "power1.out",
  })
  .from(".line-one", {
    opacity: 0,
    y: -800,
    ease: "power1.out",
  })
  .from(
    ".line-two",
    {
      opacity: 0,
      y: -800,
      ease: "power1.out",
    },
    "-=0.5"
  )
  .from(".img", {
    duration: 2,
    opacity: 0,
    y: -800,
    ease: "power1.out",
  })
  .from(
    ".year",
    {
      opacity: 0,
      y: -20,
      ease: "power1.out",
    },
    "<0.5"
  )

  .fromTo(
    ".media ul li",
    {
      opacity: 0,
      x: 40,
    },
    {
      opacity: 1,
      x: 0,
      ease: "power1.out",
      stagger: 0.2,
    }
  )
  .to(
    ".next",
    {
      opacity: 1,
      x: 0,
      ease: "power1.out",
    },
    "+=2"
  );
