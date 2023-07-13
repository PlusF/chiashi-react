// Chiashi Lab. のロゴにホバーしたときのアニメーション設定等
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
        width: "0%",
        height: "100%",
        backgroundColor: "gray.800",
        transition: "0.3s",
    },
    _hover: {
        _before: { 
            width: "100%",
         }
    },
    _active: {
        bg: 'black',
    }
}

// ナビゲーションバーのスタイル
export const navLinkStackStyle = {
    as: 'nav',
    display: { base: 'none', md: 'flex' },
    fontSize: {base: 16, md: 10, lg: 16},
}

// ナビゲーションバーのリンクのスタイル
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

// ハンバーガーメニューのスタイル
export const menuItemStyle = {
    bg: 'black',
    color: 'gray', 
    _hover:{
        color:'white', 
        bg:'gray.900'
    }
}

// 言語切り替えボタンのスタイル
export const languageStyle = {
    fontSize: {base: 16, md: 10, lg: 16},
    w: {base: 130, md: 90, lg: 140},
}
