import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

type Props = {
    label?: string,
    url: string,
    fontSize?: string,
};

const NavItemText: (props: Props) => JSX.Element = ({ label, url, fontSize }) => {
    return (
        <Link as={NextLink} href={url} fontWeight="bold" textColor="link" fontSize={fontSize}>
            {label}
        </Link>
    );
};

export default NavItemText;
