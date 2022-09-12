import * as S from '../quests-catalog/quests-catalog.styled';

import { useDispatch, useSelector } from 'react-redux';
import { getFilteredQuests, setActiveFilter } from '../../../../store/actions/actions';
import { setActiveFilter as activeFilterSelector} from '../../../../store/app-process/selectors';
import { setFetchStatusQuests as setFetchStatusQuestsSelector } from '../../../../store/app-status/selectors';

import { FilterValues, FetchStatus } from '../../../../const';
import { getTypeName } from '../../../../utils/utils';

export const filters = Object.entries(FilterValues);


const QuestsFilter = () => {
  const dispatch = useDispatch();

  const loadingStatus = useSelector(setFetchStatusQuestsSelector);
  const activeFilter = useSelector(activeFilterSelector);

  const clickHandler = (value: string) => {
    if (loadingStatus === FetchStatus.Success) {
      dispatch(setActiveFilter(value));
      const typeName = getTypeName(value);
      dispatch(getFilteredQuests(typeName));
    }
  }

  return (
    <S.Tabs>
      {filters.map(([filterName, filterValue]) => {
        const DynamicImg = filterValue.img;

        return ( <S.TabItem key={filterName} >
          <S.TabBtn
            onClick={ () => clickHandler(filterName) }
            disabled={ loadingStatus !== FetchStatus.Success }
            isActive={ activeFilter === filterName }
          >
            <DynamicImg />
            <S.TabTitle>
              {filterValue.name}
            </S.TabTitle>
          </S.TabBtn>
        </S.TabItem>);
      })}
    </S.Tabs>
  );
}

export default QuestsFilter;
