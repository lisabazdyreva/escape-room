import { IPostData, IQuest, LevelsDictionary, TypesDictionary } from '../types/types';
import { fetchQuests } from '../store/actions/api-actions';
import { store } from '../index';
import { DEFAULT_FILTER, DEFAULT_TAB, FiltersToType, menuItems } from '../const';

const types = Object.entries(TypesDictionary);
const levels = Object.entries(LevelsDictionary);

export const getType = (type: string) => {
  console.log(type);
  const typePrep = types.find(([engTypes ]) => engTypes === type);
  return typePrep ? typePrep[1] : '';
}

export const getLevel = (level: string) => {
  const levelPrep = levels.find(([engLevel]) => engLevel === level);
  return levelPrep ? levelPrep[1] : '';
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


export const getInitialCurrentTab = (pathname: string) => {
  const initialTab = menuItems.find(([ , {link}]) => pathname === link);
  return initialTab ? initialTab[0] : DEFAULT_TAB;
}


export const filterTypes = Object.entries(FiltersToType);


export const getTypeName = (value: string) => {
  const findTypeName = filterTypes.find(([key]) => key === value);
  return  findTypeName ? findTypeName[1] : DEFAULT_FILTER;
};


export const getQuestsByFilter = (quests: IQuest[], currentFilter: string) => {
  return quests.filter((quest: IQuest) => quest.type === currentFilter)
}
