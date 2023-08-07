import Card from "components/Card";
import Hidden from "components/Hidden";
import MyLink from "components/MyLink";

import { useState, useEffect } from "react";
import { VStack, Text, HStack, IconButton, UnorderedList, ListItem, Box, Spacer } from "@chakra-ui/react";
import { MdRefresh } from "react-icons/md"
import Head from "next/head";
import type { NextPage } from "next";

const Home: NextPage = () => {
    const [cards, setCards] = useState<number[]>([]);
    const [sol, setSol] = useState<string>("solving...");
    const [solReveal, setSolReveal] = useState<boolean>(false);
    const [solExists, setSolExists] = useState<string>("solving...");
    const [solExistsReveal, setSolExistsReveal] = useState<boolean>(false);
    const N = 4, G = 24;

    const solve: (cur: [number, string][], fin: boolean) => [string, boolean] = (cur, fin) => {
        if (cur.length == 1 && cur[0][0] == G) {
            return [cur[0][1], true];
        } else {
            for (const i in cur) {
                for (const j in cur) {
                    if (i != j && !fin) {
                        for (const op of ["+", "-", "/", "*"]) {
                            let val = 0;
                            const str = `(${cur[i][1]} ${op} ${cur[j][1]})`;
                            switch (op) {
                                case "+":
                                    val = cur[i][0] + cur[j][0];
                                    break;
                                case "-":
                                    val = cur[i][0] - cur[j][0];
                                    break;
                                case "/":
                                    val = cur[i][0] / cur[j][0];
                                    break;
                                case "*":
                                    val = cur[i][0] * cur[j][0];
                                    break;
                            }
                            let newCur: [number, string][] = [[val, str]];
                            for (let k in cur) {
                                if (k != i && k != j) {
                                    newCur.push(cur[k]);
                                }
                            }

                            const s = solve(newCur, fin);
                            if (s[1]) {
                                return s
                            }
                        }
                    }
                }
            }
        }
        return ["no solution", false]
    }

    const draw: () => number[] = () => {
        const cards: number[] = [];
        while (cards.length < N) {
            const r = Math.floor(Math.random() * 52);
            if (cards.indexOf(r) === -1) {
                cards.push(r);
            }
        }
        return cards
    }

    const refresh: () => void = () => {
        const cards = draw()
        setCards(cards);
        setSol("solving...");
        setSolReveal(false);
        setSolExists("solving...");
        setSolExistsReveal(false);
        const [sol, solExists] = solve(cards.map(c => [c % 13 + 1, (c % 13 + 1).toString()]), false);
        setSolExists(solExists ? "yes" : "no");
        setSol(sol);
    };

    useEffect(refresh, []);

    return (
        <>
            <Head>
                <title>
                    Tommy He
                </title>
                <meta name="description" content="Hey, I'm Tommy! I am a U3 B.Sc. Honors Mathematics & Computer Science student at McGill University. I'm most interested in new technologies with potential for high impact." />
            </Head>
            <VStack alignItems="start">
                <Box lineHeight="1.7em">
                    <Text>
                        Hey, I&#39;m Tommy! Here&#39;s some facts about me
                    </Text>
                    <UnorderedList marginLeft="10">
                        <ListItem>Previous technical co-founder of <MyLink label="Lumy" url="https://lumy.co" /></ListItem>
                        <ListItem>Currently a C++ dev at <MyLink label="Tower Research Capital" url="https://www.tower-research.com" /></ListItem>
                        <ListItem>Interested in ML, systems programming, and cryptography</ListItem>
                        <ListItem>Studied Math & CS at McGill</ListItem>
                        <ListItem>Currently training for a marathon</ListItem>
                        <ListItem>Believe variety is the spice of life; try something new!</ListItem>
                        <ListItem>Enjoy games with chance</ListItem>
                    </UnorderedList>
                </Box>
                <Spacer />
                <Text>
                    And stay tuned for more writings! In case you&#39;re bored, try to make {G} from the following card numbers each exactly once using addition, subtraction, multiplication, or division with any parentheses.
                </Text>

                <HStack alignSelf="center" lineHeight="7em">
                    {cards.map((num: number, index: number) => <Card key={index} num={num} />)}
                </HStack>
                <IconButton aria-label="refresh" size="lg" fontSize="3xl" variant="ghost" icon={<MdRefresh />} onClick={() => { refresh() }} alignSelf="center" />
                <Box>
                    Does a solution exist? {solExistsReveal ? solExists : <Hidden onClick={() => setSolExistsReveal(true)} hiddenString="solving..." />}
                </Box>
                <Box>
                    Solution (many are possible!): {solReveal ? sol : <Hidden onClick={() => setSolReveal(true)} hiddenString="((10 + 10) + (10 + 10))" />}
                </Box>
                <Spacer />
            </VStack>
        </>
    );
};

export default Home;
