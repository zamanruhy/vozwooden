// import CaretIcon from '../icons/caret.svg?component'
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
      <div className="site-nav__inner">
        <nav className="site-container">
          <ul className="site-nav__list">
            {links.map(({ href, text, isDD }, i) => (
              <li
                className="site-nav__item"
                classList={{
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
                  {/* {isDD && <CaretIcon className="site-nav__caret" />} */}
                </a>
                {isDD && (
                  <ul className="site-nav__dd">
                    <li>
                      <a href="#" className="site-nav__dd-link">
                        Доставка и оплата
                      </a>
                    </li>
                    <li>
                      <a href="#" className="site-nav__dd-link">
                        Возврат и гарантия
                      </a>
                    </li>
                    <li>
                      <a href="#" className="site-nav__dd-link">
                        Отслеживание заказа
                      </a>
                    </li>
                    <li>
                      <a href="#" className="site-nav__dd-link">
                        Видеоинструкция
                      </a>
                    </li>
                    <li>
                      <a href="#" className="site-nav__dd-link">
                        Отзывы
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <SiteSub />
    </div>
  )
}
