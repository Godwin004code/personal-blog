import { useGlobalContext } from "../Context/Context"
import { FaSearch, FaTimes } from "react-icons/fa"
import Search from "../Post/Search"
import styles from "../../styles/Body.module.css"
const LearnSearch = () => {
    const {handleClick,openSearch} = useGlobalContext()
  return (
    <>
    <button className={styles.btn1} onClick={handleClick}> {openSearch ? <FaTimes/> : <FaSearch />}</button>
    {openSearch && <Search  />}
    </>
  )
}

export default LearnSearch
