//= ../libs/babel-browser-polyfill/polyfill.js
//= ../libs/jquery/dist/jquery.min.js
//= ../libs/slick-carousel/slick/slick.min.js
//= ../libs/df-visible/jquery.visible.min.js

"use strict";

function autosize() {
  var el = this;
  setTimeout(function() {
    el.style.cssText = "height:auto; padding:0";
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = "height:" + (el.scrollHeight + 2) + "px";
  }, 0);
}

function animateVisible() {
  $(".animate").each(function() {
    if ($(this).visible(true, false, "vertical")) {
    // if ($(this).visible( true )) {
      $(this).addClass("animated");
    }
  });
}


(function() {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function(css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();

$(window).on("load", function() {
  // let $preloader = $('.loader-bg');
  // $preloader.delay(150).fadeOut('slow').queue(function () {
  //   $(this).dequeue();
  // });
  // setTimeout(function () {
  //   let sliderWrapper = document.querySelector('.slider-wrapper');
  //   if (sliderWrapper) {
  //     sliderWrapper.classList.remove('hidded-slider');
  //   }
  // }, 300)

  setTimeout(function() {
    let sliderWrapper = document.querySelector(".slider-wrapper");
    if (sliderWrapper) {
      sliderWrapper.classList.remove("hidded-slider");
      let allSlides = sliderWrapper.querySelectorAll(".slide");
      for (let g of allSlides) {
        g.classList.add("slide-done");
      }
    }
  }, 300);

  setTimeout(function() {
    let backWrapper = document.querySelector(".back-wrp");
    if (backWrapper) {
      backWrapper.classList.add("show-back-wrp");
    }
  }, 1300);
  //visible blocks
  animateVisible();
  //visible blocks end

  // IE and other
  if (!(document.documentMode || /Edge/.test(navigator.userAgent))) {
    if ($(".letters-block").length > 0) {
      $(".animate-letter").each(function() {
        if ($(this).visible(true, false, "vertical")) {
          if (!$(this).hasClass("animated")) {
            $(this).addClass("animated");
            $("path").each(function() {
              $(this)
                .find("animate.animation")
                .each(function() {
                  $(this)[0].beginElement();
                  // if ($(this).find("animate.animation").length > 0) {
                  //   $(this).find("animate.animation")[0].beginElement();
                  // }
                });
            });
          }
        } else {
          if ($(this).hasClass("animated")) {
            $(this).removeClass("animated");
            // if ($(this).find("animate.animation").length > 0) {
            //   $(this).find("animate.animation")[0].beginElement();
            // }
          }
        }
      });
    }

    if ($(".services").length > 0) {
      $(".animate-svg").each(function() {
        if ($(this).visible(true, false, "vertical")) {
          if (!$(this).hasClass("animated")) {
            $(this).addClass("animated");
            $(this)
              .find("animate.animation")
              .each(function() {
                $(this)[0].beginElement();
              });
          }
        } else {
          if ($(this).hasClass("animated")) {
            $(this).removeClass("animated");
          }
        }
      });
    }
  }
  // IE and other end

  //open form

  // if ($(".page-contacts").length > 0) {
  //   if (window.outerWidth <= 640) {
  //     let mobFormScroll = $("#mobForm").scrollTop();
  //     let speed = 2000;
  //     $("html, body").animate({scrollTop: mobFormScroll}, speed);
  //     return false;
  //   }
  // }
});

$(window).scroll(function() {
  //visible blocks
  animateVisible();
  //visible blocks end
  // IE and other
  if (!(document.documentMode || /Edge/.test(navigator.userAgent))) {
    if ($(".letters-block").length > 0) {
      $(".animate-letter").each(function() {
        if ($(this).visible(true, false, "vertical")) {
          if (!$(this).hasClass("animated")) {
            $(this).addClass("animated");
            $(this)
              .find("path")
              .each(function() {
                $(this)
                  .find("animate.animation")
                  .each(function() {
                    $(this)[0].beginElement();
                    // if ($(this).find("animate.animation").length > 0) {
                    //   $(this).find("animate.animation")[0].beginElement();
                    // }
                  });
              });
            // if ($(this).find("animate.animation").length > 0) {
            //   $(this).find("animate.animation")[0].beginElement();
            // }
          }
        } else {
          $(this).removeClass("animated");
          if ($(this).find("animate.animation").length > 0) {
            $(this)
              .find("animate.animation")[0]
              .beginElement();
          }
        }
      });
    }
    if ($(".services").length > 0) {
      $(".animate-svg").each(function() {
        if ($(this).visible(true, false, "vertical")) {
          if (!$(this).hasClass("animated")) {
            $(this).addClass("animated");
            $(this)
              .find("animate.animation")
              .each(function() {
                $(this)[0].beginElement();
              });
          }
        }
        // else {
        //   if ($(this).hasClass('animated')) {
        //     $(this).removeClass('animated');
        //   }
        // }
      });
    }
  }
  // IE and other end
});

let bd = document.querySelector(".page-screen");

if (bd) {
  let port = bd.querySelector(".portfolio .portfolio-custom");

  window.addEventListener("resize", function() {
    // if (window.outerHeight <= 768) {
    if (window.innerHeight <= 768) {
      bd.classList.add("pos-tablet");
    } else {
      bd.classList.remove("pos-tablet");
    }
    // if (window.outerHeight <= 680) {
    if (window.innerHeight <= 680) {
      bd.classList.add("pos-rel");
    } else {
      bd.classList.remove("pos-rel");
    }
    // if (window.outerHeight <= 600) {
    // if (window.outerHeight <= 520) {
    if (window.innerHeight <= 520) {
      bd.classList.add("pos-rel-little");
      if (port) {
        port.classList.add("tablet-styles");
      }
    } else {
      bd.classList.remove("pos-rel-little");
      if (port) {
        port.classList.remove("tablet-styles");
      }
    }
    if (window.outerWidth <= 900) {
      if (port) {
        port.classList.add("tablet-styles");
      }
    } else {
      if (port) {
        port.classList.remove("tablet-styles");
      }
    }
  });
    // if (window.outerHeight <= 768) {
  if (window.innerHeight <= 768) {
    bd.classList.add("pos-tablet");
  } else {
    bd.classList.remove("pos-tablet");
  }
  // if (window.outerHeight <= 680) {
  if (window.innerHeight <= 680) {
    bd.classList.add("pos-rel");
  } else {
    bd.classList.remove("pos-rel");
  }

  if (window.outerWidth <= 900) {
    if (port) {
      port.classList.add("tablet-styles");
    }
  } else {
    if (port) {
      port.classList.remove("tablet-styles");
    }
  }

  // if (window.outerHeight <= 600) {
  // if (window.outerHeight <= 520) {
  if (window.innerHeight <= 520) {
    bd.classList.add("pos-rel-little");
    if (port) {
      port.classList.add("tablet-styles");
    }
  } else {
    bd.classList.remove("pos-rel-little");
    if (port) {
      port.classList.remove("tablet-styles");
    }
  }
}

//Custom script for page load and mobile navigation
$(function() {
  //change opacity of page, after all DOM was created and add class 'animation' to body

  // document.querySelector('main').style.opacity = '1';
  document.querySelector("body").classList.remove("animation-start");
  document.querySelector("body").classList.add("animation");

  //function for count numbers

  $(".count").each(function() {
    //for each element with class 'count' set animation
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text()
        },
        {
          duration: 2000,
          easing: "swing",
          step: function(now) {
            $(this).text(Math.ceil(now));
          }
        }
      );
  });
  // remove class hide for smoothe animathin text and icon on page About
  $("#archiveWrap")
    .find(".achive .tx")
    .removeClass("hide");
  $("#archiveWrap")
    .find(".achive .img")
    .removeClass("hide");

  // svg for ie and svg
  if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    $(".svg-img").each(function() {
      if ($(this).attr("data-all-brow")) {
        $(this).attr("data-all-brow", "hidden");
      }
      if ($(this).attr("data-ie")) {
        $(this).attr("data-ie", "show");
      }
    });
    $(".form-ie").each(function() {
      if ($(this).attr("data-all-brow")) {
        $(this).attr("data-all-brow", "hidden");
      }
      if ($(this).attr("data-ie")) {
        $(this).attr("data-ie", "show");
      }
    });
    $(".block-other").remove();
  }
  else{
    $(".block-ie").remove();
  }

  // Work with sliders on Portfolio page
  let slider = $("#sliderPortfolio");

  //function which initialized main slider
  function initSlider() {
    slider.slick({
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 1,
      speed: 1000,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: true,
      focusOnSelect: true,
      asNavFor: "#sliderBG"
    });
  }

  if (slider) {
    let scrollCount = null; //var for mouse gorizontal scroll in slider
    let scroll = null;

    initSlider(); //initialization slider

    slider.on("wheel", function(e) {
      // event on mouse wheel
      e.preventDefault();
      e.stopPropagation();

      scroll = setTimeout(function() {
        scrollCount = 0;
      }, 500);
      if (scrollCount) return 0;
      scrollCount = 1;

      let fulSl = this.querySelectorAll(".slide").length;
      let cur = this.querySelector(".slick-current");
      if (cur) {
        let curNum = cur.getAttribute("data-slick-index");
        if (curNum == fulSl - 1) {
          if (e.originalEvent.deltaY > 0) {
            // $(this).slick('slickNext');
          } else {
            $(this).slick("slickPrev");
          }
        } else if (curNum == 0) {
          if (e.originalEvent.deltaY > 0) {
            $(this).slick("slickNext");
          } else {
            // $(this).slick('slickPrev');
          }
        } else {
          if (e.originalEvent.deltaY > 0) {
            $(this).slick("slickNext");
          } else {
            $(this).slick("slickPrev");
          }
        }
      }
    });
  }
  // slider.find('a').click(function() {
  //   event.preventDefault();
  // });
  slider.find('div[data-href]').click(function(e) {
    let url = $(this).attr('data-href');
    // let par = i.parentNode;
    // window.location.replace(linkLoc);
    e.preventDefault();
    this.parentNode.parentNode.classList.add("sl-gn");
    let backwr = document.querySelector("#sliderBG");
    if (backwr) {
      backwr.parentNode.classList.add("scale-bw");
    }
    document
        .querySelector("body")
        .classList.add("animation-leave-portfolio");
    setTimeout(function() {
      // set timeout for 1s, after which we relocate to new page
      window.location = url;
    }, 1000);
  });

  //function which initialized background slider
  function initBackSlider() {
    $("#sliderBG").slick({
      dots: false,
      arrows: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      focusOnSelect: true,
      centerMode: true
    });
  }

  let slcPort = document.querySelector(".portfolio-custom");

  if (slcPort) {
    //check for slider exist
    let iniz = slcPort.classList.contains("slick-initialized");

    // Portfolio background slider
    (Element.prototype.appendAfter = function(element) {
      element.parentNode.insertBefore(this, element.nextSibling);
    }),
      false;

    let wrp = document.querySelector(".mw-content-2"); //get wrapper after which we include new backfround slider
    //create wrapper for background slider
    let wrapper = document.createElement("div");
    wrapper.classList.add("back-wrp");

    //create slider block
    let slider_wr = document.createElement("div");
    slider_wr.classList.add("back-slider");
    slider_wr.setAttribute("id", "sliderBG");

    //start to get all imgs from main slider
    let slides = document.querySelectorAll(".slide .main-img img"); //get arrat with all imgs elements from main slider
    let imgs = [];

    //start cycle for array
    for (let [i, v] of slides.entries()) {
      let str = v.getAttribute("src"); //get attribute 'src' of current img element
      imgs.push(str);
      let bIt = document.createElement("div"); //create new background slider element with class
      bIt.classList.add("back-item");
      bIt.setAttribute("id", "item-" + i);
      let bImg = document.createElement("img"); // create element img inside of this slider element with 'src' of current array element
      bImg.setAttribute("src", str);
      bIt.appendChild(bImg);
      slider_wr.appendChild(bIt);
    }

    wrapper.appendChild(slider_wr); // include background slider to background slider wrapper
    wrapper.appendAfter(wrp); // append background wrapper after our main slider wrapper

    initBackSlider(); // initialized background wrapper

    let bgSlider = $("#sliderBG"); // get background wrapper as jquery element

    if (bgSlider) {
      // check for exist
      // condition if page loads on devices with screen width < 640
      if (
        (window.outerWidth <= 900 && iniz) ||
          (window.innerHeight <= 520 && iniz)
          // (window.outerHeight <= 520 && iniz)
        // (window.outerHeight <= 600 && iniz)
      ) {
        slider.slick("unslick"); //destroy main slider
        bgSlider.slick("unslick"); //destroy background slider
        bgSlider.css("display", "none"); // hide background slider
        document.querySelector("body").classList.remove("page-screen"); // remove from body class page-screen
        document.querySelector("body").classList.add("page-unset"); // add to body class page-unset
        document.querySelector("body").style.height = "auto"; // set body height auto
      } else if (
        (window.outerWidth > 900 && !iniz) ||
          window.innerHeight > 520
        // window.outerHeight > 600
        // window.outerHeight > 520
      ) {
        if (!slider.hasClass("slick-initialized")) {
          initSlider();
          initBackSlider();
          bgSlider.css("display", "block");
          document.querySelector("body").classList.add("page-screen");
          document.querySelector("body").classList.remove("page-unset");
          document.querySelector("body").style.height = "100vh";
        }
      }

      //same function but on live resize
      window.addEventListener("resize", function() {
        if (
          (window.outerWidth <= 900 && iniz) ||
            (window.innerHeight <= 520 && iniz)
            // (window.outerHeight <= 520 && iniz)
        ) {
          slider.slick("unslick");
          bgSlider.slick("unslick");
          bgSlider.css("display", "none");
          document.querySelector("body").classList.remove("page-screen");
          document.querySelector("body").classList.add("page-unset");
          document.querySelector("body").style.height = "auto";
        }
        // if we resize page from 640 width to up we init sliders and set all to default
        else if (
          (window.outerWidth > 900 && !iniz) ||
            window.innerHeight > 520
            // window.outerHeight > 520
          // window.outerHeight > 600
        ) {
          if (!slider.hasClass("slick-initialized")) {
            initSlider();
            initBackSlider();
            bgSlider.css("display", "block");
            document.querySelector("body").classList.add("page-screen");
            document.querySelector("body").classList.remove("page-unset");
            document.querySelector("body").style.height = "100vh";
          }
        }
      });
    }

    let mas1 = slcPort.querySelectorAll(".slide");

    for (let v of mas1) {
      let vImg = v.querySelector(".slide-img");

      vImg.addEventListener("mouseenter", function() {
        setTimeout(() => {
          if (
            !document
              .querySelector(".page")
              .classList.contains("animation-leave-portfolio")
          ) {
            let bgcur = bgSlider[0]
              .querySelector(".slick-current")
              .getAttribute("data-slick-index");
            if (slideno != bgcur) {
              var slideno = this.parentNode.parentNode.getAttribute(
                "data-slick-index"
              );
              bgSlider.slick("slickGoTo", slideno);
            }
          }
        }, 200);
      });
    }

    $("#sliderPortfolio").on("beforeChange", function(
      e,
      slick,
      currentSlide,
      nextSlide
    ) {
      // console.log("beforeChange");
      // console.log(nextSlide)
      bgSlider.slick("slickGoTo", nextSlide);
    });
  }

  //animation on relocate between pages of our site
  //disable fast relocate to page for links, except slider links(page portfolio), social links and links with target = '_blank'
  let links = document.querySelectorAll("a"); // creat array with all links in page
  for (let i of links) {
    // сycle with work with every value (not id) in this array
    let par = i.parentNode; // get parent class of current elemnt
    // check for all our conditions
    if (
      !par.classList.contains("slide") &&
      !par.classList.contains("social-link") &&
      i.getAttribute("target") != "_blank"
    ) {
      i.addEventListener("click", function(e) {
        e.preventDefault(); // disable default link relocate
        let url = this.getAttribute("href"); //get atribut 'href' of current link
        document.querySelector("body").classList.add("animation-leave"); //add class 'animation-leave' to body
        setTimeout(function() {
          // set timeout for 1s, after which we relocate to new page
          window.location = url;
        }, 500);
      });
    } else if (par.classList.contains("slide")) {
      i.addEventListener("click", function(e) {
        let url = this.getAttribute("href");
        if (window.outerWidth <= 900) {
          window.location = url;
        } else {
          e.preventDefault();
          this.parentNode.parentNode.classList.add("sl-gn");
          let backwr = document.querySelector("#sliderBG");
          if (backwr) {
            backwr.parentNode.classList.add("scale-bw");
          }
          document
            .querySelector("body")
            .classList.add("animation-leave-portfolio");
          setTimeout(function() {
            // set timeout for 1s, after which we relocate to new page
            window.location = url;
          }, 1000);
        }
      });
    }
  }
  // slider.find('div[data-href]').dblclick(function() {
  //   let linkLoc = $(this).attr('data-href');
  //   window.location.replace(linkLoc);
  // });
  // mobile (burger) navigation
  let burgerBtn = document.querySelector("#burgerBtn");
  let burgerMenu = document.querySelector("#burgerMenu");

  //functon on click burget to open navigation menu
  burgerBtn.addEventListener("click", function() {
    burgerMenu.classList.toggle("menu-opened");
    burgerBtn.classList.toggle("btn-opened");
  });

  let inpWrap = document.querySelectorAll(".input-wrapper");

  //script which hide placeholder in input and show label above this input
  if (inpWrap) {
    for (let item of inpWrap) {
      let inp = item.querySelector("input[type=text], textarea");
      inp.addEventListener("input", () => {
        let wr = inp.closest(".input-wrapper");
        let lb = wr.querySelector("label");
        if (inp.value === "") {
          lb.style.opacity = "0";
        } else {
          lb.style.opacity = "1";
        }
      });
      inp.addEventListener("keydown", autosize);
    }
  }


  let btnScale = document.querySelector("#btnScale");


  if (btnScale) {
    btnScale.addEventListener("click", function() {
      let form = this.parentNode.querySelector(".form-main-block");

      let formInline = this.closest(".form-cont-block");
      formInline.classList.add("form-cont-block-open");

      let scroll = $(form.parentNode.parentNode).innerHeight();
      form.classList.add("main-open");
      this.style.display = "none";
      setTimeout(() => {
        scroll = $(form.parentNode.parentNode).innerHeight() - scroll;
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
          let currentScroll = $("body").scrollTop();
          $("body").animate(
            {
              scrollTop: currentScroll + scroll +100
            },
            300
          );
        } else {
          let currentScroll = $("html").scrollTop();
          $("html").animate(
            {
              scrollTop: currentScroll + scroll+100
            },
            300
          );
        }
        form.classList.add("main-open-show");
      }, 300);
    });
  }
  //script for input woth type range, which change value of another element every time, when input value is changed
  let bugR = document.querySelector("#budget");
  if (bugR) {
    bugR.closest(".form-budget").querySelector(".budget-value").textContent =
      " $" + bugR.value + ",000";

    bugR.addEventListener("input", function() {
      let value = this.closest(".form-budget").querySelector(".budget-value");
      if (this.value == "40") {
        value.textContent = " There’s no limits to perfection";
      } else if (this.value == "0") {
        value.textContent = " I don’t know";
      } else {
        value.textContent = " $" + this.value + ",000";
      }
    });
  }


  // work with contact form
  let btnForm = document.querySelector("#btnForm");
  let backForm = document.querySelector("#backForm");
  let clsForm = document.querySelector("#clsForm");
  let mobForm = document.querySelector("#mobForm");

  //script which change callback form options on screens with more than 640 width and another
  // on live resize and on loaded resize

  if (btnForm) {
    if (
      window.outerWidth <= 640 &&
      !backForm.classList.contains("service-form")
    ) {
      if (mobForm.children.length === 0) {
        mobForm.append(backForm.querySelector("form"));
      }
    }

    window.addEventListener("resize", function() {
      if (window.outerWidth <= 640) {
        if (mobForm.children.length === 0) {
          mobForm.append(backForm.querySelector("form"));
        }
      } else {
        if (backForm.children.length === 0) {
          backForm.append(mobForm.querySelector("form"));
        }
        if (mobForm.style.display == "block") {
          mobForm.style.display = "none";
          mobForm.classList.remove("mob-form-opened");
        }
      }
    });

    //script which open and hide form by press button
    btnForm.addEventListener("click", function() {
      if (window.innerWidth > 640) {
        if (backForm.classList.contains("service-form")) {
          backForm.style.display = "block";
          setTimeout(function() {
            backForm.classList.add("form-opened");
          }, 200);

          clsForm.addEventListener("click", function() {
            backForm.classList.remove("form-opened");
            setTimeout(function() {
              backForm.style.display = "none";
            }, 300);
          });
        } else {
          backForm.classList.add("form-opened");
          clsForm.addEventListener("click", function() {
            backForm.classList.remove("form-opened");
          });
        }
      } else {
        if (backForm.classList.contains("service-form")) {
          backForm.style.display = "block";
          setTimeout(function() {
            backForm.classList.add("form-opened");
          }, 200);

          clsForm.addEventListener("click", function() {
            backForm.classList.remove("form-opened");
            setTimeout(function() {
              backForm.style.display = "none";
            }, 300);
          });
        } else {
          let scroll = $(mobForm.parentNode.parentNode).innerHeight();

          mobForm.style.display = "block";
          setTimeout(() => {
            scroll = $(mobForm.parentNode.parentNode).innerHeight() - scroll;

            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
              let currentScroll = $("body").scrollTop();
              $("body").animate(
                {
                  scrollTop: currentScroll + scroll - 150
                },
                300
              );
            } else {
              let currentScroll = $("html").scrollTop();
              $("html").animate(
                {
                  scrollTop: currentScroll + scroll - 150
                },
                300
              );
            }

            mobForm.classList.add("mob-form-opened");
          }, 200);
          clsForm.addEventListener("click", function() {
            setTimeout(() => {
              mobForm.style.display = "none";
            }, 600);
            mobForm.classList.remove("mob-form-opened");
          });
        }
      }
    });
  }

  if ($(".page-contacts").length > 0) {
    var urlForm = location.search.split("openForm=")[1];
    if (urlForm === "open") {
      console.log("urlForm");

      if (window.outerWidth <= 640) {
        $("#mobForm").each(function () {
          let mobFormScroll = $("#btnForm").offset().top;
          console.log(mobFormScroll);
          let speed = 2000;
          $("html, body").animate({scrollTop: mobFormScroll}, speed);
          return false;
        });
        mobForm.classList.add("mob-form-opened");
        mobForm.style.display = "block";
        clsForm.addEventListener("click", function() {
          mobForm.classList.remove("mob-form-opened");
        });

      } else {
        backForm.classList.add("form-opened");
        clsForm.addEventListener("click", function() {
          backForm.classList.remove("form-opened");
        });
      }
    }
  }
});

//modal-popup
var $parentSection = $('.section-modal');
var $parentBody = $('body');
var $bgOverlay = $('.bg-overlay');
function initClickModal(selector) {
  $(selector).on("click",function(event){
    event.preventDefault();
    var $dataTarget = $(this).attr('data-target');
    var $showSection =  $parentSection.find('[data-target = ' + $dataTarget +']').addClass('show');
    $showSection.closest('.section-modal-block').addClass('show-section');
    $parentBody.addClass('show-modal-block');
    $parentSection.addClass('show-modal');
    $bgOverlay.addClass('show-overlay');
  });
}
function initCloseModal(selector) {
  $(selector).on("click", function (event) {
    $parentSection.find('.show').removeClass('show');
    $parentBody.removeClass('show-modal-block');
    $parentSection.removeClass('show-modal');
    $bgOverlay.removeClass('show-overlay');
    $parentSection.find('.show-section').removeClass('show-section');
  });
}
initClickModal('.btn-submit');
initCloseModal('.close-modal');
initCloseModal('.bg-overlay');
//modal-popup end

$(window).on("load", function() {
  //delete video for tablet
  if($('.page-main').length>0){
    if (window.outerWidth <= 900) {
      $(".video-bg").remove();
    }
  }
  //delete video for tablet end
  //start vue component
  if($('.form-block-vue').length>0){
    Vue.config.silent = true;
    window.app = new Vue({
      el: "#app",
      data() {
        return {
          value: "$15,000",
          data: [
            "I don't know",
            "$5,000",
            "$10,000",
            "$15,000",
            "$20,000",
            "$25,000",
            "$30,000",
            "$35,000",
            "$40,000",
            "There’s no limits to perfection"
          ]
        };
      },
      methods: {},
      mounted() {
      },
      components: {
        vueSlider: window["vue-slider-component"]
      }
    });
  }
  //start vue component end
  // IE and other
  if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    $(".scroll-section").each(function() {
      if ($(this).attr("data-ie-scroll")) {
        $(this).attr("data-ie-scroll", "show");
      }
    });
    $(".page").each(function() {
      $(this).addClass("page-ie");
    });
    //  delete other blocks
    $(".block-other").remove();
  }
  else{
    // delete IE blocks
    $(".block-ie").remove();
  }
  // IE and other end
  // portfolio single carusel
  function initSliderCarousel() {
    let $slider = $("#sliderCarousel");
    $slider.slick({
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 5,
      speed: 1000,
      slidesToScroll: 1,
      swipeToSlide: true,
      centerMode: true,
      // focusOnSelect: true,
      // autoplay: true
      // the magic
      responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 421,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }

  // portfolio single task block animation
  function taskStep() {
    let $taskSection = $('.task-section');
    let $taskSectionAnim = $('.task-section').offset().top;
    // if (window.outerWidth <= 768) {
    //   let $taskSectionAnim = calc($taskSectionAnim - 150);
    // } else {
    //   let $taskSectionAnim = $taskSectionAnim - 50;
    // }
    let $taskSectionAnimOne = $('.task-section').offset().top;
    let $taskSectionAnimTwo = $('.task-section').offset().top + 80;
    $(window).scroll(function () {
      if ($(window).scrollTop() >= $taskSectionAnim && $taskSection.hasClass("wrap-def")) {
        $taskSection.removeClass("wrap-def").addClass("wrap-fix");
      }
      if ($(window).scrollTop() >= $taskSectionAnimOne) {
        $taskSection.addClass("wrap-fix-one");
      }
      if ($(window).scrollTop() >= $taskSectionAnimTwo) {
        $taskSection.addClass("wrap-fix-two");
      }
      if ($(window).scrollTop() < $taskSectionAnim && $taskSection.hasClass("wrap-fix")) {
        $taskSection.removeClass("wrap-fix").addClass("wrap-def");
      }
      if ($(window).scrollTop() < $taskSectionAnimOne) {
        $taskSection.removeClass("wrap-fix-one");
      }
      if ($(window).scrollTop() < $taskSectionAnimTwo) {
        $taskSection.removeClass("wrap-fix-two");
      }
    });
  }

  // portfolio single section scroll section
  function sectionStep(selector) {
    let $paySection = $(selector);
    let $paySectionAnim = $paySection.offset().top - 50;
    let $paySectionAnimOne = $paySection.offset().top;
    let $paySectionAnimTwo = $paySection.offset().top + 80;
    $(window).scroll(function () {
      if ($(window).scrollTop() >= $paySectionAnim && $paySection.hasClass("wrap-def")) {
        $paySection.removeClass("wrap-def").addClass("wrap-fix");
      }
      if ($(window).scrollTop() >= $paySectionAnimOne) {
        $paySection.addClass("wrap-fix-one");
      }
      if ($(window).scrollTop() >= $paySectionAnimTwo) {
        $paySection.addClass("wrap-fix-two");
      }
      if ($(window).scrollTop() < $paySectionAnim && $paySection.hasClass("wrap-fix")) {
        $paySection.removeClass("wrap-fix").addClass("wrap-def");
      }
      if ($(window).scrollTop() < $paySectionAnimOne) {
        $paySection.removeClass("wrap-fix-one");
      }
      if ($(window).scrollTop() < $paySectionAnimTwo) {
        $paySection.removeClass("wrap-fix-two");
      }
    });
  }

  // portfolio single section scroll section
  function scrollOneSection(selector) {
    let $scrollOneSection = $(selector);
    let $scrollOneSectionOne = $scrollOneSection.offset().top;
    let $scrollOneSectionIe = $scrollOneSection.offset().top + 250;
    let $scrollOneSectionAnim = $scrollOneSectionOne - 150;
    let $scrollOneSectionHeight = $(selector).height();
    let $scrollOneSectionTwo = $scrollOneSection.offset().top + $scrollOneSectionHeight - window.innerHeight;
    $(window).scroll(function () {
      if ($(window).scrollTop() >= $scrollOneSectionAnim && $scrollOneSection.hasClass("wrap-def")) {
        $scrollOneSection.removeClass("wrap-def").addClass("wrap-fix");
      }
      if ($(window).scrollTop() >= $scrollOneSectionOne) {
        $scrollOneSection.addClass("wrap-fix-one");
      }
      if ($(window).scrollTop() >= $scrollOneSectionIe) {
        $scrollOneSection.addClass("wrap-fix-ie");
      }
      if ($(window).scrollTop() >= $scrollOneSectionTwo) {
        $scrollOneSection.addClass("wrap-fix-two");
      }
      if ($(window).scrollTop() < $scrollOneSectionAnim && $scrollOneSection.hasClass("wrap-fix")) {
        $scrollOneSection.removeClass("wrap-fix").addClass("wrap-def");
      }
      if ($(window).scrollTop() < $scrollOneSectionOne) {
        $scrollOneSection.removeClass("wrap-fix-one");
      }
      if ($(window).scrollTop() < $scrollOneSectionIe) {
        $scrollOneSection.removeClass("wrap-fix-ie");
      }
      if ($(window).scrollTop() < $scrollOneSectionTwo) {
        $scrollOneSection.removeClass("wrap-fix-two");
      }
    });
  }

  // portfolio single vertical blocks
  function scrollSectionVertical(selector) {
    let $scrollOneSection = $(selector);
    let $scrollShowImage = $scrollOneSection.find('.focus-screen-block');
    let $thisStep = $scrollOneSection.find('.step');
    let $windowHeight = $(window).height();
    $(window).scroll(function () {
      $thisStep.each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - $windowHeight) {
          $thisStep.removeClass('active');
          $scrollShowImage.find('.active').removeClass('active');
          var $dataStep = $(this).attr('data-step');
          // $(this).closest('.row-content').attr('data-step', $dataStep );
          $(this).addClass('active');
          $scrollShowImage.find('[data-step = ' + $dataStep + ']').addClass('active');
        } else {
          // $scrollShowImage.find('.default').addClass('active');
        }
      });
    });
  }

  function initSliderSection(selector) {
    let $scrollOneSection = $(selector);
    let $imageStep = $scrollOneSection.find('.step-text');
    let $imageScreen = $scrollOneSection.find('.img-screen');
    let $sliderOneText = $scrollOneSection.find('.slide-mobile-text');
    let $sliderOneImage = $scrollOneSection.find('.img-screen-slider');
    $imageStep.each(function (i) {
      $(this).appendTo($sliderOneText);
    });
    $imageScreen.each(function (i) {
      $(this).appendTo($sliderOneImage);
    });
    $sliderOneText.slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      speed: 1000,
      slidesToScroll: 1,
      swipeToSlide: true,
      asNavFor: $sliderOneImage,
      centerMode: false
    });
    $sliderOneImage.slick({
      dots: false,
      arrows: true,
      infinite: true,
      fade: true,
      slidesToShow: 1,
      speed: 1000,
      slidesToScroll: 1,
      swipeToSlide: true,
      asNavFor: $sliderOneText,
      centerMode: false
    });
  }

  if($('.page-portfolio-single').length >0){
    let bdSingle = document.querySelector(".page-portfolio-single");
    initSliderCarousel();
    scrollOneSection('.scroll-one-section');
    scrollOneSection('.scroll-two-section');
    taskStep();
    sectionStep('.payment-instrument-section');
    sectionStep('.img-block-section');

    if (window.innerHeight <= 768) {
      bdSingle.classList.add("pos-tablet");
    } else {
      bdSingle.classList.remove("pos-tablet");
    }
    if (window.outerWidth > 640) {
      scrollSectionVertical('.scroll-one-section');
      scrollSectionVertical('.scroll-two-section');
    } else {
      initSliderSection('.scroll-one-section');
      initSliderSection('.scroll-two-section');;
    }
    window.addEventListener("resize", function () {
      if (window.innerHeight <= 768) {
        bdSingle.classList.add("pos-tablet");
      } else {
        bdSingle.classList.remove("pos-tablet");
      }
      initSliderCarousel();
      if (window.outerWidth > 640) {
        scrollSectionVertical('.scroll-one-section');
        scrollSectionVertical('.scroll-two-section');
      } else {
        initSliderSection('.scroll-one-section');
        initSliderSection('.scroll-two-section');
      }
    });
  }

});

