
import Link from "next/link"
import {FaBars} from "react-icons/fa"
import {BsMoon, BsSun} from "react-icons/bs"
import __styles from "../../styles/Header.module.css"
import { useGlobalContext } from "../Context/Context"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import {Button} from "@material-ui/core"
const Nav = () => {
  const {switchTheme, theme, clickedClass,showNav} = useGlobalContext()
  
  return (
    <section className={__styles.header__container}>
        <header className={__styles.header}>
    <div>
    <Link href='/'>
    <h2 style={{cursor: 'pointer'}}>devilon</h2>
    </Link>
    </div>
   
     <DesktopNav />
     <MobileNav />
    
     <section id='toggle_mode' className={theme === 'dark' ? clickedClass: ""} onClick={(e) => switchTheme(e)}>
     <h2 className="moon">{<BsMoon />}</h2>
     <h2 className="sun">{<BsSun/>}</h2>
     </section>
     <div className={__styles.bars}>
      <FaBars onClick={showNav} />
     </div>
   </header>
    </section>
  )
}

export default Nav