import {
  IPostData,
  IQuest,
  LevelType,
  QuestType,
} from '../types/types';
import { fetchQuests } from '../store/actions/api-actions';
import { store } from '../index';
import {
  BookingInputDictionary,
  BookingInputName,
  BookingInputPlaceholder,
  BookingInputType,
  DEFAULT_FILTER,
  DEFAULT_TAB,
  FiltersToType,
  MenuDictionary,
  MenuLink,
  defaultString,
  LevelDictionary,
  TypeDictionary
} from '../const';

const keysFields = Object.keys(BookingInputName);

const titles = Object.values(BookingInputName);
const typesValues = Object.values(BookingInputType);
const placeholders = Object.values(BookingInputPlaceholder);
const labels = Object.values(BookingInputDictionary);


const types = Object.entries(TypeDictionary);
const levels = Object.entries(LevelDictionary);

export const filterTypes = Object.entries(FiltersToType);


export const getQuestTypeText = (type: QuestType): QuestType => {
  const typeRusEng = types.find(([engType ]) => engType === type);
  if (!typeRusEng) {
    return defaultString;
  }

  return typeRusEng[1] as QuestType;
}

export const getQuestLevelText = (level: LevelType): LevelType => {
  const levelRusEng = levels.find(([engLevel]) => engLevel === level);
  if (!levelRusEng) {
     return defaultString;
  }

  return levelRusEng[1] as LevelType;
}

export const getSettingsObject = (data: IPostData) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});


export const downloadQuests = () => store.dispatch(fetchQuests());

export const getPeopleCountText = ([from, to]: number[]) => `${from}–${to} чел`;

export const getAltText = (title: string) => `Квест ${title}`;

const menuKeys = Object.keys(MenuLink);
export const menuItemNames = Object.values(MenuDictionary);
const menuItemsLinks = Object.values(MenuLink);

const getMenuItems = () =>  menuKeys.map((menuKey , index) => {
  const keyName = menuKey as keyof typeof MenuLink;
  const link = menuItemsLinks[index];
  const rusName = menuItemNames[index];

  return({
    keyName,
    link,
    rusName,
  })
});

export const menuItems = getMenuItems();

export const getInitialCurrentTab = <T>(pathname: T) => {
  const initialTab = menuItems.find((menuItem) => pathname === menuItem.link);

  if (!initialTab) {
    return DEFAULT_TAB;
  }
  const name = initialTab.keyName;

  return name;
}

export const getTypeName = (value: string) => {
  const findTypeName = filterTypes.find(([key]) => key === value);
  return  findTypeName ? findTypeName[1] : DEFAULT_FILTER;
};

export const getQuestsByFilter = (quests: IQuest[], currentFilter: typeof TypeDictionary | string) => {
  return quests.filter((quest: IQuest) => quest.type === currentFilter)
}

export const getBookingFields = () => keysFields.map((key, i) => ({
    name: key,
    title: titles[i],
    type: typesValues[i],
    translationPlaceholder: placeholders[i],
    translationLabel: labels[i],
}));
