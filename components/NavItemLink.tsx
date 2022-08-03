import NextLink from "next/link";
import { Button, Link } from "@chakra-ui/react";

type Props = {
    navName: string;
    variant?: string;
    url?: string;
    size?: string;
    isExternal?: boolean;
};

const NavItemLink = ({ navName, variant="link", url="", size="sm", isExternal=false }: Props) => {
    url = url == "" ? `${url}/${navName.toLowerCase()}` : url;
    return (
        <NextLink href={url} passHref>
            <Link color="redbrown" isExternal={isExternal}>
                <Button variant={variant} color="redbrown" size={size}>
                    {navName}
                </Button>
            </Link>
        </NextLink>
    );
};

export default NavItemLink;
