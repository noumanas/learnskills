import rightArrow from '../../../public/images/pages/rightArrow.png'
import Image from 'next/image'
import Imagecontainer2 from '../../../public/images/pages/Imagecontainer2.png'
import strokeline from '../../../public/images/pages/strokeline.png'

export function RapidDigtal() {
  return (
    <div className='pt-9 lg:px-40'>
      <div className='px-[20px] text-center items-center flex flex-col lg:flex-row  justify-center lg:text-left '>
        <div className='text-center lg:text-left items-center flex flex-col justify-center lg:items-start '>
          <h1 className='font-extrabold text-[36px] font-Inter text-[#ffffff] lg:text-[72px]'>Your Rapid Digital</h1>
          <Image className='relative lg:left-40' src={strokeline} width={250} alt='line' />
          <h1 className='font-extrabold text-[36px] font-Inter text-[#ffffff] lg:text-[72px]'>
            {' '}
            Transformation Partner
          </h1>

          <p className='text-[#fff] font-regular text-[18px] leading-[30px]'>
            Since our inception, We have been a trailblazer in the DX space, operating globally with a strong focus on
            the Middle East. Collaborating seamlessly with both Government and Private Sector organizations, we bring
            innovation, talent and reliability to the forefront.
          </p>
          <button className='mt-10 bg-[ABE03C] flex font-medium bg-[#ABE03C] h-[60px] w-[228px] items-center justify-center rounded-lg text-[#102356]'>
            Explore our services
            <Image src={rightArrow} className='ml-2' alt='rightArrow' />
          </button>
        </div>

        <Image src={Imagecontainer2} alt='container' width={700} height={549} className=' lg:block mb-40 mt-20' />
      </div>
    </div>
  )
}
