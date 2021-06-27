import React from 'react';
import '../styles/globals.css';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import { useStore } from '../store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
