import * as S from '../quests-catalog/quests-catalog.styled';

import { ReactComponent as IconAllQuests } from '../../../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../../../assets/img/icon-scifi.svg';

import { useDispatch, useSelector } from 'react-redux';
import { getFilteredQuests, setActiveFilter } from '../../../../store/actions/actions';
import { setActiveFilter as activeFilterSelector} from '../../../../store/app-process/selectors';

const FiltersToType = {
  adventures: 'adventures',
  horrors: 'horror',
  mystic: 'mystic',
  detective: 'detective',
  scifi: 'sci-fi',
} as const;

const FilterValues = {
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

const filters = Object.entries(FilterValues);

const QuestsFilter = () => {
  const dispatch = useDispatch();

  const clickHandler = (val: string) => {
    dispatch(setActiveFilter(val));

    const findTypeName = Object.entries(FiltersToType).find(([key]) => key === val);
    const typeName = findTypeName ? findTypeName[1] : 'allQuests';
    dispatch(getFilteredQuests(typeName));
  }

  const activeFilter = useSelector(activeFilterSelector);

  return (
    <S.Tabs>
      {filters.map(([filterName, filterValue]) => {
        const DynamicImg = filterValue.img;


        return ( <S.TabItem key={filterName} onClick={() => clickHandler(filterName)}>
          <S.TabBtn isActive={ activeFilter === filterName }>
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
