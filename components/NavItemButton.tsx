import NextLink from "next/link";
import { Button, Link } from "@chakra-ui/react";

type Props = {
    navName: string,
    variant?: string,
    url?: string,
    size?: string,
    isExternal?: boolean,
};

const NavItemButton: (props: Props) => JSX.Element = ({ navName, variant="link", url="", size="sm", isExternal=false }) => {
    url = url == "" ? `${url}/${navName.toLowerCase()}` : url;
    return (
        <NextLink href={url} passHref>
            <Link isExternal={isExternal}>
                <Button variant={variant} size={size}>
                    {navName}
                </Button>
            </Link>
        </NextLink>
    );
};

export default NavItemButton;
