import NavBar from "./NavBar";
import Contact from "./Contact";
import { VStack, Spacer } from "@chakra-ui/react";

type Props = {
    children: JSX.Element;
}

const Layout = ({ children }: Props) => {
    return (
        <VStack height = "100vh" width="60vw" margin="auto" direction="column" alignItems="center" p={3}>
            <NavBar />
            {children}
            <Spacer />
            <Contact />
        </VStack>
    );
};

export default Layout;
