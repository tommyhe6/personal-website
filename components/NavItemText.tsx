import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

type Props = {
    label?: string,
    url: string,
    isExternal?: boolean,
    fontSize: string,
};

const NavItemText: (props: Props) => JSX.Element = ({ label, url, fontSize }) => {
    return (
        <NextLink href={url} passHref>
            <Link href={url} fontSize={fontSize} fontWeight="bold" textColor="link">
                {label}
            </Link>
        </NextLink>
    );
};

export default NavItemText;
