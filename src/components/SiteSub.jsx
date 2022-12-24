import banner1Img from '../images/banner-1.jpg?jpg'
import banner2Img from '../images/banner-2.jpg?jpg'
import GearIcon from '../icons/gear.svg?component'
import RifleIcon from '../icons/rifle.svg?component'
import SiteBanner from './SiteBanner'
import SiteButton from './SiteButton'

import './SiteSub.css'

export default function SiteSub() {
  return (
    <div className="site-sub">
      <div className="site-container">
        <div className="site-sub__content">
          <nav className="site-sub__nav">
            <h3 className="site-sub__nav-legend">Весь каталог</h3>
            <ul className="site-sub__nav-list">
              <li className="site-sub__nav-item menu-item-has-children">
                <a href="#" className="site-sub__nav-link">
                  Каталог CS:GO
                </a>
                <Panel id="CS:GO" idx={0} />
              </li>
              <li className="site-sub__nav-item menu-item-has-children">
                <a href="#" className="site-sub__nav-link">
                  Каталог Standoff 2
                </a>
                <Panel id="Standoff 2" idx={1} />
              </li>
              <li className="site-sub__nav-item">
                <a href="#" className="site-sub__nav-link">
                  Конструктор наборов
                </a>
              </li>
              <li className="site-sub__nav-item">
                <a href="#" className="site-sub__nav-link">
                  Наборы оружия
                </a>
              </li>
            </ul>
            <h3 className="site-sub__nav-legend">Спецпредложение</h3>
            <ul className="site-sub__nav-list">
              <li className="site-sub__nav-item">
                <a href="#" className="site-sub__nav-link">
                  Кейс “Летнее обновление”
                </a>
              </li>
              <li className="site-sub__nav-item">
                <a href="#" className="site-sub__nav-link">
                  Дроп “Летнее обновление”
                </a>
              </li>
            </ul>
            <h3 className="site-sub__nav-legend">Покупателям</h3>
            <ul className="site-sub__nav-list">
              <li className="site-sub__nav-item">
                <a href="#" className="site-sub__nav-link">
                  Доставка и оплата
                </a>
              </li>
              <li className="site-sub__nav-item">
                <a href="#" className="site-sub__nav-link">
                  Возврат и гарантия
                </a>
              </li>
              <li className="site-sub__nav-item">
                <a href="#" className="site-sub__nav-link">
                  Отслеживание заказа
                </a>
              </li>
              <li className="site-sub__nav-item">
                <a href="#" className="site-sub__nav-link">
                  Видеоинструкция
                </a>
              </li>
              <li className="site-sub__nav-item">
                <a href="#" className="site-sub__nav-link">
                  Акции
                </a>
              </li>
              <li className="site-sub__nav-item">
                <a href="#" className="site-sub__nav-link">
                  Отзывы
                </a>
              </li>
            </ul>
          </nav>
          <div className="site-sub__panels"></div>
          <div className="site-sub__banners">
            <SiteBanner src={banner1Img} />
            <SiteBanner src={banner2Img} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Panel({ id, idx }) {
  return (
    <nav className="site-sub__panel">
      <div className="site-sub__panel-body">
        <button type="button" className="site-sub__panel-back">
          Каталог {id}
        </button>
        {Array.from({ length: idx > 0 ? 1 : 3 }).map((_) => (
          <>
            <div className="site-sub__panel-group">
              <a href="#" className="site-sub__panel-legend">
                Автоматы {id}
              </a>
              <ul className="site-sub__panel-list">
                <li className="site-sub__panel-item">
                  <a href="#" className="site-sub__panel-link">
                    MAC-10
                  </a>
                </li>
                <li className="site-sub__panel-item">
                  <a href="#" className="site-sub__panel-link">
                    AK-47
                  </a>
                </li>
                <li className="site-sub__panel-item">
                  <a href="#" className="site-sub__panel-link">
                    UMP-45
                  </a>
                </li>
                <li className="site-sub__panel-item">
                  <a href="#" className="site-sub__panel-link">
                    M4A4
                  </a>
                </li>
              </ul>
            </div>
            <div className="site-sub__panel-group">
              <a href="#" className="site-sub__panel-legend">
                Аксессуары {id}
              </a>
              <ul className="site-sub__panel-list">
                <li className="site-sub__panel-item">
                  <a href="#" className="site-sub__panel-link">
                    Мишени
                  </a>
                </li>
                <li className="site-sub__panel-item">
                  <a href="#" className="site-sub__panel-link">
                    Подставки
                  </a>
                </li>
                <li className="site-sub__panel-item">
                  <a href="#" className="site-sub__panel-link">
                    Аксессуары
                  </a>
                </li>
                <li className="site-sub__panel-item">
                  <a href="#" className="site-sub__panel-link">
                    Комплекты резинок
                  </a>
                </li>
                <li className="site-sub__panel-item">
                  <a href="#" className="site-sub__panel-link">
                    Наклейки
                  </a>
                </li>
                <li className="site-sub__panel-item">
                  <a href="#" className="site-sub__panel-link">
                    Фонарь для автоматов
                  </a>
                </li>
              </ul>
            </div>
          </>
        ))}
      </div>
      <div className="site-sub__panel-footer">
        <div className="site-sub__panel-action">
          <SiteButton as="a" href="#" variant="primary" size="md">
            <GearIcon style="height: 18px; margin-right: 10px" />
            Создайте свой набор
          </SiteButton>
        </div>
        <div className="site-sub__panel-action">
          <SiteButton as="a" href="#" variant="secondary" size="md">
            <RifleIcon style="height: 18px; margin-right: 10px" />
            Наборы оружия
          </SiteButton>
        </div>
      </div>
    </nav>
  )
}
