import Nav from './Nav';
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
        margin: 1rem 2rem;
      }
    `}</style>
  </div>
);

export default Layout;
