import NavBar from "./NavBar";
import Contact from "./Contact";
import { VStack, Spacer } from "@chakra-ui/react";
import type { NextFunctionComponent } from "next"; 

type Props = {
    children: NextFunctionComponent;
};

const Layout: NextFunctionComponent<Props> = ({ children }) => {
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
