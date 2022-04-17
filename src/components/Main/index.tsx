import * as S from './style';
import { Button } from 'web3-components';
import { useAddress, useMetamask } from '@thirdweb-dev/react';

type Props = {
  title?: string;
  description?: string;
  illustrationSrc?: string;
};

const Main = ({ title, description, illustrationSrc }: Props) => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  return (
    <S.Container>
      { !address ? (
        <>
        <S.Hero>
          <S.Title>Welcome to Hemp DAO </S.Title>
          <S.Description>Here you can earn a little <span style={{ color:'#1E7C51' }}>GREEN</span> NFT being a Hemp DAO membership.</S.Description>
          <S.WrapperButtons>
            {/*@ts-ignore */}
          <Button.Transparent onClick={ connectWithMetamask } width='40%' style={{ borderRadius: '6px' }} glow={'#1E7C51'} border="none" color='#1E7C51'>Connect my wallet</Button.Transparent>
            {/*@ts-ignore */}
          <Button.Default onClick={() => window.redirect('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn')} width='40%' style={{ borderRadius: '6px' }} color='transparent' textColor='#1E7C51' border='#1E7C51'>Get Metamask</Button.Default>
          </S.WrapperButtons>
        
        </S.Hero>
        <S.Hemp src='/assets/hemp.png' />
      </>
      ) 
      : <S.Hero>
          <S.Title>Conected</S.Title>
        </S.Hero>}
    </S.Container>
  );
}

export default Main;
