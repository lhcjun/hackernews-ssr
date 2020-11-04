import Nav from './nav';
import SearchBar from './searchbar';

const Layout = ({ mainTitle, footer, children }) => (
  <div>
    <Nav />
    <div className='page-title'>
      <h2>{mainTitle}</h2>
      <SearchBar />
    </div>
    <hr />
    {children}
    <hr />
    <h5>{footer}</h5>

    <style jsx>{`
      h2,
      h5 {
        margin: 1rem 1rem 1rem 2rem;
      }

      @media screen and (max-width: 500px) {
        h2 {
          font-size: 1.2rem;
          margin-right: 0;
        }
      }
    `}</style>
  </div>
);

export default Layout;
