$(document).ready(function () {
  // Toggle menu on click
  $("#menu-toggler").click(function () {
    toggleBodyClass("menu-active");
  });

  function toggleBodyClass(className) {
    document.body.classList.toggle(className);
  }
});


function splitScroll() {
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
      duration: "950%",
      triggerElement: ".abbout__title",
      triggerHook: 0
    })

    .setPin(".abbout__title")
    // .addIndicators()
    .addTo(controller);
}

splitScroll();