export const openLabStyle = { 
    bg: 'purple.400',
    color: 'white',
    w: {base: 300, lg: 500},
    h: {base: 50, lg: 70},
    px: 4, 
    fontSize: {base: 16, md: 18, lg: 20},
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
        backgroundColor: "purple.800",
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