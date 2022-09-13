import * as S from './quest-filter.styled';

import { useDispatch, useSelector } from 'react-redux';
import { getFilteredQuests, setActiveFilter } from '../../../../store/actions/actions';
import { setActiveFilter as activeFilterSelector} from '../../../../store/app-process/selectors';
import { setFetchStatusQuests as setFetchStatusQuestsSelector } from '../../../../store/app-status/selectors';

import { FetchStatus, FilterDictionary } from '../../../../const';
import { filters, getQuestTypeName } from '../../../../utils/utils';


const QuestsFilter = () => {
  const dispatch = useDispatch();

  const loadingStatus = useSelector(setFetchStatusQuestsSelector);
  const activeFilter = useSelector(activeFilterSelector);

  const clickHandler = (filter: keyof typeof FilterDictionary) => {
    if (loadingStatus === FetchStatus.Success) {
      dispatch(setActiveFilter(filter));
      const questType = getQuestTypeName(filter);
      dispatch(getFilteredQuests(questType));
    }
  }

  return (
    <S.Tabs>
      {filters.map(({name, rusName, icon}) => {
        const DynamicIcon = icon;

        return ( <S.TabItem key={name} >
          <S.TabBtn
            onClick={ () => clickHandler(name) }
            disabled={ loadingStatus !== FetchStatus.Success }
            isActive={ activeFilter === name }
          >
            <DynamicIcon />
            <S.TabTitle>
              {rusName}
            </S.TabTitle>
          </S.TabBtn>
        </S.TabItem>);
      })}
    </S.Tabs>
  );
}

export default QuestsFilter;
