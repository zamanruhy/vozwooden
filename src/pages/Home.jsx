import SiteHeader from '@/components/SiteHeader'
import SiteMobileMenu from '@/components/SiteMobileMenu'
import SiteNav from '@/components/SiteNav'
import SiteTop from '@/components/SiteTop'

export default function Home() {
  return (
    <>
      <SiteTop />
      <SiteHeader />
      <SiteNav />
      <SiteMobileMenu />
      <div style={{ height: '300vh' }}>
        <img
          src="https://vozwooden.ru/wp-content/uploads/2022/11/newyearbk-1-768x432.jpg"
          alt="#"
          style={{ width: '100%' }}
        />
      </div>
    </>
  )
}
