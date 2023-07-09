import { useState } from 'react';
import { Button, Card, Center, HStack, Image, Stack, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from "@chakra-ui/react";
import { MdSearch, MdKeyboardArrowRight } from "react-icons/md";
import { ResearchStr } from "../content/contents";
import research9 from '../assets/research9.jpeg'
import { titleStyle } from '../style/util'
import { researchStyle, researchTitleStyle, researchButtonStyle } from '../style/research'

export default function Research(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [page, setPage] = useState('optics');

    const handleClick = (nextPage) => {
        if (isOpen) {
            if (page === nextPage) {
                onClose();
            } else {
                setPage(nextPage);
            }
        } else {
            setPage(nextPage);
            onOpen();
        }
    }

    return (
        <>
            <Center sx={titleStyle}>
                <HStack>
                    <MdSearch />
                    <Text>{ResearchStr[props.language].title}</Text>
                </HStack>
            </Center>
            <Center>
                <Stack direction={['column', 'row']} spacing='12px' mx='5'>
                    <Card sx={researchStyle}>
                        <Text sx={researchTitleStyle}>{ResearchStr[props.language].optics.title}</Text>
                        <Image src={research9} />
                        <Button leftIcon={<MdKeyboardArrowRight />} sx={researchButtonStyle} onClick={() => handleClick('optics')}>{ResearchStr[props.language].detail}</Button>
                    </Card>
                    <Card sx={researchStyle}>
                        <Text sx={researchTitleStyle}>{ResearchStr[props.language].vdw.title}</Text>
                        <Image src={research9}/>
                        <Button leftIcon={<MdKeyboardArrowRight />} sx={researchButtonStyle} onClick={() => handleClick('vdw')}>{ResearchStr[props.language].detail}</Button>
                    </Card>
                    <Card sx={researchStyle}>
                        <Text sx={researchTitleStyle}>{ResearchStr[props.language].film.title}</Text>
                        <Image src={research9}/>
                        <Button leftIcon={<MdKeyboardArrowRight />} sx={researchButtonStyle} onClick={() => handleClick('film')}>{ResearchStr[props.language].detail}</Button>
                    </Card>
                </Stack>
            </Center>
            <Center>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            Description
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Center>
        </>
    )
}