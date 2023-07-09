import { Center, HStack, Text } from '@chakra-ui/react'
import { AccessStr } from '../content/contents'
import { MdLocationPin } from 'react-icons/md'
import { titleStyle } from '../style/util'

export default function Access(props) {
    return (
        <>
        <Center sx={titleStyle}>
            <HStack>
                <MdLocationPin />
                <Text>{AccessStr[props.language].title}</Text>
            </HStack>
        </Center>
        </>
    )
}