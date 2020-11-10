import React from 'react';
import { INews } from '../pages/index';
import { convertTime } from '../utils/convert-time';

interface IEachNewsProps {
  eachNews: INews;
}

const EachNews: React.FC<IEachNewsProps> = ({ eachNews }): JSX.Element => {
  // if ((eachNews.title && eachNews.url) || (eachNews.story_title && eachNews.story_url)) {
  if (eachNews.title || eachNews.story_title) { // if no url, redirect to current page
    return (
      <div className="each-news">
        <a href={eachNews.url ? eachNews.url : eachNews.story_url} target="_blank">
          {eachNews.title ? eachNews.title : eachNews.story_title}
        </a>
        <div className="created-at">
          <img src="../static/time.svg" alt="created at" />
          {eachNews.created_at ? convertTime(eachNews.created_at) : null}
        </div>

        <style jsx>{`
          a {
            color: #2a98cc;
          }
          a:visited {
            color: #491c67;
          }
          a:hover,
          a:active,
          a:focus {
            color: #12668d;
          }
        `}</style>
      </div>
    );
  }else{// ex. uwo
    return <div className='post-not-found'>Sorry, this post is gone :-(</div>;
  }
};

export default EachNews;
