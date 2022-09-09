import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import { useState } from 'react';

enum MenuDictionary {
  Quests = 'Квесты',
  Junior = 'Новичкам',
  Reviews = 'Отзывы',
  Sales = 'Акции',
  Contacts = 'Контакты',
}

enum MenuLinks {
  Quests = '/',
  Junior = '#',
  Reviews = '#',
  Sales = '#',
  Contacts = '/contacts',
}

const menuItems = Object.keys(MenuDictionary);

const menuDictionary = Object.entries(MenuDictionary);
const menuLinks = Object.entries(MenuLinks);


const Header = () => {
  const [currentTab, setCurrentTab] = useState(menuItems[0]);


  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            {
              menuItems.map((menuItem, index) => {
                const name = menuDictionary[index][1];
                const link = menuLinks[index][1];

                return (
                  <S.LinkItem key={menuItem} onClick={() => setCurrentTab(menuItem)}> {/*TODO key*/}
                    <S.Link $isActiveLink={currentTab === menuItem} to={link}>
                      {name}
                    </S.Link>
                  </S.LinkItem>
                );
              })
            }
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
}

export default Header;
