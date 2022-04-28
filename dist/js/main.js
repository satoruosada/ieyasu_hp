"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

document.addEventListener("DOMContentLoaded", function () {
  var main = new Main();
});

var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);

    this.header = document.querySelector(".header");
    this.sides = document.querySelectorAll(".side");
    this._observers = [];

    this._init();
  }

  _createClass(Main, [{
    key: "observers",
    get: function get() {
      return this._observers;
    },
    set: function set(val) {
      this._observers.push(val);
    }
  }, {
    key: "_init",
    value: function _init() {
      new MobileMenu(); // this.hero = new HeroSlider('.swiper-container');

      Pace.on("done", this._paceDone.bind(this));
    }
  }, {
    key: "_paceDone",
    value: function _paceDone() {
      this._scrollInit();
    }
  }, {
    key: "_inviewAnimation",
    value: function _inviewAnimation(el, inview) {
      if (inview) {
        el.classList.add("inview");
      } else {
        el.classList.remove("inview");
      }
    }
  }, {
    key: "_navAnimation",
    value: function _navAnimation(el, inview) {
      if (inview) {
        this.header.classList.remove("triggered");
      } else {
        this.header.classList.add("triggered");
      }
    }
  }, {
    key: "_sideAnimation",
    value: function _sideAnimation(el, inview) {
      if (inview) {
        this.sides.forEach(function (side) {
          return side.classList.add("inview");
        });
      } else {
        this.sides.forEach(function (side) {
          return side.classList.remove("inview");
        });
      }
    }
  }, {
    key: "_textAnimation",
    value: function _textAnimation(el, inview) {
      if (inview) {
        var ta = new TweenTextAnimation(el);
        ta.animate();
      }
    }
  }, {
    key: "_toggleSlideAnimation",
    value: function _toggleSlideAnimation(el, inview) {
      if (inview) {
        this.hero.start();
      } else {
        this.hero.stop();
      }
    }
  }, {
    key: "_destroyObservers",
    value: function _destroyObservers() {
      this.observers.forEach(function (ob) {
        ob.destroy();
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._destroyObservers();
    }
  }, {
    key: "_scrollInit",
    value: function _scrollInit() {
      this.observers = new ScrollObserver(".nav-trigger", this._navAnimation.bind(this), {
        once: false
      });
      this.observers = new ScrollObserver(".cover-slide", this._inviewAnimation);
      this.observers = new ScrollObserver(".appear", this._inviewAnimation);
      this.observers = new ScrollObserver(".tween-animate-title", this._textAnimation, {
        rootMargin: "-200px 0px"
      });
      this.observers = new ScrollObserver(".swiper-container", this._toggleSlideAnimation.bind(this), {
        once: false
      });
      this.observers = new ScrollObserver("#main-content", this._sideAnimation.bind(this), {
        once: false,
        rootMargin: "-300px 0px"
      });
    }
  }]);

  return Main;
}();

ScrollReveal().reveal(".fadeIn", {
  duration: 4000,
  origin: 'top',
  distance: '50px',
  opacity: 0
});
ScrollReveal().reveal(".kumo01", {
  delay: 600,
  duration: 3600,
  scale: 0.1,
  opacity: 0
});
ScrollReveal().reveal(".kumo02", {
  delay: 600,
  duration: 4000,
  rotate: {
    x: 180,
    y: 0,
    z: 0
  },
  opacity: 0
});
ScrollReveal().reveal(".kyara01", {
  delay: 600,
  duration: 3600,
  scale: 0.1,
  opacity: 0
});
ScrollReveal().reveal(".kyara02", {
  delay: 600,
  duration: 3600,
  rotate: {
    x: 0,
    y: 180,
    z: 0
  },
  opacity: 0
}); //logoの表示

$(window).on("load", function () {
  $("#splash").delay(1000).fadeOut("slow");
  $("#splash_logo").delay(1000).fadeOut("slow");
});
//# sourceMappingURL=main.js.map
