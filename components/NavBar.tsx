import NavItemText from "components/NavItemText";

import { Flex, HStack, Text } from "@chakra-ui/react";

const NavBar: () => JSX.Element = () => {
    return (
        <Flex direction="row" alignSelf="stretch" as="h1" marginBottom="1em">
            <HStack>
                <NavItemText label="Tommy He" url="/" fontSize="2xl" />
                <Text>|</Text>
                <NavItemText label="Writings" url="/writings" fontSize="2xl" />
            </HStack>
        </Flex>
    );
};

export default NavBar;
