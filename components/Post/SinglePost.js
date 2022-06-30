import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Nav from "../Nav/Nav";
import styles from "../../styles/Body.module.css";
import _styles from "../../styles/Main.module.css";
import __styles from "../../styles/Singlepost.module.css";
import Link from "next/link";
import Head from "next/head";
import rehypeRaw from "rehype-raw";

const SinglePost = ({
  img,
  title,
  content,
  category,
  author,
  date,
  time,
  excerpt,
  updatedDate,
}) => {
  return (
    <>
      <Head>
        <meta name="description" content={excerpt} />
        <meta name="theme-color" content="#b01100" />
        <title>{title}</title>
      </Head>
      <Nav />

      <div id="long_link" className={_styles.long_link}>
        <Link href="/">
          <a>
            Home <span>&raquo;</span>
          </a>
        </Link>{" "}
        <Link href={`/category/${category}`}>
          <a>
            {category} <span>&raquo;</span>
          </a>
        </Link>{" "}
        <a>{title}</a>
      </div>
      <h2 id="title" className={__styles.h2}>
        {title}
      </h2>

      <div className={styles.body}>
        <article id="main" className={styles.mains}>
          <div className={_styles.article}>
            <div className={__styles.article_img}>
              <img src={img} alt={title} />
            </div>
            <div id="author" className={__styles.author}>
              <div>Published By : {author}</div>
              <div className={__styles.published_date}>
                <span>{date}</span>
                <span>{time}</span>
              </div>
            </div>
            <div className={_styles.articles}>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {content}
              </ReactMarkdown>
            </div>
          </div>
          <div
            style={{
              marginTop: "4rem",
              fontSize: "1.3rem",
              marginLeft: "10px",
            }}
          >
            Last Modified: <span>{updatedDate}</span>
          </div>
        </article>
      </div>
    </>
  );
};

export default SinglePost;
