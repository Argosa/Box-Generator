import React from 'react';

interface InputBoxProps {
    colors: string[];
    setColors: Function;
}

const InputBox: React.FC<InputBoxProps> = ({colors, setColors}) => {
    const [newColor, setNewColor] = React.useState<string>("")
    const handleClick = () => {
        if(newColor.length){
            setColors([...colors, newColor]);
            setNewColor("");
        }
    }

    return (
        <div>
            <span>Color</span>
            <input 
            value={newColor}
            onChange={e => setNewColor(e.target.value)}
            type="text" 
            style={{
                margin: 10,
            }}></input>
            <button
            onClick={handleClick}>Add</button>
        </div>);
}

export default InputBox;