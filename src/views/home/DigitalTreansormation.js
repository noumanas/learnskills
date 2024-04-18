import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/images/pages/Logo.png'
import rightArrow from '../../../public/images/pages/rightArrow.png'
// import footerbackground from '../../../public/images/pages/footerbackground.png'

export function DigitalTreansormation() {
  return (
    <footer className='bg-[#102356] sm:pt-20 md:pt-56 lg:pt-56 xl:pt-56 2xl:pt-56 text-white'>
      <div className='container mx-auto px-4 py-8 text-center items-center '>
        <div className='flex items-center flex-col sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full pb-36	'>
          <p className='text-3xl font-sans font-extrabold sm:text-4xl lg:text-5xl '>
            Join Us on the Digital Transformation Odyssey
          </p>

          <p className='mt-4 text-lg'>
            EnDemand IT is not just a service provider; we are your partners in fast-track digital transformation.
            Explore the possibilities, elevate your IT capabilities, and embrace the future with confidence.
          </p>

          <button className='mt-10 bg-[#ABE03C] flex justify-center items-center font-medium h-15  mx-auto rounded-lg text-[#102356] h-[59px] w-[243px]'>
            Contact Us Today
            <Image src={rightArrow} className='ml-2 h-3.5 w-3.5' height={14} width={14} alt='rightArrow' />
          </button>
        </div>

        <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-5 '>
          <div className='mb-4 pt-20 text-center'>
            <Image src={Logo} height={37} width={219} alt={''} className='h-9 w-[219px] mx-auto md:mx-0' />

            <p className='mt-4 text-lg text-center px-12	'>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </p>
          </div>

          <div className='pt-20 text-center'>
            <h6 className='text-lg font-semibold uppercase'>Services</h6>
            <nav className='mt-4 space-y-4'>
              <a href='#!' className='text-neutral-200 hover:text-neutral-400'>
                Consulting
              </a>
            </nav>

            <nav className='mt-4 space-y-4'>
              <a href='#!' className='text-neutral-200 hover:text-neutral-400'>
                Implementation
              </a>
            </nav>

            <nav className='mt-4 space-y-4'>
              <a href='#!' className='text-neutral-200 hover:text-neutral-400'>
                Managed Services
              </a>
            </nav>

            <nav className='mt-4 space-y-4'>
              <a href='#!' className='text-neutral-200 hover:text-neutral-400'>
                Business Process Outsourcing
              </a>
            </nav>
          </div>

          <div className='pt-20 text-center'>
            <h6 className='text-lg font-semibold uppercase'>Industries</h6>
            <nav className='mt-4 space-y-4'>
              <a href='#!' className='text-neutral-200 hover:text-neutral-400'>
                Public Sector
              </a>
            </nav>

            <nav className='mt-4 space-y-4'>
              <a href='#!' className='text-neutral-200 hover:text-neutral-400'>
                Insurance
              </a>
            </nav>

            <nav className='mt-4 space-y-4'>
              <a href='#!' className='text-neutral-200 hover:text-neutral-400'>
                Banking
              </a>
            </nav>

            <nav className='mt-4 space-y-4'>
              <a href='#!' className='text-neutral-200 hover:text-neutral-400'>
                Manufacturing
              </a>
            </nav>

            <nav className='mt-4 space-y-4'>
              <a href='#!' className='text-neutral-200 hover:text-neutral-400'>
                Supply Chain
              </a>
            </nav>
          </div>

          <div className='pt-20 text-center'>
            <h6 className='text-lg font-semibold uppercase'>Company</h6>
            <nav className='mt-4 space-y-4'>
              <a href='#!' className='text-neutral-200 hover:text-neutral-400'>
                About us
              </a>
            </nav>

            <nav className='mt-4 space-y-4'>
              <a href='#!' className='text-neutral-200 hover:text-neutral-400'>
                Careers
              </a>
            </nav>

            <nav className='mt-4 space-y-4'>
              <a href='#!' className='text-neutral-200 hover:text-neutral-400'>
                Insights
              </a>
            </nav>

            <nav className='mt-4 space-y-4'>
              <a href='#!' className='text-neutral-200 hover:text-neutral-400'>
                Manufacturing
              </a>
            </nav>

            <nav className='mt-4 space-y-4'>
              <a href='#!' className='text-neutral-200 hover:text-neutral-400'>
                Supply Chain
              </a>
            </nav>
          </div>

          <div className='flex flex-col pt-20 text-center items-center'>
            <h6 className='text-lg font-semibold uppercase'>Need Help?</h6>
            <p className='mt-4 text-sm text-center '>
              Weren’t able to find something specific? Send us an email to know more.
            </p>
            <button className='mt-10 bg-[#ABE03C] flex font-medium h-[60px] w-[167px] items-center justify-center rounded-lg text-[#102356] items-center'>
              Email Us
              <Image src={rightArrow} className='ml-2 h-3.5 w-3.5' height={14} width={14} alt='rightArrow' />
            </button>
          </div>
        </div>

        {/* Social Links and Legal */}
        <div className='mt-8 border-t border-white/20 pt-8 md:flex md:justify-between md:items-center'>
          <div className='mb-4 md:mb-0'>
            <a href='#' className='mr-4 hover:underline'>
              Terms & Privacy
            </a>
            <a href='#' className='mr-4 hover:underline'>
              Security
            </a>
            <a href='#' className='hover:underline'>
              Status
            </a>
          </div>
          <div className='social-links'>
            <a href='#' className='mr-4 hover:underline'>
              Facebook
            </a>
            <a href='#' className='mr-4 hover:underline'>
              Twitter
            </a>
            <a href='#' className='hover:underline'>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
