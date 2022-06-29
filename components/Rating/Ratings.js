
import styles from '../../styles/Rating.module.css'

const Ratings = () => {
    return (
        <div id='contact' className={styles.rating_container}>
        <h2>Top 5 YouTube videos to watch this week</h2>
        <ol>
            <div className={styles.rating_box}>
            <li><a href='https://www.youtube.com/watch?v=gXLjWRteuWI'>
            Learn HTML & CSS in 2022 | Crash Course
            </a></li>
            <p>This HTML and CSS is recommended for beginners. You will learn HTML concepts and also take your CSS skill to a new level. Don't miss it.( 2 hour YouTube course )</p>
            </div>
            <div className={styles.rating_box}>
            <li><a href='https://www.youtube.com/watch?v=zrs7u6bdbUw&t=2762s'>
                Redux Tutorial Beginner to Advanced
            </a></li>
            <p>Learn how to use Redux in this full course for beginners. You will learn how to use Redux with ReduxToolkit Library to create an application involving HTTP requests.( 2 hour YouTube course )</p>
            </div>
            <div className={styles.rating_box}>
            <li><a href='https://www.youtube.com/watch?v=VozPNrt-LfE'>
            React Native Crash Course | Build a Complete App
            </a></li>
            <p>In this in-depth React Native tutorial, you'll learn React Native from the ground up! React Native is a library building up on React.js, which allows you to build real native mobile apps for both iOS and Android.( 3.5 hour YouTube course )</p>
            </div>
            <div className={styles.rating_box}>
            <li><a href='https://www.youtube.com/watch?v=Oe421EPjeBE'>
            Node.js and Express.js - Full Course
            </a></li>
            <p>Learn how to use Node and Express in this comprehensive course. First, you will learn the fundamentals of Node and Express. Then, you will learn to build a complex Rest API. Finally, you will build a MERN app and other Node projects.( 8 hour YouTube course )</p>
            </div>
            <div className={styles.rating_box}>
            <li><a href='#'>
            Intermediate Python Programming Course
            </a></li>
            <p>Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.( 6 hour YouTube course )</p>
            </div>
        </ol>
        </div>
    )
}

export default Ratings