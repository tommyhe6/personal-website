import Layout from "components/Layout";

import { ChakraProvider, extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes"
import "@fontsource/montserrat";
import Head from "next/head";
import type { AppProps } from 'next/app';

const theme: ThemeConfig = extendTheme({
    useSystemColorMode: false,
    fonts: {
        heading: "montserrat",
        body: "montserrat",
        mono: "Menlo, monospace",
    },
    colors: {
        white: "#FAF9F6",
        black: "#0C0D0E",
        red: "#EE4B2B",
        date: "#8A9A5B",
        link: "#00008B",
    },
    styles: {
        global: {
            body: {
                background: "white",
                textColor: "black",
                fontSize: "lg",
                fontWeight: "medium",
                marginLeft: "calc(100vw - 100%)"
            }
        }
    },
});

const MyApp: (props: AppProps) => JSX.Element = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <ThemeProvider>
                <ChakraProvider theme={theme}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ChakraProvider>
            </ThemeProvider>
        </>
    );
};

export default MyApp;
