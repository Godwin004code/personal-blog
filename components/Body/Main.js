
import Post from "../Post/Post"


const Main = ({data, search}) => {

  
   
  // 'https://murmuring-dawn-44285.herokuapp.com/ item.attributes.img.data.attributes.url'+

 //  'http://localhost:1337' + item.attributes.img.data.attributes.url;
  // 'https://murmuring-dawn-44285.herokuapp.com/'+ item.attributes.img.data.attributes.url
  return (
    <>
    <div>
      
    </div>
    {
        data.filter((item) => item.attributes.title.toLowerCase().includes(search)).map((item) => {
            const img =  item.attributes.img.data.attributes.url
           
            const date = new Date(item.attributes.createdAt);
            const time = date.toLocaleTimeString()
            const _date = date.toLocaleDateString()
            
            return <Post id={item.id} time={time} img={img} _date={_date} title={item.attributes.title} category={item.attributes.category} excerpt={item.attributes.excerpt} key={item.id} />
        })
    }
    </>
  )
}

export default Main