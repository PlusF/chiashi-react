import { Box, Center, HStack, Text, Table, Tbody, TableContainer, Td, Tr } from "@chakra-ui/react";
import { HiOutlineNewspaper } from "react-icons/hi";
import { NewsStr } from "../content/news";
import {contentStyle, titleStyle, scrollStyle} from '../style/util'

export default function News(props) {

    return (
        <>
        <Center sx={titleStyle}>
            <HStack>
                <HiOutlineNewspaper />
                <Text>{NewsStr[props.language].title}</Text>
            </HStack>
        </Center>

        <Box sx={scrollStyle(props.scroll)} >
            <TableContainer>
                <Table variant='simple'>
                <Tbody sx={contentStyle}>
                    {
                        NewsStr[props.language].content.map((data) => {
                            return (
                                <Tr key={data.date}>
                                    <Td textAlign='right'>{data.date}</Td>
                                    <Td textAlign='left'>{data.news}</Td>
                                </Tr>
                            );
                        })
                    }
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
        </>
    );
}