const SiteHeader = "";
const SiteHamburger = "";
const SiteSearch = "";
const SiteMobileMenu = "";
const SiteBanner = "";
const SiteButton = "";
const SiteSub = "";
const SiteNav = "";
const SiteTop = "";
const main = "";
(function() {
  var $ = window.jQuery;
  var $searchBtn = $(".site-header__search");
  $searchBtn.on("click", function(e) {
    $(window).trigger("open-site-search");
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
  var $itemMain = $(".site-nav__item_main");
  var $linkMain = $itemMain.find(".site-nav__link");
  $linkMain.on("click", function(e) {
    e.preventDefault();
    $itemMain.toggleClass("site-nav__item_active");
    $(window).trigger("toggle-site-sub");
  });
})();
(function() {
  var $ = window.jQuery;
  var $sub = $(".site-sub");
  var $navLinkEls = $(".site-sub__nav-link[data-id]", $sub);
  var $panels = $(".site-sub__panel", $sub);
  $navLinkEls.on("mouseenter focus", function(e) {
    var $that = $(e.target);
    var id = $that.data("id");
    var $panel = $panels.filter(`[data-id='${id}']`);
    $panels.hide();
    $panel.show();
  });
  $(window).on("toggle-site-sub", function(e) {
    $sub.toggleClass("site-sub_open");
  });
})();
