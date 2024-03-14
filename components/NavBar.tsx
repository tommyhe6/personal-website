import NavItemText from "components/NavItemText";

import { Flex, HStack, Text } from "@chakra-ui/react";

const NavBar: () => JSX.Element = () => {
    return (
        <Flex direction="row" alignSelf="stretch" marginBottom="1em">
            <HStack>
                <NavItemText label="Tommy He" url="/" fontSize="3xl" />
                <Text>|</Text>
                <NavItemText label="Writings" url="/writings" fontSize="3xl" />
                <Text>|</Text>
                <NavItemText label="24" url="/24" fontSize="3xl" />
            </HStack>
        </Flex>
    );
};

export default NavBar;
