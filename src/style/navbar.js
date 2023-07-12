export const chiashiLabStyle = { 
    bg: 'black',
    color: 'white',
    px: 4, 
    fontSize: {base: 16, md: 12, lg: 16},
    position: "relative",
    boxShadow: "xl",
    overflow: "hidden",
    _before:{
        content: `""`,
        display: "inline-block",
        position: "absolute",
        top: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "gray.800",
        transition: "0.5s",
        right: "100%" //最初は隠しておく
    },
    _hover: {
        _before: { right: "0" } //ホバーしたら出てくる
    },
    _active: {
        bg: 'black',
    }
}

export const navLinkStackStyle = {
    as: 'nav',
    display: { base: 'none', md: 'flex' },
    fontSize: {base: 16, md: 10, lg: 16},
}

export const navLinkStyle = {
    bg: 'black',
    color: 'gray',
    rounded: 'md',
    _hover: {
        color: 'white',
        bg: 'gray.900',
    },
    px: 2,
    py: 0,
    fontWeight: 'normal',
    fontSize: {md: 12, lg: 15},
}

export const menuItemStyle = {
    bg: 'black',
    color: 'gray', 
    _hover:{
        color:'white', 
        bg:'gray.900'
    }
}
