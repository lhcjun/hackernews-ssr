import Layout from '../components/Layout';

const Index = () => (
  <Layout
    mainTitle="Home Page built with Next JS"
    footer={`Copyright © ${new Date().getFullYear()}`}
  >
    <h1>Next.js SSR</h1>
  </Layout>
);

export default Index;
