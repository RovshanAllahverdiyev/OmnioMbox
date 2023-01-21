import styled from 'styled-components'

const Container = styled.div`
  diplay: flex;
  flex-direction: column;
  height: 100%;
  flex: 1.6;
`;

const LogoInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 500;
  
`;



const SearchBox = styled.div`
  background: #f6f6f6;
  padding: 10px;
`;


const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #fffl
  border-radius: 16px;
  width: 100%;
  padding 5px 10px;
`


function ContactList() {
  return (
    <Container>ContactList</Container>
  )
}

export default ContactList