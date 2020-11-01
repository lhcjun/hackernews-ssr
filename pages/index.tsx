import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import fetch from 'isomorphic-fetch';
import Layout from '../components/Layout';

interface INews {
  created_at: string;
  title: string;
  url: string;
}

interface IIndexProps {
  news?: Array<INews>;
}

const Index: React.FC<IIndexProps> = ({ news }) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');

  const onInputChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // push user input to url router
    router.push({
      query: { searchTerm: searchValue },
    });
  };

  const searchForm = () => (
    <form onSubmit={onHandleSubmit} className="search-area">
      <input
        type="search"
        // value={searchValue}
        placeholder="What are we looking for ?"
        onChange={onInputChange}
        className="search-box"
      />
      <button className="search-btn">
        <img src="./static/search.svg" alt="search" height="17" />
      </button>
    </form>
  );

  return (
    <div>
      <Layout
        mainTitle="News"
        footer={`Copyright © ${new Date().getFullYear()}`}
      >
        {searchForm()}
        {news.length ? (
          news.map((eachNews, i) => (
            <p key={i}>
              <a href={eachNews.url} target="_blank">
                {eachNews.title}
              </a>
            </p>
          ))
        ) : (
          <h3 className="empty-news">No Related News</h3>
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

// new data fetching method (gets called on every req & only runs on server-side)
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // grab user input query from url router
  let news;
  try {
    const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${query.searchTerm || 'react'}`);
    news = await res.json();
    console.log(news.hits);
  } catch (err) {
    console.log(err);
    news = [];
  }

  return {
    props: { news: news.hits },
  };
};

export default Index;

/* old data fetching method - getInitialProps

Initial page load → run on the server only
Navigating to a different route via the next/link or next/router → run on the client

  Index.getInitialProps = async ({ query }) => {
    let news;
    try {
      const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${query.searchTerm || 'react'}`);
      news = await res.json();
    } catch (err) {
      console.log(err);
      news = [];
    }

    return {
      news: news.hits,
    };
  };
*/
