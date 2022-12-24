import LogoIcon from '../icons/logo.svg?component'
import UserIcon from '../icons/user.svg?component'
import CubeIcon from '../icons/cube.svg?component'
import HeartIcon from '../icons/heart.svg?component'
import CartIcon from '../icons/cart.svg?component'
import MagIcon from '../icons/mag.svg?component'

import './SiteHeader.css'

import SiteHamburger from './SiteHamburger'
import SiteSearch from './SiteSearch'
import SiteNav from './SiteNav'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container">
        <div className="site-header__content">
          <SiteHamburger />
          <a href="." className="site-header__logo">
            <LogoIcon className="site-header__logo-icon" />
            <div className="site-header__logo-text">
              <div className="site-header__logo-title">VozWooden</div>
              <div className="site-header__logo-lead">игрушки из дерева</div>
            </div>
          </a>
          <SiteSearch />
          <nav className="site-header__menu">
            <a href="#" className="site-header__menu-item">
              <UserIcon className="site-header__menu-icon" />
              <span className="site-header__menu-text">Кабинет</span>
            </a>
            <a href="#" className="site-header__menu-item">
              <CubeIcon className="site-header__menu-icon" />
              <span className="site-header__menu-text">Где заказать</span>
            </a>
            <a href="#" className="site-header__menu-item">
              <HeartIcon className="site-header__menu-icon" />
              <span className="site-header__menu-text">Избранное</span>
            </a>
            <a href="#" className="site-header__menu-item">
              <CartIcon className="site-header__menu-icon" />
              <span className="site-header__menu-text">Корзина</span>
            </a>
          </nav>
          <button type="button" className="site-header__search">
            <MagIcon className="site-header__search-icon" />
          </button>
        </div>
      </div>
      <SiteNav />
    </header>
  )
}
