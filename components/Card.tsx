import { Box } from "@chakra-ui/react";

type Props = {
    num: number,
};

const card = [
"🂡", "🂢", "🂣", "🂤", "🂥", "🂦", "🂧", "🂨", "🂩", "🂪", "🂫", "🂭", "🂮",
"🃑", "🃒", "🃓", "🃔", "🃕", "🃖", "🃗", "🃘", "🃙", "🃚", "🃛", "🃝", "🃞",
"🂱", "🂲", "🂳", "🂴", "🂵", "🂶", "🂷", "🂸", "🂹", "🂺", "🂻", "🂽", "🂾",
"🃁", "🃂", "🃃", "🃄", "🃅", "🃆", "🃇", "🃈", "🃉", "🃊", "🃋", "🃍", "🃎",
]

const Card: (props: Props) => JSX.Element = ({ num }) => {
    return (
        <>
            <Box fontSize={["8xl", "9xl"]} color={num < 26 ? "black" : "red"}>
                {card[num]}
            </Box>
        </>
    )
}

export default Card;
