import rightArrow from '../../../public/images/pages/rightArrow.png'
import Image from 'next/image'
import Workforce from '../../../public/images/pages/Workforce.png'
import strokeline from '../../../public/images/pages/strokeline.png'
import Link from 'next/link'

const data = [
  {
    title: 'Basic',
    discription:
      'Empower your decisions with our Consulting services. Gain strategic insights tailored to your unique challenges, ensuring you are equipped to make informed choices that lead to lasting success.',
    price: '1550'
  },
  {
    title: 'Standard',
    discription:
      'Revolutionize your operations with Implementation services that seamlessly integrate cutting-edge technologies into your existing setup. Transform your systems effortlessly for a future-ready infrastructure.',
    price: '2550'
  },
  {
    title: 'Premium',
    discription:
      'Ensure the uninterrupted flow of your operations with our Managed Services. Enjoy 24/7 support that actively monitors, manages, and troubleshoots issues, providing you with the reliability and stability your business demands.',
    price: '5560'
  }
]

export function ComperehansiveOffers() {
  return (
    <div className='pt-9 lg:px-40'>
      <div className='px-[20px] items-center flex flex-col lg:flex-row  justify-center lg:justify-start'>
        <div className='text-center lg:text-left items-center flex flex-col justify-center lg:items-start '>
          <h1 className='font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[62px]'>Unlock Our </h1>
          {/* <Image className='relative' src={strokeline} width={250} alt='line' /> */}
          <h1 className='font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[62px]'>
            Comprehensive Offerings
          </h1>

          <p className='text-[#102356] font-regular text-[18px] leading-[30px]'>
            Embark on a journey to master the art of digital entrepreneurship with our industry-leading courses, crafted
            by experienced trainers. Unlock the best knowledge and expertise to propel your success in the digital
            world.
          </p>
        </div>
      </div>
      <div className='flex gap-[40px] pt-9 flex-col lg:flex-row px-12'>
        {data.map((item, index) => (
          <div
            key={index}
            className='group lg:h-[500px] lg:w-[558px] rounded-lg shadow-xl hover:bg-[#102356] hover:border-4 hover:border-[#ABE03C]'
          >
            <p className='px-10 py-10 font-bold text-[30px] text-[#102356] group-hover:text-white '>{item.title}</p>
            <p className='px-10 lg:pb-0 group-hover:text-white  pb-10 font-regular text-[#4A4A4A] text-[18px]'>
              {item.discription}
            </p>
            <p className='px-10 py-10 font-bold text-[30px] text-[#102356] group-hover:text-white '>Rs {item.price}</p>
            <Link href='/pages/register' passHref>
              <button className='bg-[ABE03C] flex font-medium bg-[#ABE03C] h-[60px] w-[228px] items-center justify-center rounded-lg text-[#102356] cursor-pointer lg:ml-10 hover:text-[#FFF] min-[430px]:m-5 min-[390px]:m-5'>
                Get Started
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
