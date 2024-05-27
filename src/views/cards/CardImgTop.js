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
    <div>
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
              content creators to promote your course on their blogs, websites, and social platforms. In return, they
              get a financial incentive for every successful sale.
            </Typography>
          </CardContent>
        </Link>
      </Card>
      <Card sx={{ marginTop: '10px' }}>
        <CardMedia
          sx={{ height: '14.5625rem' }}
          image='/images/cards/772c245c-f33b-47e2-81de-bc9ea7af03cb.jpeg'
          onClick={handleOpenModal}
        />
        <Link href='/course/bloggin-course-details'>
          <CardContent>
            <Typography variant='h6' sx={{ marginBottom: 2 }} onClick={handleOpenModal}>
              ADSTERA BLOGGING BY SHOIB AKRAM
            </Typography>
            <Typography variant='body2'>
              Sure, here's a description for an introduction to Adsterra blogging by Shoib Akram: Introduction to
              Adsterra Blogging by Shoib Akram Welcome to the world of Adsterra blogging with Shoib Akram! In this
              comprehensive guide, Shoib Akram, a seasoned digital marketer and expert blogger, introduces you to the
              dynamic realm of Adsterra—a leading global advertising network. Designed for both beginners and seasoned
              bloggers, this guide explores the essentials of monetizing your blog effectively through Adsterra.
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </div>
  )
}

export default CardImgTop
