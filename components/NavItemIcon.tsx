import NextLink from "next/link";
import { Link, IconButton } from "@chakra-ui/react";

type Props = {
    label: string,
    icon: JSX.Element,
    url: string,
};

const NavItemIcon: (props: Props) => JSX.Element = ({ label, icon, url }) => {
    return (
        <NextLink href={url} passHref>
            <Link href={url} isExternal>
                <IconButton aria-label={label} size="lg" fontSize="3xl" variant="ghost" icon={icon} />
            </Link>
        </NextLink>
    );
};

export default NavItemIcon;
