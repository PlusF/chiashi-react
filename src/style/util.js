export const titleStyle = {
    textAlign: 'center',
    fontSize: ['xl', '2xl', '3xl'],
    fontFamily: 'serif',
    pt: 20,
    pb: 10,
};

export const subTitleStyle = {
    fontSize: {
        'base': 20, 
        'sm': 15,
        'lg': 20,
    },
}

export const contentStyle = {
    fontSize: {
        'base': 16, 
        'sm': 12,
        'lg': 16,
    },
    px: {
        'base': 2, 
        'lg': 8,
    },
}

export const scrollStyle = (scroll) => {
    return scroll ? {overflowY:"auto", maxHeight: "200px"} : {}
};
