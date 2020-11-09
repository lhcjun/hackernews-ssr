import React from 'react';

const SwitchPage = ({ className, label, goPage, changeCurrentPage }) => {
  return (
    <li className={className} onClick={() => changeCurrentPage(goPage)}>
      <a>{label}</a>
    </li>
  );
};

export default SwitchPage;
