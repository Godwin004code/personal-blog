import Link from 'next/link'
import styles from '../../styles/DesktopNav.module.css'

const DesktopNav = () => {
  return (
    <nav className={styles.nav}>
        <ul>
            <Link href='/'>
                <li>
                    <a>Home</a>
                </li>
            </Link>
            <Link href='/learn'>
                <li>
                    <a>Learn</a>
                </li>
            </Link>
           
            <Link href='/get-in-touch'>
                <li>
                    <a>Get in touch</a>
                </li>
            </Link>
        </ul>
    </nav>
  )
}

export default DesktopNav