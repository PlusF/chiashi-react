import { Center, HStack, Link, Text, Table, Tbody, TableContainer, Td, Tr, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import { FaBookOpen } from "react-icons/fa";
import { MainPapersStr } from "../content/papers";
import { contentStyle, titleStyle, scrollStyle } from '../style/util';
import { Pages } from "../content/util";

export default function Papers(props) {
    return (
        <>
        <Center sx={titleStyle}>
            <HStack>
                <FaBookOpen />
                <RouterLink to={Pages.links.papers}><Text>{MainPapersStr[props.language].title}</Text></RouterLink>
            </HStack>
        </Center>
        {/* <Text>{MainPapersStr[props.language].main}</Text> */}
        <TableContainer sx={scrollStyle(props.onHome)}>
            <Table variant='simple'>
            <Tbody sx={contentStyle}>
                {
                    MainPapersStr.contents.map((data) => {
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
        </TableContainer>

        {/* <Text>{MainPapersStr[props.language].recent}</Text>
        <TableContainer>
            <Table variant='simple'>
            <Tbody sx={contentStyle}>
                {
                    MainPapersStr.contents.map((data) => {
                        return (
                            <Tr key={data.title}>
                                <Td>
                                    <VStack>
                                        <Text>{data.author}</Text>
                                        <Text>"{data.title},"</Text>
                                        <Text>{data.journal}. <Link isExternal href={data.doi}>{data.doi}</Link></Text>
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