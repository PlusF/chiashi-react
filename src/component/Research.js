import { useState } from 'react';
import { Box, Button, Card, CardHeader, CardBody, CardFooter, Center, HStack, Image, Stack, Text, useDisclosure, Collapse, Heading, VStack } from "@chakra-ui/react";
import { MdSearch, MdKeyboardArrowRight, MdLink } from "react-icons/md";
import { ResearchStr } from "../content/research";
import opticsImg from '../assets/optics.png';
import vdwImg from '../assets/vdw.png';
import filmImg from '../assets/film.png';
import { contentStyle, titleStyle } from '../style/util'
import { researchStyle, researchTitleStyle, researchButtonStyle } from '../style/research'
import { Link } from 'react-router-dom';
import { Pages } from '../content/util';


function ResearchDetail(props) {
    const content = ResearchStr[props.language].contents[props.pageIndex];
    
    // TODO: ちゃんとした画像を用意する
    const images = [
        <Image src={opticsImg} />,
        <Image src={vdwImg} />,
        <Image src={filmImg} />
    ]
    return (
        <Box mx={{base: 0, sm: 100}}>
            <Heading py={[5, 30]}>{content.title}</Heading>
            <Text sx={contentStyle}>{content.content}</Text>
            <Center>{images[content.index]}</Center>
        </Box>
    )
}


const images = [
    opticsImg,
    vdwImg,
    filmImg,
]


// スマホ用表示
function ResearchCardOnColumn(props) {
    const content = props.content
    return (
    <Card sx={researchStyle} variant={props.isOpen && props.pageIndex === content.index ? 'filled': 'outline'}>
        <CardHeader sx={researchTitleStyle}>{content.title}</CardHeader>
        <Collapse in={!props.isOpen || props.pageIndex === content.index }>
            <CardBody>
                <VStack>
                    <Center><Image src={images[content.index]}></Image></Center>
                    <Center>
                        <Collapse in={props.isOpen}>
                            <ResearchDetail language={props.language} pageIndex={props.pageIndex}/>
                        </Collapse>
                    </Center>
                </VStack>
            </CardBody>
        </Collapse>
        <CardFooter alignContent='center'>
            <Button flex='1' leftIcon={<MdKeyboardArrowRight />} sx={researchButtonStyle} bg={(props.isOpen && props.pageIndex === content.index ) ? 'gray.400': 'gray.200'} onClick={() => props.handleClick(content.index)}>
                {(props.isOpen && props.pageIndex === content.index ) ? ResearchStr[props.language].detailClose : ResearchStr[props.language].detailOpen}
            </Button>
        </CardFooter>
    </Card>
    )
}


// PC用表示
function ResearchCardOnRow(props) {
    const content = props.content
    return (
        <Card sx={researchStyle} variant={props.isOpen && props.pageIndex === content.index ? 'filled': 'outline'}>
            <CardHeader sx={researchTitleStyle}>{content.title}</CardHeader>
            <CardBody>
                <VStack>
                    <Center><Image src={images[content.index]}></Image></Center>
                </VStack>
            </CardBody>
            <CardFooter alignContent='center'>
                <Button flex='1' leftIcon={<MdKeyboardArrowRight />} sx={researchButtonStyle} bg={(props.isOpen && props.pageIndex === content.index ) ? 'gray.400': 'gray.200'} onClick={() => props.handleClick(content.index)}>
                    {(props.isOpen && props.pageIndex === content.index ) ? ResearchStr[props.language].detailClose : ResearchStr[props.language].detailOpen}
                </Button>
            </CardFooter>
        </Card>
    )
}

export default function Research(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [pageIndex, setPageIndex] = useState(0);

    const handleClick = (nextIndex) => {
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
                <Link to={Pages.links.research}>
                    <HStack>
                        <MdSearch />
                        <Text>{ResearchStr[props.language].title}</Text>
                        {props.onHome && <MdLink/>}
                    </HStack>
                </Link>
            </Center>
             {/** スマホ用表示 */}
            <Center display={{base: 'block', sm: 'none'}}>
                <Stack direction='column' spacing='5' mx='5'>
                    {ResearchStr[props.language].contents.map((content) => 
                        <ResearchCardOnColumn language={props.language} key={content.name} content={content} isOpen={isOpen} pageIndex={pageIndex} handleClick={handleClick} />
                    )}
                </Stack>
            </Center>
            {/** PC用表示 */}
            <Center display={{base: 'none', sm: 'block'}}>
                <Stack direction='row' spacing='5' mx='30'>
                    {ResearchStr[props.language].contents.map((content) =>
                        <ResearchCardOnRow language={props.language} key={content.name} content={content} isOpen={isOpen} pageIndex={pageIndex} handleClick={handleClick} />
                    )}
                </Stack>
                <Collapse in={isOpen}>
                    <ResearchDetail language={props.language} pageIndex={pageIndex}/>
                    <Center><Button onClick={onClose} mt='10'>{ResearchStr[props.language].detailClose}</Button></Center>
                </Collapse>
            </Center>
        </>
    )
}