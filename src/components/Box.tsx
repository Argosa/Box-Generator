import React from 'react';

interface BoxProps {
    color: string;
    height: number;
    width: number;
}

const Box: React.FC<BoxProps> = ({color, height, width}) => {
    const test: BoxProps = {
        color: color,
        height: height,
        width: width
    }

    console.log(test)

    return (<div style={{display: "inline-block", backgroundColor: color, height:height, width:width}}></div>);
}

export default Box;