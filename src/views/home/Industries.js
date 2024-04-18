import rightArrow from '../../../public/images/pages/rightArrow.png'
import Image from 'next/image'
import Workforce from '../../../public/images/pages/Workforce.png'
import publicsector from '../../../public/images/pages/PublicSectorIcon.png'
import Insuranceicon from '../../../public/images/pages/Insuranceicon.png'
import Bankingicon from '../../../public/images/pages/Bankingicon.png'
import Manufacturingicon from '../../../public/images/pages/Manufacturingicon.png'
import SupplyChainicon from '../../../public/images/pages/SupplyChainicon.png'
import andmoreicon from '../../../public/images/pages/andmoreicon.png'

const data = [
  { title: 'Public Sector', image: publicsector },
  { title: 'Insurance', image: Insuranceicon },
  { title: 'Banking', image: Bankingicon },
  { title: 'Manufacturing', image: Manufacturingicon },
  { title: 'Supply Chain', image: SupplyChainicon },
  { title: 'Add More...', image: andmoreicon }
]

export function Industries() {
  return (
    <div className='pt-9 lg:px-40'>
      <div className='px-[20px] items-center flex flex-col lg:flex-row  justify-center lg:justify-center'>
        <div className='text-center lg:text-left items-center flex flex-col justify-center lg:items-start '>
          <h1 className='font-extrabold text-[36px] font-Inter text-[#102356] lg:text-[62px]'>Industries we serve</h1>
          <p className='text-[#102356] font-regular text-[12px] leading-[30px]'>
            EnDemand IT caters to a diverse range of industries, including:
          </p>
        </div>
      </div>
      <div className='flex gap-[40px] pt-9 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  px-8'>
        {data.map((item, index) => (
          <div
            key={index}
            className={`group px-20 py-20 flex flex-col justify-center items-center gap-[10px] border-2 `}
          >
            <Image src={item.image} alt={item.title} width={80} height={80} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
