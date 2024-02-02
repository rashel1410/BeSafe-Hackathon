import Layout from '../comps/Layout';
import '../styles/globals.css';
import { AppProvider } from '../public/context';

function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default App;
