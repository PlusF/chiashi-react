import { useState } from 'react';
import { Button, Card, CardHeader, CardBody, CardFooter, Center, HStack, Image, Stack, Text, useDisclosure, Collapse, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdSearch, MdKeyboardArrowRight } from "react-icons/md";
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
        <>
            <Heading py={[5, 30]}>{content.title}</Heading>
            <Text sx={contentStyle}>{content.content}</Text>
            {images[content.index]}
        </>
    )
}


function ResearchCard(props) {
    const content = props.content
    const images = [
        opticsImg,
        vdwImg,
        filmImg,
    ]
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
                            {/* <Flex mx='150'><Spacer/><Button onClick={onClose} p='6'>{ResearchStr[props.language].detailClose}</Button></Flex> */}
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


export default function Research(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [pageIndex, setPageIndex] = useState(0);
    const navigate = useNavigate();

    const handleClick = (nextIndex) => {
        // インデックスページからクリックされた場合，研究ページに飛びCollapseコンテンツを開く
        // if (props.onHome) {
        //     navigate(Pages.links.research);
        // }
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
                <Stack direction={['column', 'row']} spacing={{base: 5, md: 5}} mx={{base: 5, sm: 20, md: 100}}>
                    {ResearchStr[props.language].contents.map((content) => 
                        <ResearchCard language={props.language} key={content.name} content={content} isOpen={isOpen} pageIndex={pageIndex} handleClick={handleClick} />
                    )}
                </Stack>
            </Center>
        </>
    )
}