import NavItemLink from "../components/NavItemLink";
import { Flex, HStack, Link, Text, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import NextLink from "next/link";

const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex direction="row" alignSelf="stretch" justifyContent="space-between">
            <NavItemLink navName="TOMMY" variant="link" url="/"/>
            <HStack as="nav">
                <NavItemLink navName="About" />
                <NavItemLink navName="Posts" />
                <NavItemLink navName="Projects" />
                <NavItemLink navName="Papers" />
                <IconButton aria-label="color mode" onClick={toggleColorMode}>
                    { colorMode === 'light' ? <MoonIcon/> : <SunIcon/> }
                </IconButton>
            </HStack>
        </Flex>
    );
};

export default NavBar;
