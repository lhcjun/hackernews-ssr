import Link from 'next/link';

const Nav = () => (
  <div className="navigation">
    <Link href="/">
      <img src="./static/logo.svg" alt="logo" height="50" className="logo" />
    </Link>
    <Link href="/">
      <a className="nav-option">News</a>
    </Link>
    <Link href="/about">
      <a className="nav-option">About</a>
    </Link>

    <style jsx>{`
      a,
      a:hover,
      a:active,
      a:visited,
      a:focus {
        color: white;
      }
    `}</style>
  </div>
);

export default Nav;
