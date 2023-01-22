import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Messages from './Messages';


const Container = styled.div`
  diplay: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
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
  display: flex;
  background: #f6f6f6;
  padding: 10px;
`;


const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  border-radius: 16px;
  width: 100%;
  padding 5px 10px;
`;

const SearchLogo = styled.span`
  witdh: 28px;
  height: 28px;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outlien: none;
  font-size: 14px;
`;




const ContactList = () => {
  return (
    <Container>

      <LogoInfoDiv>
        <Logo>Chats</Logo>
        <a href="#"> <BsThreeDotsVertical /> </a>
      </LogoInfoDiv>

      <SearchBox>
        <SearchContainer>
          <SearchLogo>
            <AiOutlineSearch style={{padding: '5px'}} />
          </SearchLogo>
          <SearchInput placeholder='Search' />

          
        </SearchContainer>
      </SearchBox>

     <Messages />
     <Messages />
     <Messages />
     <Messages />
      
     

      </Container>
  )
}

export default ContactList