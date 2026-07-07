document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});

if ("IntersectionObserver" in window) {
  document.addEventListener("DOMContentLoaded", function () {
    var targets = document.querySelectorAll(".reveal");
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach(function (el) {
      observer.observe(el);
    });

    // Safety net: guarantee nothing stays invisible even if the observer
    // misses an element (fast scroll flings, unusual browser quirks, etc.)
    window.setTimeout(function () {
      targets.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }, 4000);
  });
} else {
  document.documentElement.classList.remove("js-ready");
}
