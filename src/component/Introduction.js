import { Card, Center, HStack, Image, Text } from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa";
import { IntroductionStr } from "../content/contents";
import { titleStyle, contentStyle } from "../style/style";
import research1 from '../assets/research1.jpeg'

export default function Introduction(props) {
    return (
        <>
        <Center sx={titleStyle}>
            <HStack>
                <FaGraduationCap />
                <Text>{IntroductionStr[props.language].title}</Text>
            </HStack>
        </Center>
        <Card sx={contentStyle} mx='3' py='3' direction={{ base: 'column', sm: 'row' }}>
            <Image src={research1} objectFit='cover' maxH={{ base: '150px', sm: '100px' , md: '150px', lg: '200px'}}/>
            <Text px='3'>{IntroductionStr[props.language].content}</Text>
        </Card>
        </>
    );
}