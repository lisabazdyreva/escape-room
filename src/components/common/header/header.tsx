import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute, Contacts } from '../../../const';

import { menuItems} from '../../../const';

import { getInitialCurrentTab } from '../../../utils/utils';

const Header = () => {
  const {pathname} = useLocation();

  const initialCurrentTab = getInitialCurrentTab(pathname);

  const [currentTab, setCurrentTab] = useState(initialCurrentTab);

  const linkClickedHandler = (value: string, link: string) => {
    if (link !== AppRoute.Plug) {
      setCurrentTab(value);
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
              menuItems.map(([menuItemName, menuInfo], index) => {
                const name = menuInfo.rus;
                const link = menuInfo.link;
                const isDisabled = link === AppRoute.Plug;

                return (
                  <S.LinkItem key={menuItemName} > {/*TODO key*/}
                    <S.Link
                      onClick={() => linkClickedHandler(menuItemName, link)}
                      $isDisabled={isDisabled}
                      to={link}
                      $isActiveLink={ currentTab === menuItemName }
                    >
                      {name}
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
