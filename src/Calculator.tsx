import React, { useState } from "react";
import Button from "./components/Button";

const Calculator = () => {
    const [input, setInput] = useState<string>('');
    const [n1, setn1] = useState<number | null>(null);
    const [operator, setOpertor] = useState<string>('');
    const [n2, setn2] = useState<number | null>(null);

    const handleCalculate = (value: string) => {
        if(value === 'C'){
            setInput('');
            setn1(null);
            setn2(null);
            setOpertor('');
        }else if(value === '='){
            let result: number = 0;
            if(n1 !== null && n2 !== null && operator){
                switch (operator) {
                    case '+':
                      result = n1 + n2;
                      break;
                    case '-':
                      result = n1 - n2;
                      break;
                    case '*':
                      result = n1 * n2;
                      break;
                    case '/':
                      result = n2 !== 0 ? n1 / n2 : 0;
                      break;
                    default:
                      break;
                  }
                  setOpertor('');
                  setn2(null);
                  setn1(result);
                  setInput(result.toString());
            }
        }else if(['+', '-', '*', '/'].includes(value)){
            setOpertor(value)
            setInput('');
        }else{
            if(operator){
                if(n2 !== null){
                    setn2(Number(n2.toString() + value));
                }else{
                    setn2(Number(value))
                }
                setInput(input+value)
            }else{
                if(n1 !== null){
                    setn1(Number(n1.toString() + value));
                }else{
                    setn1(Number(value))
                }
                setInput(input+value)
            }
        }
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