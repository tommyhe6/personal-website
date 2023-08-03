import "../styles/global.css";
import Layout from "../components/Layout";
import { ChakraProvider, extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes"
import "@fontsource/montserrat";
import Head from "next/head";
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import type { AppProps } from 'next/app';
import type { NextPage } from "next";

const theme: ThemeConfig = extendTheme({
    initialColorMode: "dark",
    useSystemColorMode: false,
    fonts: {
        heading: "montserrat",
        body: "montserrat",
    },
    colors: {
        blue: "#5A82C6",
        redbrown: "#C41E07",
        lightgray: "#909090",
        white: "#FAF9F6",
        darkgray: "#2A2829"
    },
    styles: {
        global: (props: StyleFunctionProps) => ({
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
            a: {
                "*": {
                    color: mode("redbrown", "blue")(props)
                }
            }
        })
    }
});

const MyApp: (props: AppProps) => JSX.Element  = ({ Component, pageProps }) => {
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
