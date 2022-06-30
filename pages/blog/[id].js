
import SinglePost from "../../components/Post/SinglePost";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import styles from "../../styles/Body.module.css";
import Head from "next/head";

const URL = process.env.STRAPIBASEURL;

const Shock = ({ data, paths }) => {
  console.log(data);
  const [scrolled, setScrolled] = useState(0);

  const showProgress = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = (winScroll / height) * 100;
    setScrolled(scroll);
  };
  useEffect(() => {
    window.addEventListener("scroll", showProgress);
    return () => window.removeEventListener("scroll", showProgress);
  }, []);
  const post = data.data.attributes;
  const img = post.img.data.attributes.url;
  const date = new Date(post.createdAt);
  const time = date.toLocaleTimeString();
  const _date = date.toLocaleDateString();
  const updated = new Date(post.updatedAt);

  const UpdatedDate = updated.toLocaleDateString();
  //console.log(img);
  return (
    <>
      <Head>
        <meta name="description" content={`${post.title}`} />
        <meta name="theme-color" content="#b01100" />
        <title>{post.title}</title>
      </Head>
      <div>
        <SinglePost
          title={post.title}
          category={post.category}
          author={post.Author}
          content={post.content}
          excerpt={post.excerpt}
          img={img}
          date={_date}
          time={time}
          updatedDate={UpdatedDate}
          slug={post.slug}
        />

        <div className="progress_container">
          <div
            style={{ width: `${scrolled}%` }}
            className="progress_line"
          ></div>
        </div>

        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Shock;

export async function getStaticPaths() {
  const res = await fetch(
    `http://murmuring-dawn-44285.herokuapp.com/api/posts`
  );
  const data = await res.json();
  const paths = data.data.map((post) => {
    return { params: { id: post.id.toString() } };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://murmuring-dawn-44285.herokuapp.com/api/posts/${params.id}?populate=*`
  );
  const data = await res.json();
  return {
    props: { data },
    revalidate: 10,
  };
}
