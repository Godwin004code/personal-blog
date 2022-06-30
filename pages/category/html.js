
import Link from "next/link"
import Head from "next/head"
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
          <title>categories of html</title>
          <meta name="description" content='This is the page that contains all categories that fall under HTML' />
           <meta name='theme-color' content='#b01100' />
      </Head>
      <Nav />
    <div className={_styles.body}> 
    
    <div className={styles.leftbar}>
     <RightBar />
    </div>
    <Filtered data={data} text='html' />
    
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