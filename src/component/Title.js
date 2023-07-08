import { Box, Stack } from '@chakra-ui/react';
import title from '../assets/title.jpg'
import { TitleStr } from '../content/contents';


export default function Navbar(props) {
    const mainStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        textShadow: '0 0 20px black',
        fontFamily: "serif",
        minHeight: ['200px', '400px'],
        background: `url(${title}) center/cover no-repeat`,
    };
    const bigStyle = {
        fontSize: ['2xl', '5xl'],
    };
    const smallStyle = {
        color: 'lightgray',
        fontSize: ['sm', 'md'],
    };

    return (
        <>
            <Box sx={mainStyle}>
                <Stack>
                    <Box sx={bigStyle}>{TitleStr[props.language][0]}</Box>
                    <Box sx={smallStyle}>{TitleStr[props.language][1]}</Box>
                </Stack>
            </Box>
        </>
    );
}