
import styles from "../../styles/Rightbar.module.css"
import Link from "next/link"

const RightBar = () => {
  return (
    <div id='contact' className={styles.rightbar_container}>
      <h2>Support Us</h2>
      <div>
        <Link href="https://www.buymeacoffee.com/godwinalugR">
        <a>
          <img  src="/bmc_icon_black.png" alt="Buy me a coffee" />
          <div style={{textDecoration: 'underline'}}>Buy us a coffee. Let's create that YouTube channel.</div>
        </a>
        </Link>
      </div>
      
    </div>
  )
}

export default RightBar