import NavBar from "./NavBar";
import Contact from "./Contact";
import { VStack, Flex, Spacer } from "@chakra-ui/react";

type Props = {
    children: JSX.Element,
};

const Layout: (props: Props) => JSX.Element = ({ children }) => {
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Flex h="97vh" width="60vw" margin="auto" direction="column" alignItems="center" p={3}>
                <NavBar />
                {children}
                <Spacer />
                <Contact />
            </Flex>
            </>
    );
};

export default Layout;
