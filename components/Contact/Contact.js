
import {useState, useRef} from "react"
import { FaTwitter,FaWhatsapp,FaInstagram } from "react-icons/fa"
import styles from "../../styles/Contact.module.css"
import emailjs from "@emailjs/browser"


const Contact = () => {
    const [mes, setMes] = useState('')
    const [email, setEmail] = useState('')
    const form = useRef()
    const submitHandler = (e) => {
        emailjs
        .sendForm(
          "service_bquzkdk",
          "template_j8qjvsl",
          form.current,
          "SaKsUWe14ryr1EYV_"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert('Thank You')
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    return (
        <div id='contact' className={styles.contact}>
            {/* <p>My name is Alugbin Boluwatife Godwin. I am Front-end developer. I love exploring/learning new tech skill and I'm also passionate about sharing what I know with others, which brought about the building of this blog. I am available for any FE job either part-time or full-time </p> */}
            <div className={styles.contact_info}>
                <h2>You can contact me here</h2>
                <ul>
                    <li><a href="#"> <FaTwitter /> </a></li>
                    <li><a href="#"> <FaWhatsapp /> </a></li>
                    <li><a href="#"> <FaInstagram /> </a></li>
                </ul>
                <h2 className={styles.or}>or</h2>
                <h2>Send me mail directly from here</h2>
                <form ref={form} onSubmit={submitHandler}>
                    <div>
                        <textarea className={styles.textarea} placeholder="Message"></textarea>
                    </div>
                    <div>
                        <input className={styles.input} type="email" placeholder="Email" required/>
                    </div>
                    {/* <div>error</div> */}
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact