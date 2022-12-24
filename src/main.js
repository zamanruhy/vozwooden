import './main.css'

// SiteHeader
;(function () {
  var $ = window.jQuery
  var $header = $('.site-header')
  var $searchBtn = $('.site-header__search', $header)
  var $hamburger = $('.site-hamburger', $header)

  $searchBtn.on('click', function (e) {
    $(window).trigger('open-site-search')
  })

  $hamburger.on('click', function (e) {
    $(window).trigger('toggle-site-drawer')
  })

  $(window).on('toggle-site-drawer', function (e) {
    $hamburger.toggleClass('site-hamburger_active')
  })
})()

// SiteSearch
;(function () {
  var $ = window.jQuery
  var $search = $('.site-search')
  var $close = $('.site-search__close', $search)
  var $input = $('.site-search__input', $search)

  $(window).on('open-site-search', function (e) {
    $search.addClass('site-search_open')
    $input.focus()
  })

  $close.on('click', function (e) {
    $search.removeClass('site-search_open')
  })
})()

// SiteNav
;(function () {
  var $ = window.jQuery
  var $itemMain = $('.site-nav__item_main')
  var $linkMain = $('.site-nav__link', $itemMain)

  $linkMain.on('click', function (e) {
    e.preventDefault()
    $(window).trigger('toggle-site-sub')
  })

  $(window).on('toggle-site-sub', function (e) {
    $itemMain.toggleClass('site-nav__item_active')
  })
})()

// SiteSub
;(function () {
  var $ = window.jQuery
  var $sub = $('.site-sub')
  var $navLinkEls = $('.site-sub__nav-link[data-id]', $sub)
  var $panels = $('.site-sub__panel', $sub)

  $navLinkEls.on('mouseenter focus', function (e) {
    var $that = $(e.target)
    var id = $that.data('id')
    var $panel = $panels.filter(`[data-id='${id}']`)
    $panels.hide()
    $panel.show()
  })

  $(window).on('toggle-site-sub', function (e) {
    $sub.toggleClass('site-sub_open')
  })
})()

// SiteDrawer
;(function () {
  var $ = window.jQuery
  var $drawer = $('.site-drawer')
  var $navLinks = $('.site-drawer__nav-link[data-id]', $drawer)
  var $panels = $('.site-drawer__panel', $drawer)
  var $panelBack = $('.site-drawer__panel-back', $drawer)
  var $panelLegend = $('.site-drawer__panel-legend', $drawer)

  $navLinks.on('click', function (e) {
    e.preventDefault()
    var $that = $(e.target)
    var id = $that.data('id')
    var $panel = $panels.filter(`[data-id='${id}']`)
    $panels.hide()
    $panel.show().width()
    $drawer.addClass('site-drawer_moved')
  })

  $panelBack.on('click', function (e) {
    $drawer.removeClass('site-drawer_moved')
  })

  // $(window).on('toggle-site-sub', function (e) {
  //   $sub.toggleClass('site-sub_open')
  // })

  $(window).on('toggle-site-drawer', function (e) {
    console.log('dsfd')
    var node = $drawer[0]
    if (node.hasAttribute('inert')) {
      node.removeAttribute('inert')
    } else {
      node.setAttribute('inert', '')
    }
  })

  $panelLegend.on('click', function (e) {
    e.preventDefault()
    $(this).next().slideToggle(150)
  })
})()
