import GearIcon from '../icons/gear.svg?component'
import RifleIcon from '../icons/rifle.svg?component'
import SiteButton from './SiteButton'

import './SiteDrawer.css'

export default function SiteDrawer() {
  return (
    <div className="site-drawer" inert>
      <nav className="site-drawer__nav">
        <h3 className="site-drawer__nav-legend">Весь каталог</h3>
        <ul className="site-drawer__nav-list">
          <li className="site-drawer__nav-item">
            <a href="#" className="site-drawer__nav-link" data-id="csgo">
              Каталог CS:GO
            </a>
          </li>
          <li className="site-drawer__nav-item">
            <a href="#" className="site-drawer__nav-link" data-id="standoff">
              Каталог Standoff 2
            </a>
          </li>
          <li className="site-drawer__nav-item">
            <a href="#" className="site-drawer__nav-link">
              Конструктор наборов
            </a>
          </li>
          <li className="site-drawer__nav-item">
            <a href="#" className="site-drawer__nav-link">
              Наборы оружия
            </a>
          </li>
        </ul>
        <h3 className="site-drawer__nav-legend">Спецпредложение</h3>
        <ul className="site-drawer__nav-list">
          <li className="site-drawer__nav-item">
            <a href="#" className="site-drawer__nav-link">
              Кейс “Летнее обновление”
            </a>
          </li>
          <li className="site-drawer__nav-item">
            <a href="#" className="site-drawer__nav-link">
              Дроп “Летнее обновление”
            </a>
          </li>
        </ul>
        <h3 className="site-drawer__nav-legend">Покупателям</h3>
        <ul className="site-drawer__nav-list">
          <li className="site-drawer__nav-item">
            <a href="#" className="site-drawer__nav-link">
              Доставка и оплата
            </a>
          </li>
          <li className="site-drawer__nav-item">
            <a href="#" className="site-drawer__nav-link">
              Возврат и гарантия
            </a>
          </li>
          <li className="site-drawer__nav-item">
            <a href="#" className="site-drawer__nav-link">
              Отслеживание заказа
            </a>
          </li>
          <li className="site-drawer__nav-item">
            <a href="#" className="site-drawer__nav-link">
              Видеоинструкция
            </a>
          </li>
          <li className="site-drawer__nav-item">
            <a href="#" className="site-drawer__nav-link">
              Акции
            </a>
          </li>
          <li className="site-drawer__nav-item">
            <a href="#" className="site-drawer__nav-link">
              Отзывы
            </a>
          </li>
        </ul>
      </nav>

      {['csgo', 'standoff'].map((id, idx) => (
        <nav
          className="site-drawer__panel"
          data-id={id}
          style={idx > 0 ? { display: 'none' } : null}
        >
          <div className="site-drawer__panel-body">
            <button type="button" className="site-drawer__panel-back">
              Каталог {id}
            </button>
            {Array.from({ length: idx > 0 ? 2 : 3 }).map((_, i) => (
              <>
                <a href="#" className="site-drawer__panel-legend">
                  Автоматы {id}
                </a>
                <ul
                  className="site-drawer__panel-list"
                  style={{ display: 'none' }}
                >
                  <li className="site-drawer__panel-item">
                    <a href="#" className="site-drawer__panel-link">
                      MAC-10
                    </a>
                  </li>
                  <li className="site-drawer__panel-item">
                    <a href="#" className="site-drawer__panel-link">
                      AK-47
                    </a>
                  </li>
                  <li className="site-drawer__panel-item">
                    <a href="#" className="site-drawer__panel-link">
                      UMP-45
                    </a>
                  </li>
                  <li className="site-drawer__panel-item">
                    <a href="#" className="site-drawer__panel-link">
                      M4A4
                    </a>
                  </li>
                </ul>
                <a href="#" className="site-drawer__panel-legend">
                  Аксессуары {id}
                </a>
                <ul
                  className="site-drawer__panel-list"
                  style={{ display: 'none' }}
                >
                  <li className="site-drawer__panel-item">
                    <a href="#" className="site-drawer__panel-link">
                      Мишени
                    </a>
                  </li>
                  <li className="site-drawer__panel-item">
                    <a href="#" className="site-drawer__panel-link">
                      Подставки
                    </a>
                  </li>
                  <li className="site-drawer__panel-item">
                    <a href="#" className="site-drawer__panel-link">
                      Аксессуары
                    </a>
                  </li>
                  <li className="site-drawer__panel-item">
                    <a href="#" className="site-drawer__panel-link">
                      Комплекты резинок
                    </a>
                  </li>
                  <li className="site-drawer__panel-item">
                    <a href="#" className="site-drawer__panel-link">
                      Наклейки
                    </a>
                  </li>
                  <li className="site-drawer__panel-item">
                    <a href="#" className="site-drawer__panel-link">
                      Фонарь для автоматов
                    </a>
                  </li>
                </ul>
              </>
            ))}
          </div>

          <div className="site-drawer__panel-footer">
            <div className="site-drawer__panel-action">
              <SiteButton as="a" href="#" variant="primary" size="md" block>
                <GearIcon style="height: 18px; margin-right: 10px" />
                Создайте свой набор
              </SiteButton>
            </div>
            <div className="site-drawer__panel-action">
              <SiteButton as="a" href="#" variant="secondary" size="md" block>
                <RifleIcon style="height: 18px; margin-right: 10px" />
                Наборы оружия
              </SiteButton>
            </div>
          </div>
        </nav>
      ))}
    </div>
  )
}
