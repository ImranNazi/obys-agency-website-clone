var t = gsap.timeline();

t.from("#nav-bar h3", {
  y: -50,
  opacity: 0,
  delay: 0.4,
  duration: 1,
  stagger: 0.4,
});

t.from("#main h1", {
  x: -500,
  duration: 0.8,
  opacity: 0,
  stagger: 0.4,
});

t.from("img", {
  x: 100,
  rotate: 45,
  opacity: 0,
  duration: 0.5,
  stagger: 0.5,
});

t.from(".end-text", {
  x: -50,
  opacity: 0,
  delay: 0.4,
  duration: 1,
});

t.from(".end-text2", {
  x: -50,
  opacity: 0,
  delay: 0.4,
  duration: 1,
});
