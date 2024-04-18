import rightArrowWhite from '../../../public/images/pages/rightArrowWhite.png'
import Image from 'next/image'
import navigate from '../../../public/images/pages/navigate.png'
import Imagecontainer2 from '../../../public/images/pages/Imagecontainer2.png'
import strokeline from '../../../public/images/pages/strokeline.png'

export function BenefitNavigate() {
  return (
    <div className='pt-10 lg:px-40'>
      <div className='px-[20px] items-center flex flex-col-reverse lg:flex-row  justify-center gap-x-8'>
        {/* <Image src={Imagecontainer} alt="container" className="mt-40 mb-40 lg:hidden"/> */}
        <Image src={navigate} alt='container' height={1000} width={1400} className='lg:block mb-40 mt-20' />

        <div className='text-center lg:text-left items-center flex flex-col justify-center lg:items-start lg:ml-20'>
          <h1 className='font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[62px]'>Navigate</h1>
          <Image className='relative' src={strokeline} width={250} alt='line' />
          <h1 className='font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[62px]'>Flawlessly</h1>

          <p className='text-[#102356] font-regular text-[12px] leading-[30px]'>
            Benefit from our global reach and local expertise, seamlessly integrating international best practices with
            in-depth understanding of regional nuances to drive your business forward.
          </p>
        </div>
      </div>
    </div>
  )
}
