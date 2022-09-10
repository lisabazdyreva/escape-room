import { IQuest, LevelsDictionary, TypesDictionary } from '../types/types';

export  const getValue = <T>(t: string, arrE: string[], arrR: string[]): T | string =>  {
  if (t === 'type') {
    const index = arrE.findIndex((i: string) => i === "horror");
    return arrR[index];
  } else {
    const index = arrE.findIndex((i: string) => i === "hard");
    return arrR[index];
  }

}


export const getFilteredQuests = (type: string, quests: IQuest[]) => {
  return quests.filter((quest: IQuest) => quest.type === type);
}



const types = Object.entries(TypesDictionary);
const levels = Object.entries(LevelsDictionary);

export const getType = (type: string) => {
  const typePrep = types.find(([engTypes ]) => engTypes === type);
  return typePrep ? typePrep[1] : '';
}

export const getLevel = (level: string) => {
  const levelPrep = levels.find(([engLevel]) => engLevel === level);
  return levelPrep ? levelPrep[1] : '';
}
