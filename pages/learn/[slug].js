
import { useEffect, useState } from "react"
import Footer from "../../components/Footer/Footer"
import styles from "../../styles/Body.module.css"
import Singlelearn from "../../components/LearnPage/Singlelearn"
import Head from "next/head"

//const URL = process.env.STRAPIBASEURL

const Slug = ({data, paths}) => {
    console.log(data)
    const [scrolled, setScrolled] = useState(0)

    const showProgress = () => {
        const winScroll = document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scroll = (winScroll / height) * 100
        setScrolled(scroll)
    }
    useEffect(() => {
        window.addEventListener('scroll', showProgress)
        return () => window.removeEventListener('scroll', showProgress)
        
    }, [])
   //const post = data.data.attributes
   //const img = 'http://l'+post.Pro.data.attributes.url;
   //const date = new Date(post.createdAt);
     //       const time = date.toLocaleTimeString()
       //     const _date = date.toLocaleDateString()
   //console.log(img);
  return (
    <>
    <Head>
    <meta name="description" content={`${data.data.attributes.Project_name}`} />
    <meta name='theme-color' content='#b01100' />
    <title>{data.data.attributes.Project_name}</title>
    </Head>
      <Singlelearn data={data} />
        <div className="progress_container">
            <div style={{width: `${scrolled}%`}} className="progress_line"></div>
        </div>
        
        <div className={styles.footer}>
            <Footer />
        </div>
        </>
  )
}

export default Slug

export async function getStaticPaths() {
    const res = await fetch(`http://murmuring-dawn-44285.herokuapp.com/api/learns`)
    const data = await res.json()
    const paths = data.data.map((post) => {
        return {params: {slug: String(post.attributes.slug)}}
    })
    console.log(paths)
    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({params}) {
    console.log(params);
  
    const res = await fetch(`http://murmuring-dawn-44285.herokuapp.com/api/learns/${params.slug}`)
  
    const data = await res.json()
    
    return {
        props: {data},
        revalidate: 10
    }
}