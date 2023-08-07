import NavItemIcon from "components/NavItemIcon";

import { Text, HStack, VStack } from "@chakra-ui/react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Contact: () => JSX.Element = () => {
    return (
        <VStack>
            <Text>New York City</Text>
            <HStack as="nav">
                <NavItemIcon label="github" icon={<SiGithub />} url="https://github.com/THe142857" />
                <NavItemIcon label="linkedin" icon={<SiLinkedin />} url="https://www.linkedin.com/in/tommyhe6/" />
                <NavItemIcon label="email" icon={<MdEmail />} url="mailto:tommy@tommyhe.com" />
            </HStack>
        </VStack>
    );
};

export default Contact;
