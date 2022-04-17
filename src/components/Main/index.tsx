import * as S from './style';
import { Button } from 'web3-components';

type Props = {
  title?: string;
  description?: string;
  illustrationSrc?: string;
};

const Main = ({ title, description, illustrationSrc }: Props) => (
  <S.Container>
    <S.Hero>
      <S.Title>Welcome to Hemp DAO </S.Title>
      <S.Description>Here you can earn a little <span style={{ color:'#1E7C51' }}>GREEN</span> NFT being a Hemp DAO membership.</S.Description>
      <S.WrapperButtons>
        {/*@ts-ignore */}
      <Button.Transparent width='40%' style={{ borderRadius: '6px' }} glow={'#1E7C51'} border="none" color='#1E7C51'>Connect my wallet</Button.Transparent>
        {/*@ts-ignore */}
      <Button.Default width='40%' style={{ borderRadius: '6px' }} color='transparent' textColor='#1E7C51' border='#1E7C51'>Get Metamask</Button.Default>
      </S.WrapperButtons>
    
    </S.Hero>
    <S.Hemp src='/assets/hemp.png' />
  </S.Container>
);

export default Main;
