import CaretIcon from '../icons/caret.svg?component'
import SiteSub from './SiteSub'

import './SiteNav.css'

const links = [
  { href: '#', text: 'каталог' },
  { href: '#', text: 'CS:GO' },
  { href: '#', text: 'STANDOFF 2' },
  { href: '#', text: 'Кейсы' },
  { href: '#', text: 'Дропы' },
  { href: '#', text: 'Наборы' },
  { href: '#', text: 'конструктор' },
  { href: '#', text: 'покупателям', isDD: true }
]

export default function SiteNav() {
  return (
    <div className="site-nav">
      <nav className="site-container">
        <ul className="site-nav__list">
          {links.map(({ href, text, isDD }, i) => (
            <li
              className="site-nav__item"
              classList={{
                'site-nav__item_main': i === 0,
                'site-nav__item_dd': Boolean(isDD)
              }}
            >
              <a href={href} className="site-nav__link">
                {i === 0 && (
                  <div class="site-nav__burger">
                    <span class="site-nav__burger-bar" />
                    <span class="site-nav__burger-bar" />
                    <span class="site-nav__burger-bar" />
                  </div>
                )}
                {text}
                {isDD && <CaretIcon className="site-nav__caret" />}
              </a>
              {isDD && (
                <div className="site-nav__dd">
                  <div className="site-nav__dd-content">
                    <a href="#" className="site-nav__dd-link">
                      Доставка и оплата
                    </a>
                    <a href="#" className="site-nav__dd-link">
                      Возврат и гарантия
                    </a>
                    <a href="#" className="site-nav__dd-link">
                      Отслеживание заказа
                    </a>
                    <a href="#" className="site-nav__dd-link">
                      Видеоинструкция
                    </a>
                    <a href="#" className="site-nav__dd-link">
                      Отзывы
                    </a>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <SiteSub />
    </div>
  )
}
