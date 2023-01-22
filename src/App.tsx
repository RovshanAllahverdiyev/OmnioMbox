import styled from 'styled-components'
import ContactList from './components/ContactList'
import Conversation from './components/Conversation'
import './index.css';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
`;



function App() {


  return (
   <Container>
    <ContactList />
    
    
    <Conversation />
    </Container>
  )
}

export default App
