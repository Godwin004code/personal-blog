import Nav from "../components/Nav/Nav"
import Head from "next/head"
import Contact from "../components/Contact/Contact"
const get_in_touch = () => {
  return (
    <>
           <Head>
       <meta name='theme-color' content='#b01100' />
          <title>devilon contact page</title>
          <meta name="description" content='Devilon contact page' />
  
      </Head>
    <Nav />
    <Contact />
    </>
  )
}

export default get_in_touch