import { Center, HStack, Link, Text, Table, Tbody, TableContainer, Td, Tr, VStack } from "@chakra-ui/react";
import { FaUniversity } from "react-icons/fa";
import { OpenLabStr } from "../content/contents";
import {contentStyle, titleStyle} from '../style/style';
import {Document, Page} from "react-pdf";

export default function OpenLab(props) {
    return (
        <>
        <Center sx={titleStyle}>
            <HStack>
                <FaUniversity />
                <Text>{OpenLabStr[props.language].title}</Text>
            </HStack>
        </Center>
        <VStack>
            <Document file="../assets/intro2023.pdf">
            <Page pageNumber={1} />
            </Document>
        </VStack>
        {/* <Text>{OpenLabStr[props.language].main}</Text> */}
        {/* <TableContainer>
            <Table variant='simple'>
            <Tbody sx={contentStyle}>
                {
                    OpenLabStr.contents.map((data) => {
                        return (
                            <Tr key={data.title}>
                                <Td>
                                    <VStack>
                                        <Text>{data.author}</Text>
                                        <Text>"{data.title},"</Text>
                                        <Text>{data.journal}. <Link isExternal href={data.doi} color='teal.500'>{data.doi}</Link></Text>
                                    </VStack>
                                </Td>
                            </Tr>
                        );
                    })
                }
                </Tbody>
            </Table>
        </TableContainer> */}

        </>
    );
}