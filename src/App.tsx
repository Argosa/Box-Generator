import React, { useState } from 'react';
import './App.css';
import Box from './components/Box';
import InputBox from './components/InputBox';

function App() {
  const [colors, setColors] = useState<string[]>(['blue', 'turquoise', 'Aqua']);
  return (
    <div className="App">
      <InputBox colors={colors} setColors={setColors}/>
      {colors.map(color => (
        <Box color={color} height={200} width={200}/>
      ))}
    </div>
  );
}

export default App;
