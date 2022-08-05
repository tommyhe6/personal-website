import "../styles/global.css";
import Layout from "../components/Layout";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { ThemeConfig } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes"
import "@fontsource/merriweather";
import type { AppProps } from 'next/app';
import type { NextPage } from "next";

const theme: ThemeConfig = extendTheme({
    fonts: {
        heading: "merriweather",
        body: "merriweather",
    },
    colors: {
        redbrown: "#c41e07",
        // gray: "#666666"
        lightgray: "#909090"
    }
});

const MyApp: (props: AppProps) => JSX.Element  = ({ Component, pageProps }) => {
    return (
        <ThemeProvider>
            <ChakraProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </ThemeProvider>
    );
};

export default MyApp;
