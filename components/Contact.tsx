import NavItemIcon from "../components/NavItemIcon";
import { Text, HStack, VStack, IconButton, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <VStack>
            <Text>Contact -- Florida</Text>
            <HStack as="nav">
                {/* <IconButton aria-label="github" size="lg" fontSize="40px" icon={<FaGithub />} variant="ghost"/> */}
                {/* <IconButton aria-label="linkedin" size="lg" fontSize="40px" icon={<FaLinkedin />} variant="ghost"/> */}
                {/* <IconButton aria-label="email" size="lg" fontSize="40px" icon={<MdEmail />} variant="ghost"/> */}
                <NavItemIcon label="github" icon={<FaGithub />} url="https://github.com/THe142857" />
                <NavItemIcon label="linkedin" icon={<FaLinkedin />} url="https://www.linkedin.com/in/tommyhe6/" />
                <NavItemIcon label="email" icon={<MdEmail />} url="" />
            </HStack>
        </VStack>
    );
};

export default Contact;
