import NavBar from "./NavBar";
import Contact from "./Contact";
import { VStack, Flex, Spacer } from "@chakra-ui/react";

type Props = {
    children: JSX.Element;
};

const Layout: (props: Props) => JSX.Element = ({ children }) => {
    return (
        <Flex direction="column" minHeight="100vh" width="60vw" margin="auto" alignItems="center" p={3}>
            <NavBar />
            {children}
            <Spacer />
            <Contact />
        </Flex>
    );
};

export default Layout;
