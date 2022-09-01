import "../styles/global.css";
import Layout from "../components/Layout";
import { ChakraProvider, extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes"
import "@fontsource/montserrat";
import Head from "next/head";
import type { AppProps } from 'next/app';
import type { NextPage } from "next";

const theme: ThemeConfig = extendTheme({
    fonts: {
        heading: "montserrat",
        body: "montserrat",
    },
    colors: {
        redbrown: "#c41e07",
        // gray: "#666666"
        lightgray: "#909090"
    }
});

const MyApp: (props: AppProps) => JSX.Element  = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
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
