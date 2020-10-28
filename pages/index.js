import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Head from 'next/head';
import fetch from 'isomorphic-fetch';
import Layout from '../components/Layout';
import Error from './_error';

const Index = ({ news }) => {
  const [searchValue, setSearchValue] = useState({
    queryWord: 'react',
    coolMsg: '',
  });

  const { queryWord, coolMsg } = searchValue;

  const onInputChange = (name) => (e) => {
    setSearchValue({ ...searchValue, [name]: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // push user input to url router
    Router.push(`/news/?searchTerm=${queryWord}`);
  };

  const searchForm = () => (
    <form onSubmit={onHandleSubmit}>
      <input type="text" value={queryWord} onChange={onInputChange('queryWord')} />
      <input
        type="text"
        placeholder="Write something.."
        onChange={onInputChange('coolMsg')}
      />
      <button>Search</button>
    </form>
  );

  return (
    <div>
      <Layout
        mainTitle="News"
        footer={`Copyright © ${new Date().getFullYear()}`}
      >
        {coolMsg}
        {searchForm()}
        <hr />
        {news ? (
          news.map((eachNews, i) => (
            <p key={i}>
              <a href={eachNews.url} target="_blank">
                {eachNews.title}
              </a>
            </p>
          ))
        ) : (
          <h3>No Related News</h3>
        )}
      </Layout>

      <style jsx>{`
        h2,
        p {
          margin: 1rem 2rem;
        }

        a,
        a:hover,
        a:active,
        a:visited,
        a:focus {
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: 400;
        }

        a {
          color: rgb(0, 165, 151);
        }
        a:visited {
          color: rgb(81, 6, 131);
        }
        a:hover,
        a:active,
        a:focus {
          color: black;
        }
      `}</style>
    </div>
  );
};

// data fetching method (with functional component)
Index.getInitialProps = async ({ query }) => {
  // grab user input query from url router
  let news;
  try {
    console.log(query);
    const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${query.searchTerm || 'react'}`);
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
