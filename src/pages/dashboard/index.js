// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import VerticalLayout from 'src/@core/layouts/VerticalLayout'
import VerticalAppBarContent from 'src/layouts/components/vertical/AppBarContent'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import { useRouter } from 'next/router'
import navigation from '../../navigation/vertical/index'
import axios from 'axios'
const Dashboard = () => {
  const router = useRouter()
  const [userInfo, setuserInfo] = useState({})
  const [referralMember, setreferralMember] = useState({})
  const [earnings, setEarnings] = useState({})
  const [Dailycomerecord, setDailycomerecord] = useState([])

  const baseUrl = 'https://starfish-app-7c9pu.ondigitalocean.app'
  // const { id } = router.query
  // const navItems = navigation(id)
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
  const getearninginfo = async (token, userId) => {
    try {
      const response = await axios.get(`${baseUrl}/earnings/${userId}`, {
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
  const getdailyincome = async (token, userId) => {
    try {
      const response = await axios.get(`${baseUrl}/dailyincome/${userId}`, {
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
  const fetchReferralInfo = async (token, yourReferralCode) => {
    try {
      const response = await axios.post(
        `${baseUrl}/referral-info/`,
        { referralCode: yourReferralCode }, // Axios takes care of stringifying the object
        {
          headers: {
            Authorization: `Bearer ${token}` // Using Bearer token for authentication
          }
        }
      )

      // With Axios, the response data is directly accessible via `response.data`
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
        const referralinfo = await fetchReferralInfo(token, userInfo.user?.yourReferralCode)
        setreferralMember(referralinfo.user)
        setuserInfo(userInfo.user)
        const earning = await getearninginfo(token, userInfo.user?._id)
        const dailyincomedata = await getdailyincome(token, userInfo.user?._id)
        setDailycomerecord(dailyincomedata.dailyincomeData?.dailyIncome)
        setEarnings(earning.earnings)
        // Here, you can set user info in global state/context
      } catch (error) {
        console.error(error) // Redirect to login if token is invalid or not found
      }
    }

    verifyTokenAndFetchUser()
  }, [])
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy userInfo={userInfo} earnings={earnings} />
        </Grid>
        <Grid item xs={12} md={8}>
          {/* <StatisticsCard /> */}
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={'Rs ' + Dailycomerecord[0]?.amount}
                icon={<Poll />}
                color='success'
                // trendNumber='+42%'
                title='Today Earning'
                subtitle='Profit'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='0'
                title='Last 7 Days Earning'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                subtitle='Past Week'
                icon={<CurrencyUsd />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='0'
                trend='negative'
                trendNumber='-18%'
                title='Last 30 Days Earning'
                subtitle='Past Month'
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='0'
                color='warning'
                trend='negative'
                trendNumber='-18%'
                subtitle='Overall'
                title='All Times Earning'
                icon={<HelpCircleOutline />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          {/* <TotalEarning /> */}
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          {/* <SalesByCountries /> */}
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          {/* <DepositWithdraw /> */}
        </Grid>
        <Grid item xs={12}>
          <Table referralMember={referralMember} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
