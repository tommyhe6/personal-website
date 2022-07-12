import NavItemLink from "../components/NavItemLink";
import { Flex, HStack, Link, Text } from "@chakra-ui/react";
import type { NextFunctionComponent } from "next";
import NextLink from "next/Link";

const NavBar: NextFunctionComponent = () => {
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
            </HStack>
        </Flex>
    );
};

export default NavBar;
