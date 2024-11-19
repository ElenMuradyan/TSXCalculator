import { Flex } from 'antd';
import Calculator from './Calculator';
import './styles/global.css';

function App() {
  return (
    <Flex align='center' justify='center' className="App">
      <Calculator/>
    </Flex>
  );
}

export default App;
