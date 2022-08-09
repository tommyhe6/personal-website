import NextImage from "next/image";
import { Heading, Box, VStack, Text, Icon, HStack, Image, Tag, chakra } from "@chakra-ui/react";

type Props = {
    title: string,
    context: string,
    desc: string,
    time: string,
    img?: string,
    techStack?: string[],
    techLang?: string[],
    demos?: JSX.Element[],
};

const Project: (props: Props) => JSX.Element = ({ title, context, desc, time, img="", techStack=[], techLang=[], demos=[] }) => {
    const MyImage = chakra(Image, {
        shouldForwardProps: (prop: string) => ["width", "height", "src", "alt"].includes(prop)
    });

    return (
        <VStack w="30vw" h="75vh" p={5} spacing="2vh" align="center">
            <VStack spacing="0.5vh">
                <Heading as="h3" color="redbrown" size="md" textAlign="center">
                    {title}
                </Heading>
                <Text as="h6" fontSize="xs" textAlign="center">
                    {context}
                </Text>
            </VStack>
            <MyImage src={img} alt={title} size="sm" />
            <Text as="p" fontSize="sm">
                {desc}
            </Text>
            <HStack>
                {techStack.map(
                    (tech, index) => <Tag key={index}>{tech}</Tag>
                )}
            </HStack>
            <HStack>
                {techLang.map(
                    (tech, index) => <Tag key={index}>{tech}</Tag>
                )}
            </HStack>
            <HStack>
                {demos.map(
                    (navItemIcon) => (navItemIcon)
                )}
            </HStack>

        </VStack>
    );
};

export default Project;
