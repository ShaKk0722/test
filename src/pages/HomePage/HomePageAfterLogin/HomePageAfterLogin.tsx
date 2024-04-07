import SlideShowCustom, { SlideShow } from 'src/components/SlideShowCustom'
import NotificationsHomeLogged from './components/Notification'
import { notification } from './utils/test'
import mainPath, { personalPath } from 'src/constants/path'
import { useEffect, useRef, useState } from 'react'

const slides: SlideShow[] = [
  {
    urlImage: 'https://lms.hcmut.edu.vn/pluginfile.php/3/theme_academi/slide2image/1712311766/slbktv.jpg',
    title: 'Trang hồ sơ',
    urlToPage: mainPath.personal
  },
  {
    urlImage: 'https://lms.hcmut.edu.vn/pluginfile.php/3/theme_academi/slide2image/1712311766/slbktv.jpg',
    title: 'Trang tài khoản',
    urlToPage: personalPath.account
  },
  {
    urlImage: 'https://lms.hcmut.edu.vn/pluginfile.php/3/theme_academi/slide2image/1712311766/slbktv.jpg',
    title: 'Trang thông báo',
    urlToPage: ''
  }
]

export default function HomePageAfterLogin() {
  const notificationRef = useRef<HTMLDivElement | null>(null)
  const [slideTitle, setSlideTitle] = useState<{ name: string } | null>(null)

  useEffect(() => {
    if (notificationRef?.current && slideTitle?.name === slides[2].title) {
      const offset = 80
      window.scrollTo({
        top: notificationRef.current.offsetTop - offset,
        behavior: 'smooth'
      })
    }
  }, [slideTitle])

  return (
    <div className='flex flex-col h-full justify-between shrink-0 '>
      <div className='max-w-1200 w-full aspect-w-10 aspect-h-6 mx-auto'>
        <SlideShowCustom slides={slides} onSetSlideTitle={setSlideTitle} />
      </div>
      <div className='bg-white m-0 p-10' ref={notificationRef}>
        <div className='max-w-[1140px] font-bold text-[34px] text-[#044CC8] mx-auto my-0 '>
          Thông báo chung / Site announcements
        </div>
        <div className='py-3'></div>
        <NotificationsHomeLogged notifications={notification} />
      </div>
    </div>
  )
}
