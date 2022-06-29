
import Head from "next/head"
import Home from "../components/Home"

const index = ({data}) => {
  return (
   <>
   <Head>
    <meta name="description" content='Devilon Home Page. Read posts on the go..' />
    <meta name='theme-color' content='#b01100' />
    <meta name="google-site-verification" content="HBCHvyxwdprhsttjH8sfyw8EX0CYiDdCfpcDkv851X4" />
    <title>Devilon </title>
    <link rel='apple-touch-icon' href='/appstore.png' />
<link rel='apple-touch-icon' sizes='152x152' href='/152.png' />
<link rel='apple-touch-icon' sizes='180x180' href='/180.png' />
<link rel='apple-touch-icon' sizes='167x167' href='/167.png' />

<link rel='icon' type='image/png' sizes='32x32' href='/32.png' />
<link rel='icon' type='image/png' sizes='16x16' href='/16.png' />
<link rel='manifest' href='/manifest.json' />
<link rel='mask-icon' href='/maskable.png' color='rgb(24,24,38)' />
<link rel='shortcut icon' href='/20220613_134635.jpg' />
    </Head>
     <Home data={data.data.reverse()}  />
   </>
  )
}



export default index

export async function getStaticProps() {
  const res = await fetch(`http://murmuring-dawn-44285.herokuapp.com/api/posts/?populate=*`)
  const data = await res.json()
  return {
    props: {data}
  }
}

