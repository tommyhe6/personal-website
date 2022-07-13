import NextLink from "next/link";
import { Link, Icon, IconButton } from "@chakra-ui/react";
// import React from "react";

type Props = {
    label: string;
    icon: JSX.Element;
    url: string;
};

const NavItemIcon = ({ label, icon, url }: Props) => {
    return (
        <NextLink href={url} passHref>
            <Link>
                <IconButton aria-label={label} size="lg" fontSize="30px" variant="ghost" icon={icon}/>
            </Link>
        </NextLink>
    );
};

export default NavItemIcon;
