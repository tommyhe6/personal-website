import NavBar from "../components/NavBar";
import { Text, VStack, HStack } from "@chakra-ui/react";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import type { NextPage } from "next";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const about: NextPage = () => {
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <HStack>
            <Text>
                I am a U3 B.Sc. Honors Mathematics & Computer Science student with a Cognitive Science Minor at McGill University. I am currently most interested in theoretical computer science, specifically cryptography and algorithms as well as areas of theoretical math, mostly discrete math and subfields of algebra including algebraic geometry/arithmetic geometry. I aim to take my strong math background to help me aid in studying computer science.
                My CV:
            </Text>
            <Document file="Tommy_He_Resume.pdf">
                <Page pageNumber={pageNumber}/>
            </Document>
        </HStack>
    );
};

export default about;
