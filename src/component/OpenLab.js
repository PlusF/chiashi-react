import { Center, HStack, Link, Text, Table, Tbody, TableContainer, Td, Tr, VStack , Image} from "@chakra-ui/react";
import { GiDiscussion } from "react-icons/gi";
import { GrSchedules } from "react-icons/gr";
import { OpenLabStr } from '../content/contents';
import {contentStyle, titleStyle} from '../style/style';
import {Document, Page, pdfjs} from 'react-pdf';
// import introPDF from '../assets/intro2023.pdf';
import introIMG from '../assets/intro2023.jpg';


export default function OpenLab(props) {
    // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    return (
        <>
        <Center sx={titleStyle}>
            <HStack>
                <GiDiscussion />
                <Text>{OpenLabStr[props.language].title}</Text>
            </HStack>
        </Center>
        <Center sx={titleStyle}>
            <VStack>
                <HStack>
                    <GrSchedules />
                    <Text>{OpenLabStr[props.language].schedule_title}</Text>
                </HStack>
                <VStack>
                    {OpenLabStr[props.language].schedule.map((data) => {
                        return(
                            <Text>{data}</Text>
                        )
                    })}
                </VStack>
                
            </VStack>
            
        </Center>
        <VStack>
            {/* pdf表示が上手くいかない */}
            {/* <Document file={introPDF}>
                <Page pageNumber={1} />
            </Document> */}
            <Image src={introIMG} alt={OpenLabStr[props.language].poster} objectFit='cover' />
        </VStack>
        </>
    );
}