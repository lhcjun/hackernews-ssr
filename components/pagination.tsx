import React, { useState } from 'react';
import { useRouter } from 'next/router';

interface IPaginationProps {
    currentPage: number;
    totalPages: number;
  }

const Pagination: React.FC<IPaginationProps> = ({ currentPage, totalPages }): JSX.Element => {
  const router = useRouter();
  const [showFirstLastPages, setShowFirstLastPages] = useState(false);
  const [pageNumNextToActivePage, setPageNumNextToActivePage] = useState(1);

  let pageNum = currentPage + 1;

  return (
    <div className='pagination'>
        {pageNum} {totalPages}
    </div>
  )
};

export default Pagination;
