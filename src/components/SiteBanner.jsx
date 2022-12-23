import Image from './Image'

import './SiteBanner.css'

export default function SiteBanner({ src }) {
  return (
    <a href="#" className="site-banner">
      <Image
        src={src}
        alt="#"
        loading="lazy"
        decoding="async"
        className="site-banner__img"
      />
    </a>
  )
}
