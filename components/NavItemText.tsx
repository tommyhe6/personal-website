import NextLink from "next/link";
import { Link, Text } from "@chakra-ui/react";

type Props = {
    label: string;
    url: string;
};

const NavItemText = ({ label, url }: Props) => {
    return (
        <NextLink href={url} passHref>
            <Link color="redbrown">
                {label}
            </Link>
        </NextLink>
    );
};

export default NavItemText;
