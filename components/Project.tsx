import { Heading, Box, VStack, Text } from "@chakra-ui/react";

type Props = {
    title: string;
    context: string;
    desc: string;
    time: string;
    // img: string;
};

const Project = ({ title, context, desc, time }: Props) => {
    return (
        <VStack w="20vw" h="30vh" p={5} spacing="2vh" align="center">
            <VStack spacing="0.5vh">
                <Heading as="h3" color="redbrown" size="md" textAlign="center">
                    {title}
                </Heading>
                <Text as="h6" fontSize="xs" textAlign="center">
                    {context}
                </Text>
            </VStack>
            <Text as="p" fontSize="sm">
                {desc}
            </Text>
        </VStack>
    );
};

export default Project;
