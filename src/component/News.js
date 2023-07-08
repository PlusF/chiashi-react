import { Center, HStack, Text, Table, Tbody, TableContainer, Td, Tr } from "@chakra-ui/react";
import { HiOutlineNewspaper } from "react-icons/hi";
import { NewsStr } from "../content/contents";
import {contentStyle, titleStyle} from '../style/style'

export default function News(props) {
    return (
        <>
        <Center sx={titleStyle}>
            <HStack>
                <HiOutlineNewspaper />
                <Text>{NewsStr[props.language].title}</Text>
            </HStack>
        </Center>
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
        </>
    );
}