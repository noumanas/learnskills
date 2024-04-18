import Image from 'next/image'
import { RapidDigtal } from '../views/home/RapidDigtal'
import { Navbar } from '../views/home/Navbar'
import { Harness } from 'src/views/home/Harness'
import { ComperehansiveOffers } from '../views/home/ComperehansiveOffers'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import { AugmentWorkforce } from '../views/home/AugmentWorkforce'
import { Industries } from '../views/home/Industries'
import { DigitalTreansormation } from '../views/home/DigitalTreansormation'
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-[#0f2152]'>
        <RapidDigtal />
      </div>
      <div>
        <Harness />
      </div>
      <div className='bg-[#0f2152]'>
        <AugmentWorkforce />
      </div>
      <div>
        <ComperehansiveOffers />
      </div>
      <div>
        <Industries />
      </div>

      <DigitalTreansormation />
    </div>
  )
}
Home.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Home
