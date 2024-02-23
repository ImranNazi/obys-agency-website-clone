gsap.to("#page2 h1", {
  transform: "translateX(-139%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});

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

gsap.to("#page3 img", {
  width: "100%",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",

    markers: "true",
    start: "top 0",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});

gsap.to("#page4 img", {
  width: "100%",
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",

    markers: "true",
    start: "top 0",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
