import { IMock } from './types';

export  const getValue = <T>(t: string, arrE: string[], arrR: string[]): T | string =>  {
  if (t === 'type') {
    const index = arrE.findIndex((i: string) => i === "horror");
    return arrR[index];
  } else {
    const index = arrE.findIndex((i: string) => i === "hard");
    return arrR[index];
  }

}


export const getFilteredQuests = (type: string, quests: IMock[]) => {
  return quests.filter((quest: IMock) => quest.type === type);
}
