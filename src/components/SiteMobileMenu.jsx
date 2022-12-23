import UserIcon from '../icons/user.svg?component'
import CubeIcon from '../icons/cube.svg?component'
import HeartIcon from '../icons/heart.svg?component'
import CartIcon from '../icons/cart.svg?component'

import './SiteMobileMenu.css'

export default function SiteMobileMenu() {
  return (
    <nav className="site-mobile-menu">
      <a href="#" className="site-mobile-menu__item">
        <UserIcon className="site-mobile-menu__icon" />
      </a>
      <a href="#" className="site-mobile-menu__item">
        <CubeIcon className="site-mobile-menu__icon" />
      </a>
      <a href="#" className="site-mobile-menu__item">
        <HeartIcon className="site-mobile-menu__icon" />
      </a>
      <a href="#" className="site-mobile-menu__item">
        <CartIcon className="site-mobile-menu__icon" />
      </a>
    </nav>
  )
}
