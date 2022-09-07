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
        lightgray: "#909090",
        white: "#FAF9F6"
    },
    styles: {
        global: {
            h1: {
                fontSize: "2xl",
                fontWeight: "bold"
            },
            h2: {
                fontSize: "xl"
            },
            h3: {
                fontSize: "lg"
            },
        }
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
