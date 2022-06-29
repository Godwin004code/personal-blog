
import SingleLearnPage from "./SingleLearnPage"
import Link from "next/link"
import {useGlobalContext} from "../Context/Context"
const Lms = ({data}) => {
    const {search} = useGlobalContext()
    return (
        <>
            {data.data.filter((item) => item.attributes.Project_name.includes(search)).map((item) => {
            const temp = item.attributes
           const img =  item.attributes.Pro.data.attributes.url
           console.log(img)
            return (
              <Link href={`/learn/${temp.slug}`} key={item.id}>
              <div><SingleLearnPage name={temp.Project_name} img={img} />   </div>
              </Link>
              )
          })}
    
        </>
    )
}


export default Lms