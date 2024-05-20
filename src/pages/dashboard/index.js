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
  const [todayEarning, settodayEarning] = useState([])
  const [weeklyEarning, setweeklyEarning] = useState(0)
  const [MonthlyEarning, setmonthlyEarning] = useState(0)
  const [alltimeEarning, setalltimearning] = useState(0)

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
        setDailycomerecord(dailyincomedata?.dailyincomeData?.dailyIncome ?? [])
        const currentDate = new Date()
        const currentDateEntries = dailyincomedata.dailyincomeData?.dailyIncome.filter(entry => {
          const entryDate = new Date(entry.date)
          return entryDate.toDateString() === currentDate.toDateString()
        })

        const currentDayOfWeek = currentDate.getDay() // Get the current day of the week (0 for Sunday, 1 for Monday, etc.)

        // Calculate the start and end dates of the current week
        const firstDayOfWeek = new Date(currentDate)
        firstDayOfWeek.setDate(firstDayOfWeek.getDate() - currentDayOfWeek) // Go back to the first day of the week (Sunday)
        const lastDayOfWeek = new Date(currentDate)
        lastDayOfWeek.setDate(lastDayOfWeek.getDate() + (6 - currentDayOfWeek)) // Go forward to the last day of the week (Saturday)

        // Filter the data to include only entries within the current week
        const currentWeekEntries = dailyincomedata?.dailyincomeData?.dailyIncome.filter(entry => {
          const entryDate = new Date(entry.date)
          return entryDate >= firstDayOfWeek && entryDate <= lastDayOfWeek
        })
        setEarnings(earning?.earnings)
        const gettodayEarning = currentDateEntries
        settodayEarning(gettodayEarning)
        // Calculate the sum of the amount for the current week
        const weeklyAmountSum = currentWeekEntries.reduce((sum, entry) => sum + entry.amount, 0)
        setweeklyEarning(weeklyAmountSum)
        const currentMonth = currentDate.getMonth()
        // Calculate the start and end dates of the current month
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentMonth, 1)
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentMonth + 1, 0)

        // Filter the data to include only entries within the current month
        const currentMonthEntries = dailyincomedata.dailyincomeData?.dailyIncome.filter(entry => {
          const entryDate = new Date(entry.date)
          return entryDate >= firstDayOfMonth && entryDate <= lastDayOfMonth
        })

        // Calculate the sum of the amount for the current month
        const monthlyAmountSum = currentMonthEntries.reduce((sum, entry) => sum + entry.amount, 0)

        // Calculate the sum of all-time earnings
        const allTimeAmountSum = dailyincomedata.dailyincomeData?.dailyIncome.reduce(
          (sum, entry) => sum + entry.amount,
          0
        )
        setmonthlyEarning(monthlyAmountSum)
        setalltimearning(allTimeAmountSum)
        // Here, you can set user info in global state/context
      } catch (error) {
        console.error(error) // Redirect to login if token is invalid or not found
      }
    }
    // Get the current date and time

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
                stats={'Rs ' + (todayEarning[0]?.amount ?? 0)}
                icon={<Poll />}
                color='success'
                // trendNumber='+42%'
                title='Today Earning'
                subtitle='Profit'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={'Rs ' + (weeklyEarning || 0)}
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
                stats={'Rs ' + (MonthlyEarning || 0)}
                trend='negative'
                trendNumber='-18%'
                title='Last 30 Days Earning'
                subtitle='Past Month'
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={'Rs ' + (alltimeEarning || 0)}
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
