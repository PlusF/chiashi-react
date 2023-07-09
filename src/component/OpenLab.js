import { Center, HStack, Text, VStack , Image} from "@chakra-ui/react";
import { GiDiscussion } from "react-icons/gi";
import { GrSchedules } from "react-icons/gr";
import { OpenLabStr } from '../content/contents';
import { titleStyle } from '../style/util';
import introIMG from '../assets/intro2023.jpg';


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