import { Avatar, Card, Center, HStack, Image, Link, Table, Tbody, TableContainer, Td, Tr , Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { MdPeople, MdLink } from "react-icons/md";
import { MembersStr } from "../content/members";
import chiashi from '../assets/members/chiashi.jpg';
import jia from '../assets/members/jia.jpg';
import liu from '../assets/members/liu.jpg';
import kaneda from '../assets/members/kaneda.jpg';
import shimada from '../assets/members/shimada.jpg';
import nishida from '../assets/members/nishida.jpg';
import nishimura from '../assets/members/nishimura.jpg';
import sakakibara from '../assets/members/sakakibara2.jpg';
import endo from '../assets/members/endo.jpg';
import miyata from '../assets/members/miyata.jpg';
import ogata from '../assets/members/ogata.jpg';
import kahara from '../assets/members/kahara.jpg';
import fujiwara from '../assets/members/fujiwara.jpg';
import { contentStyle, titleStyle } from '../style/util';
import { memberStyle, professorStyle, linkStyle } from '../style/members';
import { Pages } from "../content/util";


function Professor(props) {
    return (
        <Center>
            <HStack>
                <Card direction={{ base: 'column', sm: 'row' }} variant='unstyled'>
                    <Center>
                        <Image src={chiashi} objectFit='cover' width={['150px', '200px', '250px']}/>
                    </Center>
                    <VStack>
                        <Text sx={professorStyle}>{MembersStr[props.language].professor.name}</Text>
                        <Text sx={contentStyle} textAlign='center'>{MembersStr[props.language].professor.detail}</Text>
                        <Text sx={contentStyle} textAlign='center'>{MembersStr[props.language].professor.email}</Text>
                        <HStack>
                            {MembersStr[props.language].professor.links.map((data) => {
                                return (<Link isExternal sx={linkStyle} key={data.name} href={data.link}>{data.name} <ExternalLinkIcon/></Link>)
                            })}
                        </HStack>
                    </VStack>
                </Card>
            </HStack>
        </Center>
    )
}


const images = [
    jia, liu, kaneda, shimada, nishida, nishimura, sakakibara, endo, miyata, ogata, kahara, fujiwara
]

function MemberTable(props) {
    const members = []
    for (let i = 0; i < images.length; i++) {
        members.push({
            image: images[i],
            name: MembersStr[props.language].members[i].name,
            grade: MembersStr[props.language].members[i].grade,
            email: MembersStr[props.language].members[i].email,
        })
    }

    return (
        <Center my='30'>
            <TableContainer>
                <Table variant='simple' size='lg'>
                <Tbody sx={memberStyle}>
                    {
                        members.map((member) => {
                            return (
                                <Tr key={member.name}>
                                    <Td>{member.grade}</Td>
                                    <Td><Avatar name={member.name} src={member.image} /></Td>
                                    <Td>{member.name}</Td>
                                    <Td>{member.email}</Td>
                                </Tr>
                            );
                        })
                    }
                    </Tbody>
                </Table>
            </TableContainer>
        </Center>
    )
}


function MemberIcons() {
    return (
        <Center py={30}>
            <HStack spacing={{base: 2, md: 5, lg: 10}}>
                {images.map((image, i) => {
                    return <Card key={i} variant='unstyled'><Avatar src={image} size={{base: 'md', sm: 'lg'}} /></Card>
                })}
            </HStack>
        </Center>
    )
}


export default function Members(props) {

    return (
        <>
            <Center sx={titleStyle}>
                <RouterLink to={Pages.links.members}>
                    <HStack>
                        <MdPeople/>
                        <Text>{MembersStr[props.language].title}</Text>
                        {props.onHome && <MdLink/>}
                    </HStack>
                </RouterLink>
            </Center>
            <Professor language={props.language}/>
            {props.onHome && <MemberIcons/>}
            {!props.onHome && <MemberTable language={props.language}/>}
        </>
    )
}