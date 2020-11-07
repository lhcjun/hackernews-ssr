import React from 'react';
import { INews } from '../pages/index';
import { convertTime } from '../utils/convert-time';

interface IEachNewsProps {
  eachNews: INews;
}

const EachNews: React.FC<IEachNewsProps> = ({ eachNews }) : JSX.Element => (
  <div className="each-news">
    <a href={eachNews.url} target="_blank">
      {eachNews.title}
    </a>
    <div className="created-at">
      <img src="../static/time.svg" alt="created at" />
      {convertTime(eachNews.created_at)}
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

export default EachNews;
