let items = ["#base", "#pizza-base", "#cheese", "#pep1", "#pep2", "#pep3", "#pizza-crust"];


let tl = new TimelineMax();
items.forEach((item) => {
  tl.fromTo(item, 0.5, {
    scaleY: 0,
    opacity: 0,
    y: -50
  }, {
    scaleY: 1,
    opacity: 1,
    y: 0,
    ease: Bounce.easeOut
  });
})