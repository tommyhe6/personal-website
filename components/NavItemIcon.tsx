import NextLink from "next/Link";
import { Link, Icon } from "@chakra-ui/react";
import type { NextFunctionComponent } from "next";

type Props = {
    size: string;
    icon: string;
    url: string;
};

const NavItemIcon: NextFunctionComponent<Props> = ({ size, icon, url }) => {
    return (
        <NextLink href={url} passHref>
            <Link>
                <Icon boxSize={size} as={icon} />
            </Link>
        </NextLink>
    );
};

export default NavItemIcon;
