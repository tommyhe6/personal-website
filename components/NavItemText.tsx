import NextLink from "next/link";
import { Link, Text } from "@chakra-ui/react";

type Props = {
    label?: string,
    url?: string,
    isExternal?: boolean,
};

const NavItemText: (props: Props) => JSX.Element = ({ label, url, isExternal=false}) => {
    return (
        /* <NextLink href={url} passHref> */
            <Link href={url} isExternal={isExternal}>
                {label}
            </Link>
        /* </NextLink> */
    );
};

export default NavItemText;
