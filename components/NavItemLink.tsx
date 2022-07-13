import NextLink from "next/link";
import { Button } from "@chakra-ui/react";

type Props = {
    navName: string;
    variant?: string;
};

const NavItemLink = ({ navName, variant="solid" }: Props) => {
    const href: string = `/${navName.toLowerCase()}`;
    return (
        <NextLink href={href} passHref>
            <Button variant={variant} color="#007fff">{navName}</Button>
        </NextLink>
    );
};

export default NavItemLink;
