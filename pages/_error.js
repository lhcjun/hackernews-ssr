import Layout from '../components/layout';

const Error = ({ message }) => (
  <Layout mainTitle='Error'>
    <div>
      <p>{message}</p>
    </div>
  </Layout>
);

export default Error;
