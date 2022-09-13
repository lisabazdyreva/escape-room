import { IQuest } from './types/types';
import { ReactComponent as IconAllQuests } from './assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from './assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from './assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from './assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from './assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from './assets/img/icon-scifi.svg';
import { StyledSkypeIcon, StyledVkIcon } from './components/common/footer/footer.styled';

export const MAP_URL = "https://yandex.ru/map-widget/v1/?um=constructor%3A84280bb39fa5f6946453c529c7eb0bd3236e31c1ed4bcd598b3764582f77c987&amp;source=constructor";
export const POINT = '.';
export const DOWNLOAD_MESSAGE = 'Идёт загрузка...';
export const TIME_SHOWING_MODAL = 1500;

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
  People: 'text', // text bc safari caused bug
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

export const FilterToQuestType = {
  Adventures: 'Adventures',
  Horrors: 'Horror',
  Mystic: 'Mystic',
  Detective: 'Detective',
  'Sci-fi': 'Sci-fi',
} as const;

export const FilterDictionary = {
  AllQuests: 'Все квесты',
  Adventures: 'Приключения',
  Horrors: 'Ужасы',
  Mystic: 'Мистика',
  Detective: 'Детектив',
  'Sci-fi': 'Sci-fi',
} as const;

export const FilterIcon = {
  AllQuests: IconAllQuests,
  Adventures: IconAdventures,
  Horrors: IconHorrors,
  Mystic: IconMystic,
  Detective: IconDetective,
  'Sci-fi': IconScifi,
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


export const ErrorMessage = {
  QuestList: 'Произошла ошибка при загрузке списка квестов. Попробуйте позже.',
  NonExistPage: 'Такой страницы не существует.',
  DetailedQuest: 'Произошла ошибка при загрузке информации о квесте. Попробуйте позже.',
} as const;


export const MinValue = {
  Name: 2,
  Phone: 10,
  PeopleCount: 1,
}

export const ValidationMessage = {
  Default: '',
  Name: `Имя должно содержать больше ${MinValue.Name} букв.`,
  Phone: `Телефон состоит из ${MinValue.Phone} цифр.`,
  PhoneIsNumbers: `Укажите телефон цифрами.`,
  PeopleCount: `Минимальное число участников: ${MinValue.PeopleCount}.`,
  PeopleCountIsInteger: 'Количество участников - целое число',
} as const;

export const Contact = {
  Phone: '8 (800) 333-55-99',
  Mail: 'info@escape-room.ru',
} as const;


export const SocialDictionary = {
  Skype: 'Скайп',
  Vk: 'Вконтакте',
} as const;

export const SocialLink = {
  Skype: 'https://web.skype.com/',
  Vk: 'https://vk.com',
} as const;

export const SocialIcon = {
  Skype: StyledSkypeIcon,
  Vk: StyledVkIcon,
} as const;

export const AppRoute = {
  Home: '/',
  Contacts: '/contacts',
  DetailedQuest: '/quest/',
  Plug: '#'
} as const;

export const DefaultQuestValue = {
  Tab: 'Quests',
  Empty: '',
  Duration: 0,
  Filter: 'AllQuests'
} as const;

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

export const TypeDictionary = {
  Adventures: 'Приключения',
  Horror: 'Ужасы',
  Mystic: 'Мистика',
  Detective: 'Детектив',
  'Sci-fi': 'Sci-fi',
} as const;

export const LevelDictionary = {
  Easy: 'простой',
  Medium: 'средний',
  Hard: 'сложный',
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

export const BookingInputTitle = {
  Name: ValidationMessage.Name,
  Phone: ValidationMessage.Phone,
  People: ValidationMessage.PeopleCount,
} as const;

export const BookingMessage = {
  Success: 'Форма успешно отправлена',
  Error: 'Произошла ошибка при отправке формы. Попробуйте позже.',
  Loading: 'Подождите, идёт отправка формы...',
} as const;
