import { MainLayout, PageTitle, PageSubtext } from '../common/common';
import contactsMap from '../../assets/img/contacts-map.jpg';
import * as S from './contacts.styled';

const Contacts = () => (
  <MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <S.PageHeading>
          <PageTitle>Контакты</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </S.PageHeading>

        <S.Contacts>
          <S.ContactsList>
            <S.ContactTitle>Адрес</S.ContactTitle>
            <S.ContactValue>
              <S.ContactAddress>
                Санкт-Петербург,
                <br />
                Набережная реки Карповка, д 5
              </S.ContactAddress>
            </S.ContactValue>

            <S.ContactTitle>Режим работы</S.ContactTitle>
            <S.ContactValue>Ежедневно, с 9:00 до 20:00</S.ContactValue>

            <S.ContactTitle>Телефон</S.ContactTitle>
            <S.ContactValue>
              <S.ContactLink href="tel:8 (800) 333-55-99">
                8 (800) 333-55-99
              </S.ContactLink>
            </S.ContactValue>

            <S.ContactTitle>E-mail</S.ContactTitle>
            <S.ContactValue>
              <S.ContactLink href="mailto:info@escape-room.ru">
                info@escape-room.ru
              </S.ContactLink>
            </S.ContactValue>
          </S.ContactsList>

          <S.ContactsMap>
            <iframe
              title="мы находимся по адресу Санкт-Петербург, Набережная реки Карповка, д 5"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A84280bb39fa5f6946453c529c7eb0bd3236e31c1ed4bcd598b3764582f77c987&amp;source=constructor"
              width="649"
              height="336"/>
          </S.ContactsMap>
        </S.Contacts>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
);

export default Contacts;
