import * as S from '../quests-catalog/quests-catalog.styled';

import { useDispatch, useSelector } from 'react-redux';
import { getFilteredQuests, setActiveFilter } from '../../../../store/actions/actions';
import { setActiveFilter as activeFilterSelector} from '../../../../store/app-process/selectors';
import { setFetchStatusQuests as setFetchStatusQuestsSelector } from '../../../../store/app-status/selectors';

import { FilterValues, FiltersToType } from '../../../../const';

const filters = Object.entries(FilterValues);

const QuestsFilter = () => {
  let isDisabled = true;
  const isSuccessLoaded = useSelector(setFetchStatusQuestsSelector);

  if (isSuccessLoaded === 'success') {
    isDisabled = false;
  }

  const dispatch = useDispatch();

  const clickHandler = (val: string) => {
    if (isSuccessLoaded) {
      dispatch(setActiveFilter(val));

      const findTypeName = Object.entries(FiltersToType).find(([key]) => key === val);
      const typeName = findTypeName ? findTypeName[1] : 'allQuests';
      dispatch(getFilteredQuests(typeName));
    }
  }

  const activeFilter = useSelector(activeFilterSelector);

  return (
    <S.Tabs>
      {filters.map(([filterName, filterValue]) => {
        const DynamicImg = filterValue.img;

        return ( <S.TabItem key={filterName} >
          <S.TabBtn onClick={ () => clickHandler(filterName) } disabled={ isDisabled } isActive={ activeFilter === filterName }>
            <DynamicImg />
            <S.TabTitle>{filterValue.name}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>);
      })}
    </S.Tabs>
  );
}

export default QuestsFilter;
