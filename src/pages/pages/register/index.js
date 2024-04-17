// ** React Imports
import { useState, Fragment } from 'react'
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

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'
import { useRouter } from 'next/router'

// ** Ensure there's an empty line before this comment

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
  const { id } = router.query
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })
  const [formErrors, setFormErrors] = useState({})

  // ** Hook
  const theme = useTheme()
  const baseUrl = 'https://starfish-app-7c9pu.ondigitalocean.app'

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
    referralCode: '',
    state: '',
    packageId: '',
    couponCode: '',
    transactionId: ''
  })
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
            <svg
              width={35}
              height={29}
              version='1.1'
              viewBox='0 0 30 23'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                <g id='Artboard' transform='translate(-95.000000, -51.000000)'>
                  <g id='logo' transform='translate(95.000000, 50.000000)'>
                    <path
                      id='Combined-Shape'
                      fill={theme.palette.primary.main}
                      d='M30,21.3918362 C30,21.7535219 29.9019196,22.1084381 29.7162004,22.4188007 C29.1490236,23.366632 27.9208668,23.6752135 26.9730355,23.1080366 L26.9730355,23.1080366 L23.714971,21.1584295 C23.1114106,20.7972624 22.7419355,20.1455972 22.7419355,19.4422291 L22.7419355,19.4422291 L22.741,12.7425689 L15,17.1774194 L7.258,12.7425689 L7.25806452,19.4422291 C7.25806452,20.1455972 6.88858935,20.7972624 6.28502902,21.1584295 L3.0269645,23.1080366 C2.07913318,23.6752135 0.850976404,23.366632 0.283799571,22.4188007 C0.0980803893,22.1084381 2.0190442e-15,21.7535219 0,21.3918362 L0,3.58469444 L0.00548573643,3.43543209 L0.00548573643,3.43543209 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 L15,9.19354839 L26.9548759,1.86636639 C27.2693965,1.67359571 27.6311047,1.5715689 28,1.5715689 C29.1045695,1.5715689 30,2.4669994 30,3.5715689 L30,3.5715689 Z'
                    />
                    <polygon
                      id='Rectangle'
                      opacity='0.077704'
                      fill={theme.palette.common.black}
                      points='0 8.58870968 7.25806452 12.7505183 7.25806452 16.8305646'
                    />
                    <polygon
                      id='Rectangle'
                      opacity='0.077704'
                      fill={theme.palette.common.black}
                      points='0 8.58870968 7.25806452 12.6445567 7.25806452 15.1370162'
                    />
                    <polygon
                      id='Rectangle'
                      opacity='0.077704'
                      fill={theme.palette.common.black}
                      points='22.7419355 8.58870968 30 12.7417372 30 16.9537453'
                      transform='translate(26.370968, 12.771227) scale(-1, 1) translate(-26.370968, -12.771227) '
                    />
                    <polygon
                      id='Rectangle'
                      opacity='0.077704'
                      fill={theme.palette.common.black}
                      points='22.7419355 8.58870968 30 12.6409734 30 15.2601969'
                      transform='translate(26.370968, 11.924453) scale(-1, 1) translate(-26.370968, -11.924453) '
                    />
                    <path
                      id='Rectangle'
                      fillOpacity='0.15'
                      fill={theme.palette.common.white}
                      d='M3.04512412,1.86636639 L15,9.19354839 L15,9.19354839 L15,17.1774194 L0,8.58649679 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 Z'
                    />
                    <path
                      id='Rectangle'
                      fillOpacity='0.35'
                      fill={theme.palette.common.white}
                      transform='translate(22.500000, 8.588710) scale(-1, 1) translate(-22.500000, -8.588710) '
                      d='M18.0451241,1.86636639 L30,9.19354839 L30,9.19354839 L30,17.1774194 L15,8.58649679 L15,3.5715689 C15,2.4669994 15.8954305,1.5715689 17,1.5715689 C17.3688953,1.5715689 17.7306035,1.67359571 18.0451241,1.86636639 Z'
                    />
                  </g>
                </g>
              </g>
            </svg>
            <Typography
              variant='h6'
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: 'uppercase',
                fontSize: '1.5rem !important'
              }}
            >
              {themeConfig.templateName}
            </Typography>
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
              value={formData.referralCode} // Bind the state value
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
                <MenuItem value='1'>Package Basic Rs 1450</MenuItem>
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
                    pay karny k bad screenshot us bandy ko bhejiye jis ny apko skillsider ki details di hein. <br />*
                    Nichy diye huy numbers k ilawa kisi or number py payment na karein.
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
