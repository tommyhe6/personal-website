import '../styles/globals.css';
import Layout from "../components/Layout";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes"
import type { AppProps } from 'next/app';
import "@fontsource/merriweather";

const theme = extendTheme({
    fonts: {
        heading: "merriweather",
        body: "merriweather",
    },
    colors: {
        redbrown: "#c41e07",
    }
});

const MyApp = ({ Component, pageProps }: AppProps) => {
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
