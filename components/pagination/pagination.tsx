import React from 'react';
import { useRouter } from 'next/router';
import SwitchPage from './switch-page';
import Page from './page';

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<IPaginationProps> = ({ currentPage, totalPages }): JSX.Element => {
  const router = useRouter();
  let currentPageNum = currentPage + 1; // currentPage: start from 0 & up to 49

  const changeCurrentPage = (goPage: number) => {
    // push goPage to url router
    router.push({
      query: { 
        searchTerm: router.query.searchTerm,
        page: goPage
      },
    });
  }

  return (
    <div className='pagination'>
      <ul>
        {/* first page */}
        { currentPageNum === 1 ? null :
          <SwitchPage
            className={currentPageNum === 1 ? 'switch-page disabled': 'switch-page'}
            label="«" goPage={0} changeCurrentPage={changeCurrentPage}
          />
        }
        {/* previous page */}
          <SwitchPage 
            className={currentPageNum === 1 ? 'switch-page disabled': 'switch-page'}
            label="⟨" goPage={currentPage - 1} changeCurrentPage={changeCurrentPage}
          />
        {/* page number */}
          <Page 
            currentPageNum={currentPageNum} totalPages={totalPages} 
            changeCurrentPage={changeCurrentPage} 
          />
        {/* next page */}
          <SwitchPage 
            className={currentPageNum === totalPages ? 'switch-page disabled': 'switch-page'}
            label="⟩" goPage={currentPage + 1} changeCurrentPage={changeCurrentPage}
          />
        {/* last page */}
        { currentPageNum === totalPages ? null :
          <SwitchPage className={currentPageNum === totalPages ? 'switch-page disabled': 'switch-page'}
              label="»" goPage={totalPages - 1} changeCurrentPage={changeCurrentPage}
          />
        }
      </ul>
    </div>
  )
};

export default Pagination;
