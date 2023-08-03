import NavItemButton from "../components/NavItemButton";
import { Spacer, Flex, HStack, Link, Text, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import NextLink from "next/link";

const NavBar: () => JSX.Element = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex direction="row" alignSelf="stretch" justifyContent="space-between">
            <NavItemButton navName="TOMMY" url="/" size="lg"/>
            <HStack as="nav">
                <NavItemButton navName="Projects"/>
                <Text>|</Text>
                <NavItemButton navName="Writings"/>
                <Text>|</Text>
                <NavItemButton navName="Blog"/>
                <Text>|</Text>
                <IconButton aria-label="color mode" variant="link" onClick={toggleColorMode}>
                    { colorMode === 'light' ? <MoonIcon/> : <SunIcon/> }
                </IconButton>
            </HStack>
        </Flex>
    );
};

export default NavBar;
