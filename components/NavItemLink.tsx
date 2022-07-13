import NextLink from "next/link";
import { Button } from "@chakra-ui/react";

type Props = {
    navName: string;
    variant?: string;
    url?: string;
};

const NavItem = ({ navName, variant="solid", url="" }: Props) => {
    url = url == "" ? `${url}/${navName.toLowerCase()}` : url;
    return (
        <NextLink href={url} passHref>
            <Button variant={variant} color="#007fff">{navName}</Button>
        </NextLink>
    );
};

export default NavItem;
