import NavBar from "components/NavBar";
import Contact from "components/Contact";

import { VStack, Box } from "@chakra-ui/react";

type Props = {
    children: JSX.Element;
};

const Layout: (props: Props) => JSX.Element = ({ children }) => {
    return (
        <VStack minHeight="100vh" width="80vw" margin="auto" paddingY="3">
            <NavBar />
            <Box width="100%" flexGrow={1}>
                {children}
            </Box>
            <Contact />
        </VStack>
    );
};

export default Layout;
