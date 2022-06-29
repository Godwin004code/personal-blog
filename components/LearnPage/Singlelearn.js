import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"
// import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
// import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import Nav from "../Nav/Nav";
import styles from "../../styles/Body.module.css";
import _styles from "../../styles/Main.module.css";
import __styles from "../../styles/Singlepost.module.css";
import Link from "next/link";
import Head from "next/head";


const SingleLearn = ({ data }) => {
  const datas = data.data.attributes;
  const date = new Date(datas.publishedAt).toLocaleDateString()
  return (
    <>
      <Head>
        <meta name="description" content={datas.Project_name} />
        <meta name="theme-color" content="#b01100" />
        <title>{datas.Project_name}</title>
      </Head>
      <Nav />

      <div id='long_link' className={_styles.long_link}>
      <Link href='/'><a>Home<span>&raquo;</span></a></Link>  <a>{datas.Project_name}</a>
    </div>
      <h2 id="title" className={__styles.h2}>
        {datas.Project_name}
      </h2>
      <div className={styles.body}>
        <article id="main" className={styles.maines}>
          <div className={_styles.article}>
            {/* <div className={__styles.article_img}>
            <img src={img} alt={title} />
        </div> */}
            <div id="author" className={__styles.author}>
              <div>Published By : Godwin</div>
              <div className={__styles.published_date}>
                <span>{date}</span>
              </div>
            </div>
            <div style={{paddingBottom: '1.2rem'}} className={_styles.articles}>
              <ReactMarkdown rehypePlugins={[rehypeRaw]} >{datas.Project_content}</ReactMarkdown>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default SingleLearn;
