// ** React Imports
import { useState, Fragment, useEffect } from 'react'
// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import { Select, MenuItem, Modal } from '@mui/material'
// ** Icons Imports
import Google from 'mdi-material-ui/Google'
import Github from 'mdi-material-ui/Github'
import Twitter from 'mdi-material-ui/Twitter'
import Facebook from 'mdi-material-ui/Facebook'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import axios from 'axios'
// ** Configs
import themeConfig from 'src/configs/themeConfig'
import Logo from '../../../../../public/images/pages/learnskill_logo.png'
import Image from 'next/image'
// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'
import { useRouter } from 'next/router'
// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const RegisterPage = () => {
  // ** States
  const router = useRouter()
  const { referralCode } = router.query
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })
  const [formErrors, setFormErrors] = useState({})

  // ** Hook
  const theme = useTheme()
  console.log('id', referralCode)
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  const [selectedState, setSelectedState] = useState('')
  const [selectedPackage, setSelectedPackage] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
    referralCode,
    state: '',
    packageId: '',
    couponCode: '',
    transactionId: ''
  })
  // Extract referral code from URL params
  useEffect(() => {
    const { referralCode } = router.query
    if (referralCode) {
      setFormData(prevFormData => ({
        ...prevFormData,
        referralCode: referralCode
      }))
    }
  }, [router.query.referralCode])
  // Handles form field changes
  const handleInputChange = e => {
    const { name, value } = e.target
    // Clear any errors for this field
    setFormErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }))
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }
  const baseUrl = 'https://starfish-app-7c9pu.ondigitalocean.app'

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      // Make an API call to your backend endpoint

      const response = await axios.post(`${baseUrl}/register`, formData)
      console.log('formData', formData)

      // Handle success - maybe clear the form or redirect the user
      console.log('User registered:', response)
      setFormErrors({}) // Clear all errors
      window.location.href = '/pages/login/'
    } catch (error) {
      // Initialize an empty object to hold the parsed errors
      const parsedErrors = {}
      alert(error.response.data.error)
      // Check if the error response is in the expected format
      if (error.response && error.response.data && typeof error.response.data.error === 'string') {
        // Assuming the error string is formatted like:
        // "User validation failed: fieldName: Error message., anotherFieldName: Another error message."
        // We split it by "," to get individual error messages
        const errorMessages = error.response.data.error.split(',').forEach(err => {
          // Each `err` is expected to be in "fieldName: Error message." format
          // So, we split it by ":" to extract the field name and the message
          const parts = err.split(':').map(part => part.trim())
          if (parts.length >= 2) {
            const fieldName = parts[0]
            const message = parts.slice(1).join(':') // In case the message itself contains ':'
            parsedErrors[fieldName] = message
          }
        })

        // Set the parsed errors to state
        console.log('parsedErrors', parsedErrors)
        setFormErrors(parsedErrors)
      } else {
        // Handle other types of errors (e.g., network error, no response from server)
        console.error('An unexpected error occurred:', error)
      }
    }
  }
  const handleChangeState = event => {
    setSelectedState(event.target.value)
  }

  const handleChangePackage = event => {
    setSelectedPackage(event.target.value)
  }
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src={Logo} alt='Logo' height={40} width={223} />
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
              Welcome to LearnSkills 🚀
            </Typography>
            <Typography variant='body2'>Make Money Online buy Course!</Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField
              error={Boolean(formErrors['firstName'])}
              helperText={formErrors['firstName'] || ''}
              autoFocus
              fullWidth
              name='firstName'
              label='First Name'
              value={formData.firstName} // Bind the state value
              onChange={handleInputChange}
              sx={{ marginBottom: 4 }}
            />
            <TextField
              error={Boolean(formErrors['lastName'])}
              helperText={formErrors['lastName'] || ''}
              fullWidth
              name='lastName'
              label='Last Name'
              value={formData.lastName} // Bind the state value
              onChange={handleInputChange}
              sx={{ marginBottom: 4 }}
            />
            <TextField
              error={Boolean(formErrors['email'])}
              helperText={formErrors['email'] || ''}
              fullWidth
              type='email'
              label='Email'
              name='email'
              value={formData.email} // Bind the state value
              onChange={handleInputChange}
              sx={{ marginBottom: 4 }}
            />
            <TextField
              error={Boolean(formErrors['mobileNumber'])}
              helperText={formErrors['mobileNumber'] || ''}
              fullWidth
              type='tel'
              label='Mobile Number'
              name='mobileNumber'
              value={formData.mobileNumber} // Bind the state value
              onChange={handleInputChange}
              sx={{ marginBottom: 4 }}
            />
            <FormControl fullWidth sx={{ marginBottom: 4 }}>
              <InputLabel htmlFor='auth-register-password'>Password</InputLabel>
              <OutlinedInput
                label='Password'
                id='auth-register-password'
                value={formData.password} // Bind the state value
                onChange={handleInputChange}
                name='password'
                error={Boolean(formErrors['password'])}
                helperText={formErrors['password'] || ''}
                // onChange={handleChange('password')}
                type={values.showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      {values.showPassword ? <EyeOutline fontSize='small' /> : <EyeOffOutline fontSize='small' />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <TextField
              fullWidth
              label='Enter Referral code'
              name='referralCode'
              sx={{ marginBottom: 4 }}
              value={referralCode || formData.referralCode} // Bind the state value
              onChange={handleInputChange}
            />
            <FormControl fullWidth sx={{ marginBottom: 4 }}>
              <InputLabel id='select-states-label'>Select States</InputLabel>
              <Select
                labelId='select-states-label'
                id='select-states'
                value={formData.state} // Bind the state value
                name='state'
                onChange={handleInputChange}
                label='Select States'
              >
                <MenuItem value='Sindh'>Sindh</MenuItem>
                <MenuItem value='Punjab'>Punjab</MenuItem>
                <MenuItem value='KPK'>KPK</MenuItem>
                <MenuItem value='Balochistan'>Balochistan</MenuItem>

                {/* Add more MenuItem components for additional states */}
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: 4 }}>
              <InputLabel id='choose-package-label'>Choose Package</InputLabel>
              <Select
                labelId='choose-package-label'
                id='choose-package'
                name='packageId'
                value={formData.packageId} // Bind the state value
                onChange={handleInputChange}
                label='Choose Package'
              >
                <MenuItem value='1'>Package Basic Rs 1550</MenuItem>
                <MenuItem value='2'>Package Standard Rs 2550</MenuItem>
                <MenuItem value='3'>Package Premium Rs 5560</MenuItem>
                {/* Add more MenuItem components for additional packages */}
              </Select>
            </FormControl>
            <TextField fullWidth label='Enter Coupon code' sx={{ marginBottom: 4 }} />
            <TextField fullWidth label='Transaction ID' sx={{ marginBottom: 4 }} />
            <Button fullWidth size='large' variant='contained' sx={{ marginBottom: 7 }} onClick={handleOpenModal}>
              Payment Method
            </Button>
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
                  <h2 id='payment-method-modal-title' style={{ marginBottom: '20px' }}>
                    Official Account Numbers
                  </h2>
                  <p id='payment-method-modal-description' style={{ marginBottom: '20px' }}>
                    <strong>Note:</strong> <br />
                    * Agar ap k pass referral link ya code dene wala koi nahi hai to payment na karein. <br />
                    * Kisi aise bandy ko talash kariye jis ka referral code use kar k ap account bana saky. <br />* Fees
                    pay karny k bad screenshot us bandy ko bhejiye jis ny apko Learnskills.pro ki details di hein.{' '}
                    <br />* Nichy diye huy numbers k ilawa kisi or number py payment na karein.
                  </p>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        {/* <th>Logo</th> */}
                        <th>Bank</th>
                        <th>Account Name</th>
                        <th>Account Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {/* <td>Logo</td> */}
                        <td>Easy Paisa</td>
                        <td>Muhammd Nauman</td>
                        <td>03443627887</td>
                      </tr>
                      <tr>
                        {/* <td>Logo</td> */}
                        <td>Jazz Cash</td>
                        <td>Muhammad Nouman</td>
                        <td>03443627887</td>
                      </tr>
                      <tr>
                        {/* <td>Logo</td> */}
                        <td>UBL</td>
                        <td>Muhammad Noman</td>
                        <td>0047245888973</td>
                      </tr>
                      <tr>
                        {/* <td>Logo</td> */}
                        <td>NayaPay</td>
                        <td>Muhammad Noman</td>
                        <td>03443627887</td>
                      </tr>
                    </tbody>
                  </table>
                  <Button onClick={handleCloseModal} style={{ marginTop: '20px' }}>
                    Close Modal
                  </Button>
                </div>
              </div>
            </Modal>

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Fragment>
                  <span>I agree to </span>
                  <Link href='/' passHref>
                    <LinkStyled onClick={e => e.preventDefault()}>privacy policy & terms</LinkStyled>
                  </Link>
                </Fragment>
              }
            />
            <Button
              fullWidth
              size='large'
              type='submit'
              variant='contained'
              sx={{ marginBottom: 7 }}
              // onClick={handleSubmit}
            >
              Sign up
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2' sx={{ marginRight: 2 }}>
                Already have an account?
              </Typography>
              <Typography variant='body2'>
                <Link passHref href='/pages/login'>
                  <LinkStyled>Sign in instead</LinkStyled>
                </Link>
              </Typography>
            </Box>
            <Divider sx={{ my: 5 }}>or</Divider>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Link href='/' passHref>
                <IconButton component='a' onClick={e => e.preventDefault()}>
                  <Facebook sx={{ color: '#497ce2' }} />
                </IconButton>
              </Link>
              <Link href='/' passHref>
                <IconButton component='a' onClick={e => e.preventDefault()}>
                  <Twitter sx={{ color: '#1da1f2' }} />
                </IconButton>
              </Link>
              <Link href='/' passHref>
                <IconButton component='a' onClick={e => e.preventDefault()}>
                  <Github
                    sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : theme.palette.grey[300]) }}
                  />
                </IconButton>
              </Link>
              <Link href='/' passHref>
                <IconButton component='a' onClick={e => e.preventDefault()}>
                  <Google sx={{ color: '#db4437' }} />
                </IconButton>
              </Link>
            </Box>
          </form>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}
RegisterPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default RegisterPage
