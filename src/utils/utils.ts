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
  FilterToQuestType,
  MenuDictionary,
  MenuLink,
  LevelDictionary,
  TypeDictionary, FilterDictionary,
  FilterIcon, DefaultQuestValue,
  SocialDictionary,
  SocialIcon,
  SocialLink, BookingInputTitle,
} from '../const';

const inputNames = Object.keys(BookingInputName);

const inputTitles = Object.values(BookingInputName);
const inputTypes = Object.values(BookingInputType);
const inputPlaceholders = Object.values(BookingInputPlaceholder);
const inputLabels = Object.values(BookingInputDictionary);
const inputTooltips = Object.values(BookingInputTitle);

const getBookingInputs = () => inputNames.map((inputName, index) => {
  const name = inputName as keyof typeof BookingInputName;
  return ({
    name,
    title: inputTitles[index],
    type: inputTypes[index],
    translationPlaceholder: inputPlaceholders[index],
    translationLabel: inputLabels[index],
    tooltipText: inputTooltips[index],
  })
});

export const bookingInputs = getBookingInputs();


const socialNames = Object.keys(SocialDictionary);

const socialTranslations = Object.values(SocialDictionary);
const socialIcons = Object.values(SocialIcon);
const socialLinks = Object.values(SocialLink);

const getSocialValues = () => socialNames.map((socialName, index) => {
  const name = socialName as keyof typeof SocialDictionary;
  const rusName = socialTranslations[index];
  const icon = socialIcons[index];
  const link = socialLinks[index];

  return ({
    name,
    rusName,
    icon,
    link
  });
});

export const socials = getSocialValues();


const menuNames = Object.keys(MenuLink);
const menuTranslations = Object.values(MenuDictionary);
const menuLinks = Object.values(MenuLink);

const getMenuItems = () => menuNames.map((menuName , index) => {
  const name = menuName as keyof typeof MenuLink;
  const link = menuLinks[index];
  const rusName = menuTranslations[index];

  return({
    name,
    link,
    rusName,
  })
});

export const menuItems = getMenuItems();


const filterNames = Object.keys(FilterDictionary);
const filterTranslations = Object.values(FilterDictionary);
const filterIcons = Object.values(FilterIcon);


const getFilterValues = () => filterNames.map((filterName, index) => {
  const name = (filterName[0] + filterName.slice(1)) as keyof typeof FilterDictionary;
  const rusName = filterTranslations[index];
  const icon = filterIcons[index];
  return ({
    name,
    rusName,
    icon
  });
})

export const filters = getFilterValues();

const filtersToQuestTypes = Object.entries(FilterToQuestType);

export const getQuestTypeName = (filter: keyof typeof FilterDictionary) => {
  const findTypeName = filtersToQuestTypes.find(([filterType]) => filterType  === filter);
  if (!findTypeName) {
    return DefaultQuestValue.Filter;
  }
  return findTypeName[1] as keyof typeof FilterDictionary;
};


const questTypes = Object.entries(TypeDictionary);
export const getQuestTypeText = (type: QuestType): QuestType => {
  const filterType = type.slice(0, 1).toUpperCase() + type.slice(1);

  const typeRusEng = questTypes.find(([engType ]) => engType === filterType);
  if (!typeRusEng) {
    return DefaultQuestValue.Empty;
  }
  return typeRusEng[1] as QuestType;
}


const levels = Object.entries(LevelDictionary);
export const getQuestLevelText = (level: LevelType): LevelType => {
  const levelCorrectName = level.slice(0, 1).toUpperCase() + level.slice(1);

  const levelRusEng = levels.find(([engLevel]) => engLevel === levelCorrectName);
  if (!levelRusEng) {
    return DefaultQuestValue.Empty;
  }

  return levelRusEng[1] as LevelType;
}


export const getPeopleCountText = ([from, to]: number[]) => `${from}–${to} чел`;

export const getAltText = (title: string) => `Квест ${title}`;

export const getInitialCurrentTab = <T>(pathname: T) => {
  const initialTab = menuItems.find(({link}) => pathname === link);
  if (!initialTab) {
    return DefaultQuestValue.Tab;
  }
  return initialTab.name;
}

export const getQuestsByFilter = (quests: IQuest[], currentFilter: keyof typeof FilterDictionary) => {
  return quests.filter((quest: IQuest) => {
    const type = (quest.type[0].toUpperCase() + quest.type.slice(1)) as keyof typeof FilterDictionary;
    return type === currentFilter;
  });
}

export const getSettingsObject = (data: IPostData) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

export const downloadQuests = () => store.dispatch(fetchQuests());
