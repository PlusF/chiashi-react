import { AbsoluteCenter, Box, Center, Divider, HStack, Link, Text, SimpleGrid, Card } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import { FaBookOpen } from "react-icons/fa";
import { PapersStr } from "../content/papers";
import { titleStyle} from '../style/util';
import { Pages } from "../content/util";
import { MdLink } from "react-icons/md";

function MainPapers() {
    return (
        <SimpleGrid spacing={4} px={{base: 10, sm: 10, md: 20, lg: 30}} columns={{base: 1}}>
                {
                    PapersStr.contents.map((data) => {
                        if (!data.main) return null;
                        return (
                            <Card variant='elevated' padding={{base: 5, sm: 5, md: 15, lg: 10}} key={data.doi}>
                                <Text>{data.author}</Text>
                                <Text fontWeight='bold'>"{data.title},"</Text>
                                <Text>{data.journal}. <Link isExternal href={data.doi} color='teal.500'>{data.doi}</Link></Text>
                            </Card>
                        );
                    })
                }
        </SimpleGrid>
    )
}

function AllPapers() {
    let papersSortedByYear = {};
    for (let i = 0; i < PapersStr.contents.length; i++) {
        let year = PapersStr.contents[i].year;
        if (papersSortedByYear[year] === undefined) {
            papersSortedByYear[year] = [];
        }
        papersSortedByYear[year].push(PapersStr.contents[i]);
    }
    const years = Object.keys(papersSortedByYear).reverse();

    return (
        <SimpleGrid spacing={4} px={{base: 10, sm: 10, md: 30, lg: 50}} columns={{base: 1}}>
                {
                    years.map((year) => {
                        return (
                            <Box key={year}>
                                    <Box position='relative' padding='10'>
                                        <Divider />
                                        <AbsoluteCenter bg='white' px='4'>
                                            <Text fontWeight='bold'>{year}</Text>
                                        </AbsoluteCenter>
                                    </Box>
                            {
                                papersSortedByYear[year].map((data) => {
                                    return (
                                        <Card variant='elevated' padding={{base: 5, sm: 5, md: 15, lg: 10}} my={{base: 5}} key={data.doi}>
                                            <Text>{data.author}</Text>
                                            <Text fontWeight='bold'>"{data.title}"</Text>
                                            <Text>{data.journal} <Link isExternal href={data.doi} color='teal.500'>{data.doi}</Link></Text>
                                        </Card>
                                    );
                                })
                            }
                            </Box>
                        );
                    })
                }
        </SimpleGrid>
    )
}

export default function Papers(props) {
    return (
        <>
        <Center sx={titleStyle}>
            <RouterLink to={Pages.links.papers}>
                <HStack>
                    <FaBookOpen />
                    {props.onHome && <Text>{PapersStr[props.language].main}</Text>}
                    {props.onHome && <MdLink/>}
                    {!props.onHome && <Text>{PapersStr[props.language].title}</Text>}
                </HStack>
            </RouterLink>
        </Center>
        {props.onHome && <MainPapers/>}
        {!props.onHome && <AllPapers/>}
        </>
    );
}