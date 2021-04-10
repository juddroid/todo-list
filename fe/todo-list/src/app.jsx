import './app.css';
import Header from './components/view/header';
import Body from './components/view/body';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <AppContainer>
        <Header />
        <Body />
      </AppContainer>
    </div>
  );
}

export default App;

const AppContainer = styled.div`
  border: 1px solid red;
  margin: 40px;
  padding: 20px;
  width: 1300px;
`;
