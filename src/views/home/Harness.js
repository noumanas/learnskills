import rightArrowWhite from '../../../public/images/pages/rightArrowWhite.png'
import Image from 'next/image'
import harnessContainer from '../../../public/images/pages/harnessContainer.png'
import Imagecontainer2 from '../../../public/images/pages/Imagecontainer2.png'
import strokeline from '../../../public/images/pages/strokeline.png'

export function Harness() {
  return (
    <div className='pt-9 lg:px-40 lg:py-40'>
      <div className='px-[20px] items-center flex flex-col lg:flex-row  justify-center'>
        <div className='text-center lg:text-left items-center flex flex-col justify-center lg:items-start '>
          <h1 className='font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[62px]'>Harness Your</h1>
          {/* <Image className='relative' src={strokeline} width={300} alt='line' /> */}
          <h1 className='font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[62px]'>Unique Potential</h1>

          <p className='text-[#102356] font-regular text-[18px] leading-[30px]'>
            Our strength lies in crafting bespoke transformation solutions tailored to your organization&apos;s distinct
            needs, ensuring a seamless and effective journey towards digital excellence.
          </p>
          <button className='mt-10 bg-[#102356] flex font-medium h-[60px] w-[228px] items-center justify-center rounded-lg text-[#FFFFFF]'>
            Get Started
            <Image src={rightArrowWhite} className='ml-2' height={14} width={14} alt='rightArrow' />
          </button>
        </div>

        {/* <Image src={Imagecontainer} alt="container" className="mt-40 mb-40 lg:hidden"/> */}
        <Image src={harnessContainer} alt='container' width={700} height={549} className='lg:block mb-40 mt-20' />
      </div>
    </div>
  )
}
