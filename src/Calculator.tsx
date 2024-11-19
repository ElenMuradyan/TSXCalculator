import React, { useState } from "react";
import Button from "./components/Button";

const Calculator = () => {
    const [input, setInput] = useState<string>('');
    const [n1, setn1] = useState<number | null>(null);
    const [operator, setOpertor] = useState<string>('');
    const [n2, setn2] = useState<number | null>(null);

    const handleCalculate = (value: string) => {

    }

    return(
        <div className="calculator">
      <div className="calculator-display">{input}</div>
      <div className="calculator-buttons">
        <Button label="1" onClick={() => handleCalculate('1')} />
        <Button label="2" onClick={() => handleCalculate('2')} />
        <Button label="3" onClick={() => handleCalculate('3')} />
        <Button label="+" onClick={() => handleCalculate('+')} />

        <Button label="4" onClick={() => handleCalculate('4')} />
        <Button label="5" onClick={() => handleCalculate('5')} />
        <Button label="6" onClick={() => handleCalculate('6')} />
        <Button label="-" onClick={() => handleCalculate('-')} />

        <Button label="7" onClick={() => handleCalculate('7')} />
        <Button label="8" onClick={() => handleCalculate('8')} />
        <Button label="9" onClick={() => handleCalculate('9')} />
        <Button label="*" onClick={() => handleCalculate('*')} />

        <Button label="C" onClick={() => handleCalculate('C')} />
        <Button label="0" onClick={() => handleCalculate('0')} />
        <Button label="=" onClick={() => handleCalculate('=')} />
        <Button label="/" onClick={() => handleCalculate('/')} />
        <Button label="C" onClick={() => handleCalculate('C')} />
      </div>
    </div>
    )
}

export default Calculator;