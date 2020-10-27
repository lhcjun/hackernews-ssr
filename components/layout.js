import Nav from './Nav';

const Layout = ({ mainTitle, footer, children }) => (
  <div>
    <Nav />
    <h2>{mainTitle}</h2>
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
