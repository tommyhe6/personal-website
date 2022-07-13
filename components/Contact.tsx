import NavItemIcon from "../components/NavItemIcon";
import { Text, HStack, VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import type { NextFunctionComponent} from "next";

const Contact: NextFunctionComponent = () => {
    return (
        <VStack>
            <Text>Contact -- Florida</Text>
            <HStack as="nav">
                <NavItemIcon size="2em" icon={FaGithub} url="https://github.com/THe142857" />
                <NavItemIcon size="2em" icon={FaLinkedin} url="https://www.linkedin.com/in/tommyhe6/" />
                <NavItemIcon size="2em" icon={MdEmail} url="" />
            </HStack>
        </VStack>
    );
};

export default Contact;
