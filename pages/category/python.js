
import Link from "next/link"
import Head from "next/head"
import {FaClock, FaCalendarAlt} from "react-icons/fa"
import LeftBar from "../../components/Body/LeftBar"
import _styles from "../../styles/Body.module.css"
import __styles from "../../styles/Leftbar.module.css"
import styles from "../../styles/config.module.css"
import Nav from "../../components/Nav/Nav"
import Filtered from "../../components/Post/Filtered"
import Footer from "../../components/Footer/Footer"
import RightBar from "../../components/Body/RightBar"


const js = ({data}) => {

  return (
      <>
       <Head>
          <title>categories of Python</title>
          <meta name="description" content='This is the page that contains all categories that fall under Python' />
          <meta name='theme-color' content='#b01100' />
          <script>
  window.OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "13175820-0be9-4f42-9d2a-2eefa73c4bcf",
    })
  })
</script>
      </Head>
      <Nav />
    <div className={_styles.body}> 
    <div className={styles.leftbar}>
    <RightBar />
    </div>
   
    <Filtered data={data} text='python' />
    <div className={styles.rightbar}>
      <LeftBar />
    </div>
    </div>
    <div className={_styles.footer}>
      <Footer />
    </div>
    </>
  )
}

export default js

export async function getStaticProps() {
  const res = await fetch(`http://murmuring-dawn-44285.herokuapp.com/api/posts/?populate=*`)
  const data = await res.json()

  return {
    props: {data}
  }
}