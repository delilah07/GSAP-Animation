gsap.from(".logo", 1, {
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});
TweenMax.staggerFrom(
  "nav ul li",
  1,
  {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut,
  },
  0.08
);
gsap.from(".search", 1, {
  opacity: 0,
  delay: 0.5,
  x: -20,
  ease: Expo.easeInOut,
});
gsap.from(".menu", 1, {
  opacity: 0,
  delay: 0.6,
  x: -20,
  ease: Expo.easeInOut,
});
gsap.from(".title", 1, {
  opacity: 0,
  delay: 1,
  y: 20,
  ease: Expo.easeInOut,
});
gsap.from(".btn", 1, {
  opacity: 0,
  delay: 1.6,
  y: 20,
  ease: Expo.easeInOut,
});
gsap.from(".line-one", 1, {
  opacity: 0,
  delay: 2,
  y: -800,
  ease: Expo.easeInOut,
});
gsap.from(".line-two", 1, {
  opacity: 0,
  delay: 2.5,
  y: -800,
  ease: Expo.easeInOut,
});
gsap.from(".img", 2, {
  opacity: 0,
  delay: 2.9,
  y: -800,
  ease: Expo.easeInOut,
});
gsap.from(".year", 1, {
  opacity: 0,
  delay: 1.4,
  y: -20,
  ease: Expo.easeInOut,
});
gsap.to(".next", 2, {
  opacity: 1,
  x: 0,
  delay: 4,
  ease: Expo.easeInOut,
});
TweenMax.from(".media ul", 1, {
  opacity: 0,
  delay: 3.2,
  y: 40,
  ease: Expo.easeInOut,
});
