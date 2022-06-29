
import Link from "next/link"
import { FaCopyright, FaDev, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa'
import styles from '../../styles/Footer.module.css'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className={styles.footer_container}>
      <div>
      <Link href='/'>
    <h2 style={{cursor: 'pointer'}}>devilon</h2>
    </Link>
      </div>
      <div>
      
        <div className={styles.social_media}>
          <li><a href='https://twitter.com/AlugbinGodwin'><FaTwitter /></a></li>
          <li><a href='https://www.linkedin.com/in/godwin-alugbin-b705b6227/'><FaLinkedin /></a></li>
          <li><a href='https://dev.to/dashboard'><FaDev /></a></li>
          <li><a href='https://medium.com/me/stories/drafts'><FaMedium /></a></li>
         
        </div>
        <div className={styles.sponsor}>
        <Link href="https://www.buymeacoffee.com/godwinalugR">
        <a>
          <img  src="/bmc_icon_black.png" alt="Buy me a coffee" />
          <div style={{textDecoration: 'underline'}}>Buy us a coffee</div>
        </a>
        </Link>
      </div>
        <div>code with love by <a href='http://godilon.vercel.app' >Godwin</a>, {year}</div>
      </div>
      
    </div>
  )
}

export default Footer

// https://godilonalugbin.hashnode.dev/