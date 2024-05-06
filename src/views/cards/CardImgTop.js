// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CourseModal from '../dashboard/CourseModal'
import { Select, MenuItem, Modal } from '@mui/material'
import Button from '@mui/material/Button'
import Link from 'next/link'

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
      <Link href='/course/details'>
        <CardContent>
          <Typography variant='h6' sx={{ marginBottom: 2 }} onClick={handleOpenModal}>
            Affiliate Marketing Course
          </Typography>
          <Typography variant='body2'>
            Online course affiliate programs (sometimes called online education affiliate programs) involve getting
            content creators to promote your course on their blogs, websites, and social platforms. In return, they get
            a financial incentive for every successful sale.
          </Typography>
        </CardContent>
      </Link>
    </Card>
  )
}

export default CardImgTop
