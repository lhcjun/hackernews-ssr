import * as React from 'react';
import { GetServerSideProps } from 'next';
import fetch from 'isomorphic-fetch';
import Layout from '../components/layout';
import EachNews from '../components/each-news';
import Pagination from '../components/pagination/pagination';

export interface INews {
  created_at: string;
  title: string;
  url: string;
}

interface IIndexProps {
  news?: Array<INews>;
  currentPage?: number;
  totalPages?: number;
}

const Index: React.FC<IIndexProps> = ({ news, currentPage, totalPages }) : JSX.Element => (
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
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </Layout>
    </div>
);

// new data fetching method (gets called on every req & only runs on server-side)
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // grab user input query from url router
  let news;
  console.log(query);
  try {
    const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${query.searchTerm || 'react'}&page=${query.page || 0}`);
    news = await res.json();
    console.log(news);
  } catch (err) {
    console.log(err);
    news = [];
  }

  return {
    props: { 
      news: news.hits,
      currentPage: news.page,        // current page (start from 0, up to 49)
      totalPages: news.nbPages       // total page numbers
    },
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
