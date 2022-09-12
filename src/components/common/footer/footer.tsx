import * as S from './footer.styled';
import { socials } from '../../../const';


const Footer = () => (
  <S.StyledFooter>
    <S.Socials>
      {socials.map(([name, info]) => {
        const DynamicImg = info.img;
        return (
          <S.SocialItem key={name}>
              <S.SocialLink target="_blank" href={info.link}>
                <DynamicImg/>
                <S.HiddenText>{info.rusName}</S.HiddenText>
              </S.SocialLink>
          </S.SocialItem>
        );
      })}
    </S.Socials>
  </S.StyledFooter>
);

export default Footer;
