import Image from 'next/image'
import Logo from '../../../public/images/pages/Logo.png'
import Btn from '../../../public/images/pages/Btn.png'
import rightArrow from '../../../public/images/pages/rightArrow.png'
import Link from 'next/link'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/pages/register' },
  // { name: 'Vendors', href: '/vendors' },
  // { name: 'Industries', href: '/industries' },
  { name: 'About', href: '/' },
  { name: 'Careers', href: '/' }
  // { name: 'Resource Augmentation', href: '/resourceAugmentation' }
]
export function Navbar() {
  return (
    <nav className='bg-[#0f2152] flex w-full items-center justify-between px-[20px] py-[16px]  lg:mx-auto lg:px-20'>
      <div>
        <h1 className='font-extrabold text-[26px] font-Inter text-[#ffffff] lg:text-[32px]'>Learn Skills</h1>
        {/* <Image src={Logo} alt='Logo' height={37} width={223} /> */}
      </div>
      <div>
        <div className='hidden lg:flex pl-[74px] gap-x-[56px] items-center justify-center'>
          {navLinks.map((item, index) => (
            <Link href={item.href} key={index} passHref>
              <li className='font-medium text-[#ffffff] decoration-0 list-none cursor-pointer'>{item.name}</li>
            </Link>
          ))}
          <Link href='/pages/login' passHref>
            <button className='bg-[ABE03C] flex font-medium bg-[#ABE03C] h-[60px] w-[228px] items-center justify-center rounded-lg text-[#102356] cursor-pointer'>
              Login
              <Image src={rightArrow} className='ml-2' alt='rightArrow' />
            </button>
          </Link>
        </div>
        {/* <Image src={Btn} alt='Menubtn' className='lg:hidden' /> */}
      </div>
    </nav>
  )
}
