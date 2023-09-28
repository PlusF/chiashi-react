import { Center, HStack, Link, Text, SimpleGrid, Card } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import { FaBookOpen } from "react-icons/fa";
import { MainPapersStr } from "../content/papers";
import { titleStyle} from '../style/util';
import { Pages } from "../content/util";
import { MdLink } from "react-icons/md";

export default function Papers(props) {
    return (
        <>
        <Center sx={titleStyle}>
            <RouterLink to={Pages.links.papers}>
                <HStack>
                    <FaBookOpen />
                    <Text>{MainPapersStr[props.language].title}</Text>
                    {props.onHome && <MdLink/>}
                </HStack>
            </RouterLink>
        </Center>
        <SimpleGrid spacing={4} px={{base: 10, sm: 10, md: 20, lg: 30}} columns={{base: 1, md: 2, lg: 3}}>
                {
                    MainPapersStr.contents.map((data) => {
                        return (
                            <Card variant='elevated' padding={{base: 5, sm: 5, md: 15, lg: 10}}>
                                <Text>{data.author}</Text>
                                <Text fontWeight='bold'>"{data.title},"</Text>
                                <Text>{data.journal}. <Link isExternal href={data.doi} color='teal.500'>{data.doi}</Link></Text>
                            </Card>
                        );
                    })
                }
        </SimpleGrid>
        </>
    );
}