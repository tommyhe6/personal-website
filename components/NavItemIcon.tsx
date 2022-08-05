import NextLink from "next/link";
import { Link, Icon, IconButton } from "@chakra-ui/react";

type Props = {
    label: string,
    icon: JSX.Element,
    url: string,
};

const NavItemIcon: (props: Props) => JSX.Element = ({ label, icon, url }) => {
    return (
        <NextLink href={url} passHref>
            <Link isExternal>
                <IconButton aria-label={label} size="lg" fontSize="30px" variant="ghost" icon={icon}/>
            </Link>
        </NextLink>
    );
};

export default NavItemIcon;
