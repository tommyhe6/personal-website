import { Heading, Box, VStack, Text, Icon, HStack, Image } from "@chakra-ui/react";

type Props = {
    title: string,
    context: string,
    desc: string,
    time: string,
    img?: string,
    techIcons?: JSX.Element[],
    demos?: JSX.Element[],
};

const Project: (props: Props) => JSX.Element = ({ title, context, desc, time, img="", techIcons=[], demos=[] }) => {
    return (
        <VStack w="30vw" h="70vh" p={5} spacing="2vh" align="center">
            <VStack spacing="0.5vh">
                <Heading as="h3" color="redbrown" size="md" textAlign="center">
                    {title}
                </Heading>
                <Text as="h6" fontSize="xs" textAlign="center">
                    {context}
                </Text>
            </VStack>
            <Image alt={title} src={img} boxSize="sm"/>
            <Text as="p" fontSize="sm">
                {desc}
            </Text>
            <HStack>
                {techIcons.map(
                    (icon) => (icon)
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
