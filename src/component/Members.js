import { Avatar, Card, Center, Grid, HStack, Image, Link, Table, Tbody, TableContainer, Td, Tr , Text, VStack } from "@chakra-ui/react";
import { MdPeople } from "react-icons/md";
import { MembersStr } from "../content/contents";
import chiashi from '../assets/members/chiashi.jpg';
import kaneda from '../assets/members/kaneda.jpg';
import shimada from '../assets/members/shimada.jpg';
import nishida from '../assets/members/nishida.jpg';
import nishimura from '../assets/members/nishimura.jpg';
import sakakibara from '../assets/members/sakakibara2.jpg';
import endo from '../assets/members/endo.jpg';
import miyata from '../assets/members/miyata.jpg';
import { titleStyle } from '../style/style';
import { memberStyle, professorStyle, linkStyle } from '../style/members';

export default function Members(props) {
    const images = [
        kaneda, shimada, nishida, nishimura, sakakibara, endo, miyata,
    ]
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
        <>
            <Center sx={titleStyle}>
                <HStack>
                    <MdPeople/>
                    <Text>{MembersStr[props.language].title}</Text>
                </HStack>
            </Center>
            <Grid>
                <Center>
                    <HStack>
                        <Card direction={{ base: 'column', sm: 'row' }}>
                            <Center>
                                <Image src={chiashi} objectFit='hidden' boxSize={['150px', '200px', '250px']}/>
                            </Center>
                            <VStack>
                                <Text sx={professorStyle}>{MembersStr[props.language].professor.name}</Text>
                                <HStack>
                                    {MembersStr[props.language].professor.links.map((data) => {
                                        return (
                                            <Link isExternal sx={linkStyle} key={data.name} href={data.link}>{data.name}</Link>
                                        )
                                    })}
                                </HStack>
                            </VStack>
                        </Card>
                    </HStack>
                </Center>
            </Grid>
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
        </>
    )
}