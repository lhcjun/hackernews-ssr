import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Head from 'next/head';
import fetch from 'isomorphic-fetch';
import Layout from '../components/Layout';
import Error from './_error';

const Index = ({ news }) => (
  <div>
    <Layout mainTitle="News" footer={`Copyright © ${new Date().getFullYear()}`}>
      <h2>List of News</h2>
      <hr />
      {news ? (
        news.map((eachNews, i) => (
          <p key={i}>
            <a href={eachNews.url} target="_blank" className="each-news">
              {eachNews.title}
            </a>
          </p>
        ))
      ) : (
        <h3>No Related News</h3>
      )}
    </Layout>

    <style jsx>{`
      a,
      a:hover,
      a:active,
      a:visited,
      a:focus {
        text-decoration: none;
        font-size: 1.1rem;
      }

      a {
        color: rgb(0, 165, 151);
      }
      a:visited {
        color: purple;
      }
      a:hover,
      a:active,
      a:focus {
        color: black;
      }
    `}</style>
  </div>
);

// data fetching method (with functional component)
Index.getInitialProps = async () => {
  let news;
  try {
    const res = await fetch(`https://hn.algolia.com/api/v1/search?query=react`);
    news = await res.json();
    console.log(news);
  } catch (err) {
    console.log(err);
    news = [];
  }

  return {
    news: news.hits,
  };
};

export default Index;
