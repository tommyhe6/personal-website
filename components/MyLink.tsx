import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

type Props = {
    label: string,
    url: string,
};

const MyLink: (props: Props) => JSX.Element = ({ label, url }) => {
    return (
        <NextLink href={url} passHref>
            <Link href={url} fontWeight="bold" textColor="link">
                {label}
            </Link>
        </NextLink>

    );
};

export default MyLink;
