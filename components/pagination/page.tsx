interface IPageProps {
  currentPageNum: number;
  totalPages: number;
  changeCurrentPage: (goPage: number) => void; // Function
}

const Page = ({ currentPageNum, totalPages, changeCurrentPage }: IPageProps) => {
  let pageNumNextToActivePage = 1,
    left = currentPageNum - pageNumNextToActivePage,
    right = currentPageNum + pageNumNextToActivePage + 1,
    range: Array<number> = [],
    rangeWithEllipsis: Array<JSX.Element> = [],
    lastRangeNum: number| undefined = undefined,
    isEllipsisIncludes = false;

  // get the range of page numbers (1, n-1, n, n+1, last)
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= left && i < right)) {
      range.push(i);
    }
  }

  // insert ellipsis between the two discontinuous page number
  for (let i of range) {
    // if i - lastRangeNum >= 2 ⇒ push ellipsis into [] (between lastRangeNum & i → lastRangeNum ... i)
    if (lastRangeNum && i - lastRangeNum !== 1) {
      rangeWithEllipsis.push(
        <li key={isEllipsisIncludes ? -1 : 0} className="page-ellipsis">
          <a> . . .</a>
        </li>
      );
      isEllipsisIncludes = true;
    }
    // push page number(i) into []
    rangeWithEllipsis.push(
      <li
        key={i}
        className={currentPageNum === i ? 'is-active' : 'switch-page'}
        onClick={(e) => {
          e.preventDefault();
          changeCurrentPage(i - 1);
        }}
      >
        <a>{i}</a>
      </li>
    );
    lastRangeNum = i;
  }
  return <span>{rangeWithEllipsis}</span>;
};

export default Page;
