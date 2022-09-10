import { BookingFields } from './types/types';
import { ReactComponent as IconAllQuests } from './assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from './assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from './assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from './assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from './assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from './assets/img/icon-scifi.svg';

export const URI_GET = 'http://localhost:3001/quests';
export const URI_POST = 'http://localhost:3001/orders';

export const bookingFields = {
  NAME: {
    title: BookingFields.NAME,
    type: 'text',
    translationLabel: 'Ваше Имя',
    translationPlaceholder: 'Имя',
  },
  PHONE: {
    title: BookingFields.PHONE,
    type: 'tel',
    translationLabel: 'Контактный телефон',
    translationPlaceholder: 'Телефон',
  },
  PEOPLE: {
    title: BookingFields.PEOPLE,
    type: 'number',
    translationLabel: 'Количество участников',
    translationPlaceholder: 'Количество участников',
  },
};

export const FiltersToType = {
  adventures: 'adventures',
  horrors: 'horror',
  mystic: 'mystic',
  detective: 'detective',
  scifi: 'sci-fi',
} as const;

export const FilterValues = {
  'allQuests': {
    name: 'Все квесты',
    img: IconAllQuests,
  },
  adventures: {
    name: 'Приключения',
    img: IconAdventures,
  },
  horrors: {
    name: 'Ужасы',
    img: IconHorrors,
  },
  mystic: {
    name: 'Мистика',
    img: IconMystic,
  },
  detective: {
    name: 'Детектив',
    img: IconDetective,
  },
  scifi: {
    name: 'Sci-fi',
    img: IconScifi,
  },
} as const;
