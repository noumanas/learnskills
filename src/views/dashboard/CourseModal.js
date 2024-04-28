import { useState } from 'react'

const CourseModal = ({ onClose, showModal, setShowModal }) => {
  const closeModal = () => {
    setShowModal(false)
    onClose()
  }

  return (
    <>
      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='relative max-w-screen-md w-full p-4 bg-white rounded-lg'>
            <button className='absolute top-2 right-2 text-gray-500' onClick={closeModal}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
            <div className='aspect-w-16 aspect-h-9'>
              <iframe
                src='https://www.youtube.com/embed/OV6oTMD6pUo?si=MGLDLuLDNvBblgMA'
                title='YouTube video player'
                className='absolute inset-0 w-full h-full'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CourseModal
