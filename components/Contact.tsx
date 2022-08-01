import NavItemIcon from "../components/NavItemIcon";
import { Text, HStack, VStack, IconButton, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <VStack>
            <Text>Montr&#233;al, Qu&#233;bec</Text>
            <HStack as="nav">
                <NavItemIcon label="github" icon={<FaGithub />} url="https://github.com/THe142857" />
                <NavItemIcon label="linkedin" icon={<FaLinkedin />} url="https://www.linkedin.com/in/tommyhe6/" />
                <NavItemIcon label="email" icon={<MdEmail />} url="mailto:tommy@tommyhe.com" />
            </HStack>
        </VStack>
    );
};

export default Contact;
