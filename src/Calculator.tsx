import { useState } from "react";
import Button from "./components/Button";
import '../src/styles/calculator.css';
import { Flex, Typography } from "antd";

const { Title } = Typography;

const Calculator = () => {
    const [input, setInput] = useState<string>('');
    const [isDecimal, setIsDecimal] = useState<boolean>(false);

    const handleResult = () => {
        try {
            const result = eval(input);
            setInput(result.toString());
        } catch (error) {
            setInput('');
        }    
    }

    const handleCalculate = (value: string) => {
        if(value === 'C'){
            setInput('');
            setIsDecimal(false);
        }else if(value === '='){
            handleResult();
            setIsDecimal(input.includes('.'));
        }else if(['+', '-', '*', '/'].includes(value)){
            if(input && !['+', '-', '*', '/'].includes(input[input.length-1])){
                setInput(input + value);
            }
        }else{
            if(value === '.' && !isDecimal){
                setInput(input + value);
                setIsDecimal(true);
            }else if (value !== '.') {
                if(input[input.length-1] === '0'){
                    setInput(value);
                }else{
                    setInput(input+value)
                }
            }
    }};

    const handleDelete = () => {
        if (input[input.length - 1] === '.') {
            setIsDecimal(false); 
        };

        setInput(input.slice(0,-1));
    }

    return(
        <Flex vertical gap={10} align="center" justify="center" className="calculator_container">
      <Flex className="input" vertical>
        <Title level={2} style={{color: 'white'}}>{input}</Title>
      </Flex>
      <div className="buttons">
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

        <Button label="0" onClick={() => handleCalculate('0')} />
        <Button label="C" onClick={() => handleCalculate('C')} />

        <Button label="=" onClick={() => handleCalculate('=')} />
        <Button label="/" onClick={() => handleCalculate('/')} />
      </div>
      <Flex className="bottom">
      <Button label="." onClick={() => handleCalculate('.')} />
      <Button label="←" onClick={() => handleDelete()} />
      </Flex>
    </Flex>
    )
}

export default Calculator;