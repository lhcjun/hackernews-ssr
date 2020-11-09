import React from 'react';

const Page = ({ currentPageNum, pageNumNextToActivePage, pageNum, changeCurrentPage }) => {
  let left = currentPageNum - pageNumNextToActivePage,
    right = currentPageNum + pageNumNextToActivePage + 1,
    range = [],
    rangeWithEllipsis = [],
    l = undefined,
    isEllipsisIncludes = false;

  for (let i = 1; i <= pageNum; i++) {
    if (i === 1 || i === pageNum || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l && i - l !== 1) {
      rangeWithEllipsis.push(
        <li key={isEllipsisIncludes ? -1 : 0} className="pageElli">
          <a> . . .</a>
        </li>
      );
      isEllipsisIncludes = true;
    }
    rangeWithEllipsis.push(
      <li
        key={i}
        className={currentPageNum === i ? 'is-active' : 'page'}
        onClick={(e) => {
          e.preventDefault();
          changeCurrentPage(i);
        }}
      >
        <a>{i}</a>
      </li>
    );
    l = i;
  }
return <li>{rangeWithEllipsis}</li>;
};

export default Page;
