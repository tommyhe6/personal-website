import NavBar from "components/NavBar";
import Contact from "components/Contact";

import { VStack, Box } from "@chakra-ui/react";

type Props = {
    children: JSX.Element;
};

const Layout: (props: Props) => JSX.Element = ({ children }) => {
    return (
        <Box>
            <VStack minHeight="100vh" width="80vw" margin="auto" paddingY="3">
                <NavBar />
                <Box flexGrow={1} display="flex">
                    {children}
                </Box>
                <Contact />
            </VStack>
        </Box>
    );
};

export default Layout;
