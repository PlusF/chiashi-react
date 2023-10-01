import React, { useState, useEffect } from 'react';
import { IconButton} from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop(props) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const backToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    };

    const style = {
        position: 'fixed',
        bottom: '5',
        right: {base: 10, md: '20'},
        size: 'lg',
        colorScheme: 'gray',
    }

    return(
        <>
        {scrollPosition > 500 && <IconButton onClick={backToTop} icon={<FaArrowUp/>} isRound='true' sx={style}/>}
        </>
    )
}