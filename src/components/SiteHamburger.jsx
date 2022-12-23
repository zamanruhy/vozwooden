import { splitProps } from 'solid-js'

import './SiteHamburger.css'

export default function SiteHamburger(props) {
  const [, rest] = splitProps(props, ['active', 'classList'])

  return (
    <button
      class="site-hamburger"
      classList={{ [props.classList]: Boolean(props.classList) }}
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
