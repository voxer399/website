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

// Animated FAQ accordion, built on native <details>/<summary> so it works
// fully (just without the animation) even if this script never runs.
document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll(".faq-item");
  items.forEach(function (details) {
    var summary = details.querySelector(".faq-question");
    var answer = details.querySelector(".faq-answer");
    if (!summary || !answer) return;

    summary.addEventListener("click", function (e) {
      e.preventDefault();
      var isOpen = details.hasAttribute("open");

      if (isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        requestAnimationFrame(function () {
          answer.style.maxHeight = "0px";
        });
        answer.addEventListener("transitionend", function onEnd() {
          details.removeAttribute("open");
          answer.style.maxHeight = "";
          answer.removeEventListener("transitionend", onEnd);
        });
      } else {
        // accordion behavior: close any other open item in the same group
        items.forEach(function (other) {
          if (other !== details && other.hasAttribute("open")) {
            other.querySelector(".faq-question").click();
          }
        });
        details.setAttribute("open", "");
        var target = answer.scrollHeight;
        answer.style.maxHeight = "0px";
        requestAnimationFrame(function () {
          answer.style.maxHeight = target + "px";
        });
        answer.addEventListener("transitionend", function onEnd() {
          answer.style.maxHeight = "";
          answer.removeEventListener("transitionend", onEnd);
        });
      }
    });
  });
});
