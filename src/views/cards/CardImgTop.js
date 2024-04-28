// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CourseModal from '../dashboard/CourseModal'
import { Select, MenuItem, Modal } from '@mui/material'
import Button from '@mui/material/Button'

import { useState } from 'react'
const CardImgTop = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }
  return (
    <Card>
      <CardMedia
        sx={{ height: '14.5625rem' }}
        image='/images/cards/Affiliate-Marketing-BCG-Banner-fixed.png'
        onClick={handleOpenModal}
      />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }} onClick={handleOpenModal}>
          Affiliate Marketing Course
        </Typography>
        <Typography variant='body2'>
          Online course affiliate programs (sometimes called online education affiliate programs) involve getting
          content creators to promote your course on their blogs, websites, and social platforms. In return, they get a
          financial incentive for every successful sale.
        </Typography>
      </CardContent>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby='payment-method-modal-title'
        aria-describedby='payment-method-modal-description'
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            padding: '20px'
          }}
        >
          <div style={{ maxWidth: '600px', textAlign: 'left', backgroundColor: '#FFF', padding: '20px' }}>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/OV6oTMD6pUo?si=ggI4TZaDYpxu5Umv'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
            ></iframe>

            <Button onClick={handleCloseModal} style={{ marginTop: '20px' }}>
              Close Modal
            </Button>
          </div>
        </div>
      </Modal>
    </Card>
  )
}

export default CardImgTop
