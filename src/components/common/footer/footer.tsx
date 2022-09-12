import * as S from './footer.styled';
import { socials } from '../../../utils/utils';


const Footer = () => (
  <S.StyledFooter>
    <S.Socials>
      {socials.map(({name,rusName,  link, icon}) => {
        const DynamicIcon = icon;
        return (
          <S.SocialItem key={name}>
              <S.SocialLink target="_blank" href={link}>
                <DynamicIcon />
                <S.HiddenText>{rusName}</S.HiddenText>
              </S.SocialLink>
            </S.SocialItem>
          );
        })}
      </S.Socials>
    </S.StyledFooter>
);

export default Footer;
