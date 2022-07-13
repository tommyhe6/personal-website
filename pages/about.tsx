import NavBar from "../components/NavBar";
import { Text, VStack, HStack, Link } from "@chakra-ui/react";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import type { NextPage } from "next";
import NextLink from 'next/link'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const about: NextPage = () => {
    return (
        <VStack>
            <Text>
                I am a U3 B.Sc. Honors Mathematics & Computer Science student with a Cognitive Science Minor at McGill University. I am currently most interested in theoretical computer science, specifically cryptography and machine learning as well as areas of theoretical math, mostly discrete math and subfields of algebra such as algebraic number theory. I aim to take my strong math background to help gain a deeeper understanding and explore novelties in computer science. My resume is available {" "}
                <NextLink href="Tommy_He_Resume.pdf" passHref>
                    <Link color="blue.400" isExternal>
                        here
                    </Link>
                </NextLink>
                {" "} as well as below.
            </Text>
            <Document file="Tommy_He_Resume.pdf" loading="Loading CV">
                <Page pageNumber={1}/>
            </Document>
        </VStack>
    );
};

export default about;
