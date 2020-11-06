import * as React from 'react';
import { GetServerSideProps } from 'next';
import fetch from 'isomorphic-fetch';
import Layout from '../components/layout';
import EachNews from '../components/each-news';

export interface INews {
  created_at: string;
  title: string;
  url: string;
}

interface IIndexProps {
  news?: Array<INews>;
}

const Index: React.FC<IIndexProps> = ({ news }) => {
  return (
    <div>
      <Layout
        mainTitle="Related News"
        footer={`Copyright © ${new Date().getFullYear()}`}
      >
        {news.length ? (
          news.map((eachNews, i) => <EachNews eachNews={eachNews} key={i} />)
        ) : (
          <h3 className="empty-news">No Related News</h3>
        )}
      </Layout>
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
    console.log(news);
  } catch (err) {
    console.log(err);
    news = [];
  }

  return {
    props: { news: news.hits },
  };
};

export default Index;

/* 
old data fetching method - getInitialProps

  - Initial page load → run on the server only
  - Navigating to a different route via the next/link or next/router → run on the client

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
