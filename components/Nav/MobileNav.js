import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'
import styles from '../../styles/MobileNav.module.css'
import { useGlobalContext } from '../Context/Context'
import { BsMoon, BsSun } from 'react-icons/bs'


const MobileNav = () => {
    const {show_nav,theme,switchTheme, clickedClass, closeNav} = useGlobalContext()
    
  return (
    <nav className={show_nav ? 'mobile_nav active' : 'mobile_nav'}>
        <ul>
            <Link href='/'>
                <li>Home</li>
            </Link>
            <Link href='/learn'>
                <li>Learn</li>
            </Link>
           <span>
               <li id='odd'>Categories </li>
               <div className={styles.submenu_links}>
                   <Link href='/category/html'>
                       <li>HTML</li>
                   </Link>
                   <Link href='/category/css'>
                       <li>CSS</li>
                   </Link>
                   <Link href='/category/javascript'>
                       <li>JavaScript</li>
                   </Link>
                   <Link href='/category/js-frameworks'>
                       <li>JS frameworks</li>
                   </Link>
                   
                   <Link href='/category/python'>
                       <li>Python</li>
                   </Link>
                   </div>
           </span>
            <Link href='/get-in-touch'>
                <li>Get in touch</li>
            </Link>
            <div className='remove'>
                <FaTimes onClick={closeNav} />
            </div>
            <section id='toogle_mode' className={theme === 'dark' ? clickedClass: ""} onClick={(e) => switchTheme(e)}>
     <h2 className="moon">{<BsMoon />}</h2>
     <h2 className="sun">{<BsSun />}</h2>
     </section>
        </ul>
    </nav>
  )
}

export default MobileNav