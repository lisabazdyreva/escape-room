import { IQuest } from './types/types';
import { ReactComponent as IconAllQuests } from './assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from './assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from './assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from './assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from './assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from './assets/img/icon-scifi.svg';
import { StyledSkypeIcon, StyledVkIcon } from './components/common/footer/footer.styled';


export const BaseUrl = {
  Get: 'http://localhost:3001/quests',
  Post: 'http://localhost:3001/orders',
} as const;


export const BookingInputName = {
  Name: 'name',
  Phone: 'phone',
  People: 'people',
} as const;

export const BookingInputType = {
  Name: 'text',
  Phone: 'tel',
  People: 'number',
} as const;

export const BookingInputDictionary = {
  Name: 'Ваше имя',
  Phone: 'Контактный телефон',
  People: 'Количество участников',
} as const;

export const BookingInputPlaceholder = {
  Name: 'Имя',
  Phone: 'Телефон',
  People: 'Количество участников',
} as const;

export const FiltersToType = {
  adventures: 'adventures',
  horrors: 'horror',
  mystic: 'mystic',
  detective: 'detective',
  scifi: 'sci-fi',
} as const;

export const FilterValues = {
  allQuests: {
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


export const initialQuest: IQuest = {
  id: 0,
  title: '',
  description: '',
  previewImg: '',
  coverImg: '',
  type: '',
  level: '',
  peopleCount: [0, 0],
  duration: 0,
};
export const filters = Object.entries(FilterValues);


export const TextMessage = {
  Error: 'Произошла ошибка, попробуйте позже.',
} as const;


export const MinValues = {
  Name: 2,
  Phone: 10,
  PeopleCount: 1,
}

export const ValidationMessages = {
  Default: '',
  Name: `Имя должно содержать больше ${MinValues.Name} букв.`,
  Phone: `Телефон состоит из ${MinValues.Phone} символов.`,
  PeopleCount: `Минимальное количество участников: ${MinValues.PeopleCount}.`,
} as const;

export const Contacts = {
  Phone: '8 (800) 333-55-99',
  Mail: 'info@escape-room.ru',
} as const;

export const MAP_URL = "https://yandex.ru/map-widget/v1/?um=constructor%3A84280bb39fa5f6946453c529c7eb0bd3236e31c1ed4bcd598b3764582f77c987&amp;source=constructor";


export const Socials = {
  Skype: {
    rusName: 'Скайп',
    link: 'https://web.skype.com/',
    img: StyledSkypeIcon,
  },
  Vk: {
    rusName: 'Вконтакте',
    link: 'https://vk.com',
    img: StyledVkIcon,
  }
} as const;

export const socials = Object.entries(Socials);

export const AppRoute = {
  Home: '/',
  Contacts: '/contacts',
  DetailedQuest: '/quest/',
  Plug: '#'
} as const;


export const DEFAULT_TAB = 'Quests';

export const MenuDictionary = {
  Quests: 'Квесты',
  Junior: 'Новичкам',
  Reviews: 'Отзывы',
  Sales: 'Акции',
  Contacts: 'Контакты',
} as const;

export const MenuLink = {
  Quests: AppRoute.Home,
  Junior: AppRoute.Plug,
  Reviews: AppRoute.Plug,
  Sales: AppRoute.Plug,
  Contacts: AppRoute.Contacts,
} as const;



export const DEFAULT_FILTER = 'allQuests';




export const defaultString = '';

export const defaultDuration = 0;

export const TypeDictionary = {
  adventures: 'Приключения',
  horror: 'Ужасы',
  mystic: 'Мистика',
  detective: 'Детектив',
  'sci-fi': 'Sci-fi',
} as const;

export const LevelDictionary = {
  easy: 'простой', // TODO small letters
  medium: 'средний',
  hard: 'сложный',
} as const;

export const Duration = {
  Short: 60,
  Medium: 90,
  Long: 120,
} as const;

export enum FetchStatus {
  Trying = 'trying',
  Success = 'success',
  Error = 'error',
  Default = 'default',
}
