// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})

const Trophy = props => {
  // ** Hook
  const earnings = props.earnings
  const userInfo = props.userInfo
  const theme = useTheme()
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'
  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>
          Congratulations{' '}
          {userInfo?.firstName ? userInfo.firstName.charAt(0).toUpperCase() + userInfo.firstName.slice(1) : ''}! 🥳
        </Typography>

        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          Referral Link
          <TextField fullWidth value={'http://learnskills.pro/pages/register/' + userInfo?.yourReferralCode} />
        </Typography>
        <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
          Balance : Rs {earnings?.balance || 0}
        </Typography>
        <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
          Total Earnings : Rs {earnings?.todayEarnings || 0}
        </Typography>
        <Button size='small' variant='contained'>
          View Sales
        </Button>
        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
        <TrophyImg alt='trophy' src='/images/misc/trophy.png' />
      </CardContent>
    </Card>
  )
}

export default Trophy
