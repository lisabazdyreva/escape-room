import * as S from '../quests-catalog/quests-catalog.styled';

import { ReactComponent as IconAllQuests } from '../../../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../../../assets/img/icon-scifi.svg';


const FilterValues = {
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

const filters = Object.entries(FilterValues);

const QuestsFilter = () => {

  const clickHandler = (val: string) => {
    console.log(val);
  }

  return (
    <S.Tabs>
      {filters.map(([filterName, filterValue]) => {
        const DynamicImg = filterValue.img;

        return ( <S.TabItem key={filterName} onClick={() => clickHandler(filterName)}>
          <S.TabBtn>
            <DynamicImg />
            <S.TabTitle>{filterValue.name}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>);
      })}
    </S.Tabs>
  );
}
//<S.Tabs onClick={(evt) => clickHandler(evt)}> memory problems
export default QuestsFilter;
