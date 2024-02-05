import Layout from '../comps/Layout';
import '../styles/globals.css';
import { AppProvider } from '../public/context';

function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <div dir='rtl'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </div>
    </AppProvider>
  );
}

export default App;
