export default function Custom404() {
  return (
    <div>
      <article>
        <img src="https://i.imgur.com/Q2BAOd2.png" alt="error loading" />
        <h2>Sorry, the page is broken.</h2>
        <h5>This Page is Not on the Map.</h5>
      </article>

      <style jsx>{`
        article {
          margin-top: 7rem;
          height: 60vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        img {
          display: inline-block;
          background-size: cover;
          background-position: center;
          width: 40vh;
          height: 40vh;
        }

        h2 {
          font-size: 1.75rem;
          color: #2f8e89;
        }

        h5 {
          font-size: 1.2rem;
          font-weight: 500;
          color: #acacac;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
