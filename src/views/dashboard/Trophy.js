// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')(({ theme }) => ({
  position: 'absolute',
  bottom: 20,
  right: 36,
  height: 98,
  [theme.breakpoints.down('sm')]: {
    // Adjust properties for small screens (e.g., mobile devices)
    height: 64,
    right: 16,
    bottom: 16
  }
}))

const Trophy = props => {
  // ** Hook
  const baseUrl = 'https://starfish-app-7c9pu.ondigitalocean.app'
  const [selectedFile, setSelectedFile] = useState(null)
  const currentImage = `https://starfish-app-7c9pu.ondigitalocean.app/public/uploads${props.userInfo?.profile}`
  const [avatarImage, setAvatarImage] = useState(currentImage)
  const [gettoken, setToken] = useState('')

  const handleImageChange = event => {
    setSelectedFile(event.target.files[0])
    const newImage = event.target.files[0]
    // Update the avatar image
    if (newImage) {
      const reader = new FileReader()
      reader.onload = () => {
        setAvatarImage(reader.result)
      }
      reader.readAsDataURL(newImage)
      handleSubmit()
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    setToken(token)
  }, [])
  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append('image', selectedFile)

    try {
      const response = await axios.post(`${baseUrl}/user-info-updates`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${gettoken}`
        }
      })
      console.log('Image uploaded successfully:', response.data)
    } catch (error) {
      console.error('Error uploading image:', error)
    }
  }
  const earnings = props.earnings
  const userInfo = props.userInfo
  const theme = useTheme()
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'
  const formattedEarnings = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'PKR'
  }).format(earnings?.todayEarnings || 0)
  const balance = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'PKR'
  }).format(earnings?.balance || 0)
  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <div>
          <input
            accept='image/*'
            id='avatar-input'
            type='file'
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
          <label htmlFor='avatar-input'>
            <IconButton color='primary' component='span'>
              <PhotoCameraIcon />
            </IconButton>
          </label>
          <Avatar
            alt={userInfo?.firstName?.charAt(0).toUpperCase()}
            src={avatarImage}
            sx={{ width: 100, height: 100 }}
          />
        </div>
        {/* <Typography variant='h6'>
          Congratulations{' '}
          {userInfo?.firstName ? userInfo.firstName.charAt(0).toUpperCase() + userInfo.firstName.slice(1) : ''}! 🥳
        </Typography> */}
        <Typography variant='h6'>
          {userInfo?.firstName ? userInfo.firstName.charAt(0).toUpperCase() + userInfo.firstName.slice(1) : ''}
          <Button size='small' variant='contained'>
            {userInfo?.packageId == 1
              ? 'Basic'
              : userInfo?.packageId == 2
              ? 'Standard'
              : userInfo?.packageId == 3
              ? 'Premium'
              : null}
          </Button>
        </Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          Affiliate Link
          <TextField fullWidth value={'http://learnskills.pro/pages/register/' + userInfo?.yourReferralCode} />
        </Typography>
        <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
          Balance : {balance}
        </Typography>
        <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
          Total Earnings : {formattedEarnings}
        </Typography>
        <Button size='small' variant='contained'>
          View Sales
        </Button>
        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
        {/* <TrophyImg alt='trophy' src='/images/misc/trophy.png' /> */}
      </CardContent>
    </Card>
  )
}

export default Trophy
