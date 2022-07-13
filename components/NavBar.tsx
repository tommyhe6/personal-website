import NavItemLink from "../components/NavItemLink";
import { Flex, HStack, Link, Text, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import type { NextFunctionComponent } from "next";
import NextLink from "next/Link";

const NavBar: NextFunctionComponent = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex direction="row" alignSelf="stretch" justifyContent="space-between">
            <NextLink href="/" passHref>
                <NavItemLink navName="TOMMY" variant="link" />
            </NextLink>
            <HStack as="nav">
                <NavItemLink navName="About" />
                <NavItemLink navName="Posts" />
                <NavItemLink navName="Projects" />
                <NavItemLink navName="Papers" />
                <IconButton onClick={toggleColorMode}>
                    { colorMode === 'light' ? <MoonIcon/> : <SunIcon/> }
                </IconButton>
            </HStack>
        </Flex>
    );
};

export default NavBar;
