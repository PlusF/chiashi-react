import { Box, Center, HStack, Text, Table, Tbody, TableContainer, Td, Tr } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { HiOutlineNewspaper } from "react-icons/hi";
import { NewsStr } from "../content/news";
import {contentStyle, titleStyle, scrollStyle} from '../style/util'
import { Pages } from "../content/util";
import { MdLink } from "react-icons/md";

export default function News(props) {

    return (
        <>
        <Center sx={titleStyle}>
                <Link to={Pages.links.news}>
                        <HStack>
                            <HiOutlineNewspaper />
                            <Text>{NewsStr[props.language].title}</Text>
                            {props.onHome && <MdLink/>}
                    </HStack>
                </Link>
        </Center>

        <Box sx={scrollStyle(props.onHome)} >
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