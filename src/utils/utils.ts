import { IQuest } from '../types/types';

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
