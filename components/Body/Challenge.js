
import {useState} from "react"
import styles from "../../styles/Challenge.module.css"

const Challenge = () => {
  const [idx, setIdx] = useState(0)
  const [active, setActive] = useState(false)
 const arr = [
   {
     id:1,
     title: 'DSA',
     des: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.You may assume that each input would have exactly one solution.'
   },
   {
    id:2,
    title: 'FE',
    des: 'Build a Drag and Drop File Uploader where a user can upload an image. Also create a button called browse files if the user is on mobile devices. Lastly,create a box or a div and make the user uploaded image an avatar or profile picture. Check the learn page for solution.'
  },
 ]

 const handleTab = (index) => {
  setIdx(index)
  setActive(!active)
 }
 const temp = arr[idx]
  return (
    <div id="post" className={styles.challenge_container}>
     <div className={styles.headers}>
       { arr.map((item,index) => {
         return (
           <div key={index}>
             <h2 id='tabh2' onClick={() => handleTab(index)}>{item.title}</h2>
           </div>
         )
       })}
       
     </div>
     <div><p>{temp.des}</p></div>
    </div>
  )
}

export default Challenge

