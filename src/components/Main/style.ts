import styled from 'styled-components';

export const Container = styled.main`
  background-color: whitesmoke;
  color: #002E35;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 3%;
  justify-content: flex-end;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/assets/background.png');
`;

export const Logo = styled.img`
  width: 25rem;
`;

export const Title = styled.h1`
  font-size: 9rem;
  width: 80%;
  line-height: 110px;
`;

export const Description = styled.p`
  font-size: 2rem;
  padding: 2% 0;
  color:#8A939A;
  width: 60%;
  margin: 16px 0;
  font-weight: 500;
`;

export const Illustration = styled.img`
  width: min(35rem, 100%);
  background-color: white;
  padding: 0.5%;
  border-radius: 15px;
`;

export const Hero = styled.div`
  padding: 16px;
  display: flex;
  width: 48%;
  flex-direction: column;
  align-items: flex-start;
`;

export const Hemp = styled.img`
  transform:  rotate(90deg);
  filter: drop-shadow(20px -10px 20px #242424);
  -webkit-filter: drop-shadow(40px -25px 30px #242424);

`;

export const WrapperButtons = styled.div`
  width: 70%;
  justify-content: space-around;
  display: flex;
  button:nth-child(2) {
    font-weight:  800;
  }
`;