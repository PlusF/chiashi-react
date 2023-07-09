import { AspectRatio, Box, Center, HStack, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { AccessStr } from '../content/access';
import { MdLocationPin, MdMeetingRoom, MdOutlineMap, MdOutlinePhoneInTalk, MdLink } from 'react-icons/md';
import { contentStyle, subTitleStyle, titleStyle } from '../style/util';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { accessBoxStyle } from '../style/access';

export default function Access(props) {
    return (
        <>
        <Center sx={titleStyle}>
            <HStack>
                <MdLocationPin />
                <Text>{AccessStr[props.language].title}</Text>
            </HStack>
        </Center>
        <Box sx={accessBoxStyle}>
            <HStack sx={subTitleStyle}><MdOutlineMap/><Text>Address</Text></HStack>
            <Text>{AccessStr[props.language].contents.address}</Text>
            <Text>{AccessStr[props.language].contents.department}</Text>
            <UnorderedList>
                {AccessStr[props.language].contents.stations.map((station) => {
                    return (
                        <ListItem sx={contentStyle} key={station.name}>{station.line} {station.name} {station.time}</ListItem>
                    )
                })}
            </UnorderedList>
        </Box>
        <Center>
            <AspectRatio ratio={16 / 9} width={[250, 400, 600, 800]}>
                <iframe title='google map' src={AccessStr[props.language].contents.googleMap}/>
            </AspectRatio>
        </Center>
        
        <Box sx={accessBoxStyle}>
            <HStack sx={subTitleStyle}><MdMeetingRoom/><Text>Rooms</Text></HStack>
            <UnorderedList>
                {AccessStr[props.language].contents.rooms.map((room) => {
                    return (
                        <ListItem sx={contentStyle} key={room.name}>{room.name} {room.location}</ListItem>
                    )
                })}
            </UnorderedList>
        </Box>
        
        <Box sx={accessBoxStyle}>
            <HStack sx={subTitleStyle}><MdOutlinePhoneInTalk/><Text>Phone Extensions</Text></HStack>
            <UnorderedList>
                {AccessStr[props.language].contents.phoneExtensions.map((phoneExtension) => {
                    return (
                        <ListItem sx={contentStyle} key={phoneExtension.name}>{phoneExtension.name} {phoneExtension.number}</ListItem>
                    )
                })}
            </UnorderedList>
        </Box>
        
        <Box sx={accessBoxStyle}>
            <HStack sx={subTitleStyle}><MdLink/><Text>Links</Text></HStack>
            <UnorderedList>
                {AccessStr[props.language].contents.links.map((link) => {
                    return (
                        <ListItem sx={contentStyle} key={link.name}><Link isExternal href={link.link} color='teal'>{link.name}<ExternalLinkIcon/></Link></ListItem>
                    )
                })}
            </UnorderedList>
        </Box>
        </>
    )
}