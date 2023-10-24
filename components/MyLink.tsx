import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

type Props = {
    label: string,
    url: string,
    isExternal?: boolean,
};

const MyLink: (props: Props) => JSX.Element = ({ label, url, isExternal }) => {
    return (
        <Link as={NextLink} href={url} fontWeight="bold" textColor="link" isExternal={isExternal}>
            {label}
        </Link>

    );
};

export default MyLink;
