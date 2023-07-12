import { Box, Button, Center, HStack, Text, VStack , Image} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { GiDiscussion } from "react-icons/gi";
import { GrSchedules } from "react-icons/gr";
import { OpenLabStr } from '../content/openlab';
import { titleStyle } from '../style/util';
import { openLabStyle } from "../style/openlab";
import introIMG from '../assets/intro2023.jpg';


export function OpenLabLink(props) {
    return (
        <>
        <Center sx={titleStyle}>
            <HStack>
                <GiDiscussion />
                <Text>{OpenLabStr[props.language].title}</Text>
            </HStack>
        </Center>
        <Center>
            <Box py='30'>
                <Link to={'/chiashi/react/openlab'}>
                    <Button sx={openLabStyle}><Text zIndex={1}>{OpenLabStr[props.language].button}</Text></Button>
                </Link>
            </Box>
        </Center>
        </>
    );
}


export default function OpenLab(props) {
    return (
        <>
        <Center sx={titleStyle}>
            <HStack>
                <GiDiscussion />
                <Text>{OpenLabStr[props.language].title}</Text>
            </HStack>
        </Center>
        <Center sx={titleStyle}>
            <VStack>
                <HStack>
                    <GrSchedules />
                    <Text>{OpenLabStr[props.language].schedule_title}</Text>
                </HStack>
                <VStack>
                    {OpenLabStr[props.language].schedule.map((data) => {
                        return(
                            <Text key={data}>{data}</Text>
                        )
                    })}
                </VStack>
            </VStack>
        </Center>
        <VStack>
            <Image src={introIMG} alt={OpenLabStr[props.language].poster} objectFit='cover' px='50' />
        </VStack>
        </>
    );
}