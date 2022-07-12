import '../styles/globals.css';
import Layout from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes"
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const mainStyle = {
        width: "100px",
        margin: "0 auto",
    };
    return (
        <ThemeProvider>
            <ChakraProvider>
                <Layout>
                    <Component style={mainStyle} {...pageProps} />
                </Layout>
            </ChakraProvider>
        </ThemeProvider>
    );
};

export default MyApp;
