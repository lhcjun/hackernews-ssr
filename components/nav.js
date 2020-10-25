import Link from 'next/link';

const Nav = () => (
  <div>
    <img src="" />
    <Link href="/">
      <button>Home</button>
    </Link>
    <Link href="/about">
      <button>About</button>
    </Link>

    <style jsx>{`
      a,
      img {
        padding: 10px;
      }
    `}</style>
  </div>
);

export default Nav;
