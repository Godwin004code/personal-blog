
import Link from "next/link"
import styles from "../../styles/Leftbar.module.css"

const LeftBar = ({data}) => {
  
  return (
    <div className={styles.left_container}>
      <Link href='/category/html'>
      <div className={styles.category}>
            <div>
              <a>html</a>
            </div>

            <div className={styles.total}>9+</div>
          </div>
          </Link>
          <Link href='/category/css'>
          <div className={styles.category}>
            <div>
              <a>css</a>
            </div>
            <div className={styles.total}>9+</div>
          </div>
          </Link>
          <Link href='/category/javascript'>
          <div className={styles.category}>
            <div>
              <a>javascript</a>
            </div>
            <div className={styles.total}>9+</div>
          </div>
          </Link>
         
          <Link href='/category/js-frameworks'>
          <div className={styles.category}>
            <div>
              <a>js frameworks</a>
            </div>
            <div className={styles.total}>9+</div>
          </div>
          </Link>
          <Link href='/category/python'>
          <div className={styles.category}>
            <div>
              <a>python</a>
            </div>
            <div className={styles.total}>9+</div>
          </div>
          </Link>
          
    </div>
  )
}

export default LeftBar