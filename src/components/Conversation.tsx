import styled from 'styled-components';
import Elon from '../../public/profile/elon.jpeg';
import Okey from '../../public/profile/okey.png'
import Jeff from '../../public/profile/jeff.jpeg'
import { AiOutlineSearch } from 'react-icons/ai'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 3;
    background: #f6f7f8;
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #ededed;
  padding: 10px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;


const ContactInfo = styled.div`
display: flex;
flex-direction: colmumn;
`

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  `;

const ProfileName = styled.span`
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
  `;

const RightSide = styled.div`
  display: flex
  `;

const OkeyIcon = styled.img`
  width: 20px;
  height: 20px;
  bakcground: transparent;
  border-radius: 50%; 
  margin: 0 30px 0px 30px;
  `;

const ProfilePhoto = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  
`






function Conversation() {
  return (
    <Container>
      <ProfileHeader>
        <LeftSide>
          <ContactInfo>

            <ProfileImage src={Elon} />
            <ProfileName>
              William in Black
            </ProfileName>
          </ContactInfo>

        </LeftSide>

        <RightSide>
          <ProfilePhoto src={Jeff} />
          Jeff 
          <OkeyIcon src={Okey} />
          <AiOutlineSearch style={{ width: '20px', height: '20px', marginRight: '30px' }} />
        </RightSide>
      </ProfileHeader>
      
    </Container>
  )
}

export default Conversation