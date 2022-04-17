import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';


const myApp = ({ Component, pageProps }: AppProps) => {
  
  const activeChainId = ChainId.Rinkeby
  return (
    <>
      <Head>
        <title>Hemp DAO</title>
        <link
          rel="shortcut icon"
          href="assets/weed.png"
        />
        <link
          rel="apple-touch-icon"
          href="assets/weed.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <ThirdwebProvider desiredChainId={activeChainId}>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </>
  );
};

export default myApp;
