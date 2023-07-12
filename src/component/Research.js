import { useState } from 'react';
import { Box, Button, Card, CardHeader, CardBody, CardFooter, Center, HStack, Image, Stack, Text, useDisclosure, Collapse, Heading} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdSearch, MdKeyboardArrowRight } from "react-icons/md";
import { ResearchStr } from "../content/research";
import research9 from '../assets/research9.jpeg'
import { contentStyle, titleStyle } from '../style/util'
import { researchStyle, researchTitleStyle, researchButtonStyle } from '../style/research'
import { Link } from 'react-router-dom';
import { Pages } from '../content/util';


const images = [
    <Image src={research9} />,
    <Image src={research9} />,
    <Image src={research9} />
]


function ResearchDetail(props) {
    const content = ResearchStr[props.language].contents[props.pageIndex];
    return (
        <Box px={[10, 120]} py={[10, 50]}>
            <Heading py={[5, 30]}>{content.title}</Heading>
            <Text sx={contentStyle}>{content.content}</Text>
            {images[content.index]}
        </Box>
    )
}


export default function Research(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [pageIndex, setPageIndex] = useState(0);
    const navigate = useNavigate();

    const handleClick = (nextIndex) => {
        // インデックスページからクリックされた場合，研究ページに飛びCollapseコンテンツを開く
        if (props.onHome) {
            navigate(Pages.links.research);
        }
        // クリックされた研究ページが開いている場合，閉じる
        if (isOpen && nextIndex === pageIndex) {
            onClose();
            return;
        }
        setPageIndex(nextIndex);
        onOpen();
    }

    return (
        <>
            <Center sx={titleStyle}>
                <HStack>
                    <MdSearch />
                    <Link to={Pages.links.research}><Text>{ResearchStr[props.language].title}</Text></Link>
                </HStack>
            </Center>
            <Center>
                <Stack direction={['column', 'row']} spacing='12px' mx='5'>
                    {ResearchStr[props.language].contents.map((content) => 
                        <Card sx={researchStyle} key={content.name}>
                            <CardHeader sx={researchTitleStyle}>{content.title}</CardHeader>
                            <CardBody>{images[content.index]}</CardBody>
                            <CardFooter alignContent='center'>
                                <Button flex='1' leftIcon={<MdKeyboardArrowRight />} sx={researchButtonStyle} onClick={() => handleClick(content.index)}>{ResearchStr[props.language].detail}</Button>
                            </CardFooter>
                        </Card>
                    )}
                </Stack>
            </Center>
            <Center>
                <Collapse in={isOpen}>
                    <ResearchDetail language={props.language} pageIndex={pageIndex} />
                </Collapse>
            </Center>
        </>
    )
}