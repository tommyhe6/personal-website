import { Box, Button } from "@chakra-ui/react";

type Props = {
    onClick: () => void,
    hiddenString: string,
};

const Hidden : (props: Props) => JSX.Element = ({ onClick, hiddenString }) => {
    return (
        <>
            <Button variant="link" _hover={{ textDecoration: "none" }} onClick={onClick}>
                <Box background="gray" color="transparent">
                    {hiddenString}
                </Box>
            </Button>

        </>
    )
}

export default Hidden
