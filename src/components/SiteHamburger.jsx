import { splitProps } from 'solid-js'

import './SiteHamburger.css'

export default function SiteHamburger(props) {
  const [, rest] = splitProps(props, ['active', 'className'])

  return (
    <button
      class="site-hamburger"
      classList={{ [props.className]: Boolean(props.className) }}
      type="button"
      aria-label="Переключить меню"
      {...rest}
    >
      <span class="site-hamburger__bar" />
      <span class="site-hamburger__bar" />
      <span class="site-hamburger__bar" />
    </button>
  )
}
