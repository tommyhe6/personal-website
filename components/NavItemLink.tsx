import NextLink from "next/Link";
import { Button } from "@chakra-ui/react";
import type { NextFunctionComponent } from "next";

type Props = {
    navName: string;
    variant?: string;
    href?: string;
};

const NavItem: NextFunctionComponent<Props> = ({ navName, variant="solid", href }) => {
    href = href ? href : `/${navName.toLowerCase()}`;
    return (
        <NextLink href={href} passHref>
            <Button variant={variant} color="#007fff">{navName}</Button>
        </NextLink>
    );
};

export default NavItem;
