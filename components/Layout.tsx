import NavBar from "./NavBar";
import Contact from "./Contact";
import { VStack, Spacer } from "@chakra-ui/react";

type Props = {
    children: JSX.Element;
}

const Layout = ({ children }: Props) => {
    return (
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <VStack height = "97vh" width="60vw" margin="auto" direction="column" alignItems="center" p={3}>
            <NavBar />
            {children}
            <Spacer />
            <Contact />
        </VStack>
        </>
    );
};

export default Layout;
