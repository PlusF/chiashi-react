import { Card, Center, HStack, Image, Text } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import { ResearchesStr } from "../constants/contents";
import research9 from '../assets/research9.jpeg'
import {titleStyle, contentStyle} from '../constants/style'

export default function Researchs(props) {
    return (
        <>
            <Center sx={titleStyle}>
                <HStack>
                    <MdSearch />
                    <Text>{ResearchesStr[props.language].title}</Text>
                </HStack>
            </Center>
            <HStack>
                <Card sx={contentStyle} direction={{ base: 'column' }} boxSize='3xl'>
                    <Image src={research9} objectFit='cover'/>
                    <Text px='3'>{ResearchesStr[props.language].optics.title}</Text>
                </Card>
                <Card sx={contentStyle} direction={{ base: 'column' }} boxSize='3xl'>
                    <Image src={research9} objectFit='cover'/>
                    <Text px='3'>{ResearchesStr[props.language].vdw.title}</Text>
                </Card>
                <Card sx={contentStyle} direction={{ base: 'column' }} boxSize='3xl'>
                    <Image src={research9} objectFit='cover'/>
                    <Text px='3'>{ResearchesStr[props.language].film.title}</Text>
                </Card>
            </HStack>
        </>
    )
}