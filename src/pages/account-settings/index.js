// ** React Imports
import { useRef, useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'

// ** Demo Tabs Imports
import TabInfo from 'src/views/account-settings/TabInfo'
import TabAccount from 'src/views/account-settings/TabAccount'
import TabSecurity from 'src/views/account-settings/TabSecurity'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const AccountSettings = () => {
  // ** State
  const [value, setValue] = useState('account')
  const [userInfo, setuserInfo] = useState({})
  const [referralMember, setreferralMember] = useState({})

  const baseUrl = 'http://143.198.64.42:9000'

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const fetchUserInfo = async token => {
    try {
      const response = await axios.get(`${baseUrl}/user-info`, {
        headers: {
          Authorization: `Bearer ${token}` // Using Bearer token for authentication
        }
        // Note: Axios automatically converts objects to JSON, so no need to stringify
      })

      // Axios wraps the response data inside a `data` property
      return response.data // Assuming the response contains the user info
    } catch (error) {
      throw new Error('Token validation failed with status: ' + error.response.status)
    }
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    const verifyTokenAndFetchUser = async () => {
      try {
        if (!token) {
          throw new Error('No token found')
        }
        const userInfo = await fetchUserInfo(token)
        // console.log('userInfo', userInfos)
        setuserInfo(userInfo.user)
        // Here, you can set user info in global state/context
      } catch (error) {
        console.log(error) // Redirect to login if token is invalid or not found
      }
    }

    verifyTokenAndFetchUser()
  }, [])

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='account'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline />
                <TabName>Account</TabName>
              </Box>
            }
          />
          <Tab
            value='security'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LockOpenOutline />
                <TabName>Security</TabName>
              </Box>
            }
          />
          <Tab
            value='info'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <InformationOutline />
                <TabName>Info</TabName>
              </Box>
            }
          />
        </TabList>

        <TabPanel sx={{ p: 0 }} value='account'>
          <TabAccount userInfo={userInfo} />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='security'>
          <TabSecurity />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='info'>
          <TabInfo />
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default AccountSettings
