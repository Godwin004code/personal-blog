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
    <Contact />
    </>
  )
}

export default get_in_touch