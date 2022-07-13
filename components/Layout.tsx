import NavBar from "./NavBar";
import Contact from "./Contact";
import { VStack, Spacer } from "@chakra-ui/react";
// import React from "react"

type Props = {
    children: JSX.Element;
}

const Layout = ({ children }: Props) => {
    return (
        <VStack height = "100vh" direction="column" alignItems="center" p={3}>
            <NavBar />
            {children}
            <Spacer />
            <Contact />
        </VStack>
    );
};

export default Layout;
