import React, { useState } from 'react';

const UnitConverter = () => {
 const [value, setValue] = useState('');
 const [unit, setUnit] = useState('kg');
 const [result, setResult] = useState('');

 const convert = () => {
    if (unit === 'kg') {
      setResult(value * 1000);
    } else {
      setResult(value / 1000);
    }
 };

 return (
    <div>
      <input type="number" value={value} onChange={e => setValue(e.target.value)} />
      <select value={unit} onChange={e => setUnit(e.target.value)}>
        <option value="kg">Kg</option>
        <option value="grams">Grams</option>
      </select>
      <button onClick={convert}>Converter</button>
      <p>{result}</p>
    </div>
 );
 
};

export default UnitConverter;