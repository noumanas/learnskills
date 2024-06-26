// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'
import Script from 'next/script'
// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'

// ** Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../../styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

// ** Configure JSS & ClassName
const App = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Variables
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        {/* Google Analytics script */}
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-FEK7GDD0FH'></script>
        {/* Google Analytics initialization script */}
        <script
          id='google-analytics'
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-FEK7GDD0FH');
              `
          }}
        />
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9547251569083615'
          crossorigin='anonymous'
        ></script>

        <title>{`${themeConfig.templateName} - Learn Skills Pro Most Benefit for Earning Plaform `}</title>
        <meta
          name='description'
          content={`${themeConfig.templateName} –Learn Skills Pro Most Benefit for Earning Plaform  – is the most developer friendly & highly customizableLearn Skills Pro Most Benefit for Earning Plaform .`}
        />
        <meta name='google-adsense-account' content='ca-pub-9547251569083615'></meta>
        <meta name='keywords' content='Learn Skills Pro Most Benefit for Earning Plaform ' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>

      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => {
            return <ThemeComponent settings={settings}>{getLayout(<Component {...pageProps} />)}</ThemeComponent>
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </CacheProvider>
  )
}

export default App
