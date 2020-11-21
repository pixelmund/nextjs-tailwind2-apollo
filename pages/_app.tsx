import '../styles/tailwind.css';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import MainLayout from '../components/Layouts/MainLayout';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  const Layout = Component?.layout ?? MainLayout;

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <ThemeProvider
        attribute="class"
        enableSystem
        themes={['light', 'dark']}
        defaultTheme="dark"
      >
        <ApolloProvider client={apolloClient}>
          <div className="text-main component">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </div>
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}
