interface ISwitchPageProps {
  className: string;
  label: string;
  goPage: number;
  changeCurrentPage: (goPage: number) => void; // Function
}

const SwitchPage = ({ className, label, goPage, changeCurrentPage }: ISwitchPageProps) => {
  return (
    <li className={className} onClick={() => changeCurrentPage(goPage)}>
      <a>{label}</a>
    </li>
  );
};

export default SwitchPage;
