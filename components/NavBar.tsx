import NavItemLink from "../components/NavItemLink";
import { Spacer, Flex, HStack, Link, Text, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import NextLink from "next/link";

const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex direction="row" alignSelf="stretch" justifyContent="space-between">
            <NavItemLink navName="TOMMY" url="/" size="lg"/>
            <HStack as="nav">
                <NavItemLink navName="Projects"/>
                <Text>|</Text>
                <NavItemLink navName="Papers"/>
                <Text>|</Text>
                <NavItemLink navName="Blog"/>
                <Text>|</Text>
                <NavItemLink navName="Contact"/>
                <Text>|</Text>
                <IconButton aria-label="color mode" variant="link" onClick={toggleColorMode}>
                    { colorMode === 'light' ? <MoonIcon/> : <SunIcon/> }
                </IconButton>
            </HStack>
        </Flex>
    );
};

export default NavBar;
