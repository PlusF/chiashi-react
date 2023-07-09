import { HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <>
        <VStack py='50'>
            <HStack>
                <IconButton icon={<FaTwitter />} colorScheme='gray' variant='outline' as='a' href='https://twitter.com/MaruyamaChiashi?ref_src=twsrc%5Etfw'/>
                {/* <IconButton icon={<FaFacebook />} colorScheme='gray' variant='outline' as='a' href=''/> */}
                <IconButton icon={<FaYoutube />} colorScheme='gray' variant='outline' as='a' href='https://www.youtube.com/channel/UCRUQndClIIrOHE-OCvjrr1Q?view_as=subscriber'/>
            </HStack>
            <Text>© 2023 Chiashi Laboratory</Text>
        </VStack>
        </>
    )
}