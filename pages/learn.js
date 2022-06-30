
import Head from "next/head"
import Nav from "../components/Nav/Nav"
import Lms from '../components/LearnPage/Lms'
import styles from "../styles/SingleLearnPage.module.css"
import pstyles from "../styles/Body.module.css"
import LearnSearch from "../components/LearnPage/LearnSearch"
import Footer from "../components/Footer/Footer"

const learn = ({data}) => {
 //console.log(data)
 
 
  return (
    <>
    <Head>
    <meta name="description" content='This is the page that shows how to do basic things' />
    <meta name='theme-color' content='#b01100' />
    <title>Devilon</title>
    <link rel='shortcut icon' href='/20220614_122650.png' />
    <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>

    </Head>
    <div className={pstyles.head}>
      <Nav />
    </div>
    <LearnSearch />
    <div  className={styles.main}>
    <Lms data={data} />
    </div>
    <div className={pstyles.footer}>
    <Footer />
    </div>
    </>
  )
}

export default learn

export async function getStaticProps() {
  const res = await fetch('http://murmuring-dawn-44285.herokuapp.com/api/learns/?populate=*')
  const data = await res.json()
  console.log(data)
  return {
    props: {data}
  }
}