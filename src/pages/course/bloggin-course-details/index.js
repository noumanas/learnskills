// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardUser from 'src/views/cards/CardUser'
import CardImgTop from 'src/views/cards/CardImgTop'
import CardMobile from 'src/views/cards/CardMobile'
import CardSupport from 'src/views/cards/CardSupport'
import CardTwitter from 'src/views/cards/CardTwitter'
import CardFacebook from 'src/views/cards/CardFacebook'
import CardLinkedIn from 'src/views/cards/CardLinkedIn'
import CardAppleWatch from 'src/views/cards/CardAppleWatch'
import CardMembership from 'src/views/cards/CardMembership'
import CardInfluencer from 'src/views/cards/CardInfluencer'
import CardNavigation from 'src/views/cards/CardNavigation'
import CardWithCollapse from 'src/views/cards/CardWithCollapse'
import CardVerticalRatings from 'src/views/cards/CardVerticalRatings'
import CardNavigationCenter from 'src/views/cards/CardNavigationCenter'
import CardHorizontalRatings from 'src/views/cards/CardHorizontalRatings'
const bloggincoursedetails = () => {
  const data = [
    { title: 'INTRODUCTION TO ADSTERA BLOGGING BY SHOIB AKRAM', youtube: 'https://youtu.be/Ot932dn4Hcc' },
    { title: 'HOW TO CREAT ADSTERA ACCOUNT', youtube: 'https://youtu.be/fiRQV8OkPiA' },
    { title: 'ADSTERA BLOGGING EARNING MATHODE', youtube: 'https://youtu.be/hi5eVHqgNkY' }
  ]
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Course Detais and Videos</Typography>
      </Grid>
      <Grid item xs={12}>
        <div style={{ maxWidth: '100%', textAlign: 'left', backgroundColor: '#FFF', padding: '20px' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th tyle={{ border: '1px solid #ddd', padding: '8px' }}>Title</th>
                <th tyle={{ border: '1px solid #ddd', padding: '8px' }}>Video</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold' }}>{item.title}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${item.youtube.split('/').pop()}`}
                      title='YouTube video player'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                      style={{
                        border: 'none',
                        width: '100%', // Set width to 100% for responsiveness
                        aspectRatio: '16 / 9' // Set aspect ratio (16:9 is standard for YouTube videos)
                      }}
                    ></iframe>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Grid>
    </Grid>
  )
}

export default bloggincoursedetails
