import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute, Contacts } from '../../../const';

import { menuItems } from '../../../utils/utils';
import { getInitialCurrentTab } from '../../../utils/utils';

const Header = () => {
  const {pathname} = useLocation();
  const path = pathname as keyof typeof AppRoute;
  const initialCurrentTab = getInitialCurrentTab<typeof path>(path);

  const [currentTab, setCurrentTab] = useState(initialCurrentTab);

  const linkClickedHandler = <T, B>(link: T, value: B) => {
    if (link !== AppRoute.Plug) {
      setCurrentTab(value as typeof currentTab);
    }
  }

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.LogoLink to={AppRoute.Home}>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.LogoLink>

        <S.Navigation>
          <S.Links>
            {
              menuItems.map(({link, rusName, keyName}, index) => {
                const isDisabled = link === AppRoute.Plug;
                const isActive = currentTab === keyName;

                return (
                  <S.LinkItem key={`${keyName}-${index}`} >
                    <S.Link
                      onClick={() => linkClickedHandler<typeof link, typeof keyName>(link, keyName)}
                      $isDisabled={isDisabled}
                      to={link}
                      $isActiveLink={ isActive }
                    >
                      {rusName}
                    </S.Link>
                  </S.LinkItem>
                );
              })
            }
          </S.Links>
        </S.Navigation>
        <S.Phone href={`tel:${Contacts.Phone}`}>{Contacts.Phone}</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
}

export default Header;
