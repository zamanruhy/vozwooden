import PinIcon from '../icons/pin.svg?component'
import CaretIcon from '../icons/caret.svg?component'
import TruckIcon from '../icons/truck.svg?component'
import PhoneIcon from '../icons/phone.svg?component'
import ClockIcon from '../icons/clock.svg?component'

import './SiteTop.css'

export default function SiteTop() {
  return (
    <div className="site-top">
      <div className="site-top__container">
        <div className="site-top__inner">
          <div className="site-top__dd">
            <PinIcon className="site-top__dd-icon" />
            <button type="button" className="site-top__dd-button">
              Россия
              <CaretIcon className="site-top__dd-caret" />
            </button>
          </div>

          <div className="site-top__delivery">
            <TruckIcon className="site-top__delivery-icon" />
            Доставка бесплатно при заказе от 2500 руб.
          </div>

          <div className="site-top__inner"></div>

          <div className="site-top__phone">
            <PhoneIcon className="site-top__phone-icon" />
            <a href="tel:88006004250" className="site-top__phone-number">
              8 (800) 600-42-50
            </a>
          </div>

          <div className="site-top__work">
            <ClockIcon className="site-top__work-icon" />
            Ежедневно с 9.00 до 21.00
          </div>

          <button type="button" className="site-top__callback">
            Заказать звонок
          </button>
        </div>
      </div>
    </div>
  )
}
