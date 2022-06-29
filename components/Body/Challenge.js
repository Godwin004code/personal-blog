
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
    des: 'Frontend Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora alias, soluta pariatur explicabo maiores velit repellendus! Architecto aliquid nostrum, voluptas consectetur numquam cupiditate doloribus tempora blanditiis velit quidem explicabo.'
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

