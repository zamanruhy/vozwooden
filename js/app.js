const SiteHeader = "";
const SiteHamburger = "";
const SiteSearch = "";
const SiteBanner = "";
const SiteButton = "";
const SiteSub = "";
const SiteNav = "";
const SiteBottomMenu = "";
const SiteTop = "";
const main = "";
(function() {
  var $ = window.jQuery;
  var $header = $(".site-header");
  var $searchBtn = $(".site-header__search", $header);
  var $hamburger = $(".site-hamburger", $header);
  $searchBtn.on("click", function(e) {
    $(window).trigger("open-site-search");
  });
  $hamburger.on("click", function(e) {
    $(window).trigger("toggle-site-sub");
  });
  $(window).on("toggle-site-sub", function(e) {
    $hamburger.toggleClass("site-hamburger_active");
  });
  var scheduledAnimationFrame = false;
  function readAndUpdate() {
    scheduledAnimationFrame = false;
    document.documentElement.style.setProperty(
      "--header-bottom",
      $header[0].getBoundingClientRect().bottom
    );
    performance.mark("blah");
  }
  readAndUpdate();
  $(window).on("scroll resize", function() {
    if (scheduledAnimationFrame)
      return;
    scheduledAnimationFrame = true;
    requestAnimationFrame(readAndUpdate);
  });
})();
(function() {
  var $ = window.jQuery;
  var $search = $(".site-search");
  var $close = $(".site-search__close", $search);
  var $input = $(".site-search__input", $search);
  $(window).on("open-site-search", function(e) {
    $search.addClass("site-search_open");
    $input.focus();
  });
  $close.on("click", function(e) {
    $search.removeClass("site-search_open");
  });
})();
(function() {
  var $ = window.jQuery;
  var $itemMain = $(".site-nav__item").has(".site-nav__burger");
  var $linkMain = $(".site-nav__link", $itemMain);
  $linkMain.on("click", function(e) {
    e.preventDefault();
    $(window).trigger("toggle-site-sub");
  });
  $(window).on("toggle-site-sub", function(e) {
    $itemMain.toggleClass("site-nav__item_active");
  });
})();
(function() {
  var $ = window.jQuery;
  var $sub = $(".site-sub");
  var $navItems = $(".site-sub__nav-item.menu-item-has-children", $sub);
  var $navLinks = $(".site-sub__nav-link", $navItems);
  var $panels = $(".site-sub__panel", $navItems);
  var $panelsEl = $(".site-sub__panels", $sub);
  var $panelBack = $(".site-sub__panel-back", $sub);
  var $panelLegend = $(".site-sub__panel-legend", $sub);
  $panels.appendTo($panelsEl).hide().first().show();
  function togglePanel(e) {
    e.preventDefault();
    var index = $navLinks.index(e.currentTarget);
    var $panel = $panels.eq(index);
    $panels.hide();
    $panel.show();
  }
  var prevWidth = null;
  $(window).on("resize.site-sub", function() {
    if (window.innerWidth < 969 && (prevWidth === null || prevWidth >= 969)) {
      $navLinks.off("mouseenter focus").on("click", function(e) {
        togglePanel(e);
        $sub.addClass("site-sub_moved");
      });
      $panelLegend.on("click", function(e) {
        e.preventDefault();
        $(this).next().slideToggle(150);
      });
      $panelBack.on("click", function(e) {
        $sub.removeClass("site-sub_moved");
      });
    } else if (window.innerWidth >= 969 && (prevWidth === null || prevWidth < 969)) {
      $sub.removeClass("site-sub_moved");
      $navLinks.off("click").on("mouseenter focus", function(e) {
        togglePanel(e);
      });
      $panelLegend.off("click");
      $panelBack.on("click");
    }
    prevWidth = window.innerWidth;
  }).trigger("resize.site-sub");
  $(window).on("toggle-site-sub", function(e) {
    $sub.toggleClass("site-sub_open");
  });
})();
