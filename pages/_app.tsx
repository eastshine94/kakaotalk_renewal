import type { AppProps } from 'next/app';
import GlobalContextWrapper from 'src/context/GlobalContextWrapper';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextWrapper>
      <Component {...pageProps} />
    </GlobalContextWrapper>
  );
}

export default MyApp;
