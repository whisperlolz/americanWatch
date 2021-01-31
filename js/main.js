window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  //Tabs ----------------------------------------------

  function createTabs(blockOfTabs, tab, tabContent) {
    let getblockOfTabs = document.querySelector(blockOfTabs),
      getElementTab = getblockOfTabs.querySelectorAll(tab),
      gettabContent = document.querySelectorAll(tabContent);

    function hideContent(elem) {
      gettabContent[elem].classList.remove("show");
      gettabContent[elem].classList.add("hide");
    }
    function showContent(elem) {
      gettabContent[elem].classList.add("show");
      gettabContent[elem].classList.remove("hide");
    }

    function hideTabContent(a) {
      for (let i = a; i < gettabContent.length; i++) {
        hideContent(i);
      }
    }
    hideTabContent(1);

    function showTabContent(b) {
      if (gettabContent[b].classList.contains("hide")) {
        showContent(b);
      }
    }

    setInterval(function () {
      if (gettabContent[1].classList.contains("hide")) {
        showTabContent(1);
        hideContent(0);
      } else {
        showTabContent(0);
        hideContent(1);
      }
    }, 5000);

    getblockOfTabs.addEventListener("click", function (event) {
      let target = event.target;
      if (target && target.classList.contains("custom-tab")) {
        for (let i = 0; i < gettabContent.length; i++) {
          if (target == getElementTab[i]) {
            hideTabContent(0);
            showTabContent(i);
            break;
          }
        }
      }
    });
  }

  createTabs(".slider-tabs", "span", ".custom-img-element");

  //---------------------------------------------------------------

  let topLine = document.querySelector(".top-line"),
    menu = document.querySelector(".menu"),
    customContent = document.querySelector(".custom-content");
  
  //Info TEXT ----------------------------------------------

  function animationInfoText() {
    let scroll = document.documentElement.scrollTop,
        infoText = document.querySelector(".info-text");
    if (scroll >= 400) {
      infoText.classList.remove('info-stay');
      infoText.classList.add('info-left');
      
    }
  }

  window.onscroll = function () {
    animationInfoText();
  };

});