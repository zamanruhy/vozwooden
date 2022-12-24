import UserIcon from '../icons/user.svg?component'
import CubeIcon from '../icons/cube.svg?component'
import HeartIcon from '../icons/heart.svg?component'
import CartIcon from '../icons/cart.svg?component'

import './SiteBottomMenu.css'

export default function SiteBottomMenu() {
  return (
    <nav className="site-bottom-menu">
      <a href="#" className="site-bottom-menu__item">
        <UserIcon className="site-bottom-menu__icon" />
      </a>
      <a href="#" className="site-bottom-menu__item">
        <CubeIcon className="site-bottom-menu__icon" />
      </a>
      <a href="#" className="site-bottom-menu__item">
        <HeartIcon className="site-bottom-menu__icon" />
      </a>
      <a href="#" className="site-bottom-menu__item">
        <CartIcon className="site-bottom-menu__icon" />
      </a>
    </nav>
  )
}
