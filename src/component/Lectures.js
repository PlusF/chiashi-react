import { Center, HStack, Text, Table, Tbody, TableContainer, Td, Tr } from "@chakra-ui/react";
import { FaChalkboardUser } from 'react-icons/fa6'
import { LecturesStr } from "../content/contents";
import {contentStyle, titleStyle} from '../style/util';

export default function Lectures(props) {
    return (
        <>
        <Center sx={titleStyle}>
            <HStack>
                <FaChalkboardUser />
                <Text>{LecturesStr[props.language].title}</Text>
            </HStack>
        </Center>
        <TableContainer>
            <Table variant='simple'>
            <Tbody sx={contentStyle}>
                {
                    LecturesStr[props.language].contents.map((data) => {
                        return (
                            <Tr key={data}>
                                <Td textAlign='center'>{data}</Td>
                            </Tr>
                        );
                    })
                }
                </Tbody>
            </Table>
        </TableContainer>
        </>
    )
}