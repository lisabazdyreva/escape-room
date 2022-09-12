import * as S from '../quests-catalog/quests-catalog.styled';

import { useDispatch, useSelector } from 'react-redux';
import { getFilteredQuests, setActiveFilter } from '../../../../store/actions/actions';
import { setActiveFilter as activeFilterSelector} from '../../../../store/app-process/selectors';
import { setFetchStatusQuests as setFetchStatusQuestsSelector } from '../../../../store/app-status/selectors';

import { filters } from '../../../../const';
import { FetchStatusGet } from '../../../../types/types';
import { getTypeName } from '../../../../utils/utils';


const QuestsFilter = () => {
  const dispatch = useDispatch();

  const loadingStatus = useSelector(setFetchStatusQuestsSelector);
  const activeFilter = useSelector(activeFilterSelector);

  const clickHandler = (value: string) => {
    if (loadingStatus === FetchStatusGet.Success) {
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
            disabled={ loadingStatus !== FetchStatusGet.Success }
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
