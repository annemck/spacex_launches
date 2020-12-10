import React from 'react';
import {ReloadButton} from './reloadButton';
import {FilterByYear} from './yearFilterButton';
import {SortButton} from './sortButton';

type Props = {
  loaded: boolean,
  sortOrder: string,
  years: number[],
  sort: Function
}

const ButtonContainer: React.FC<Props> = ({loaded, sortOrder, sort, years}) => {
  return(
    <div>
      <ReloadButton/>
      {loaded ?
        <React.Fragment>
          <FilterByYear launchYears={years}/>
          <SortButton order={sortOrder} changeSort={sort}/>
        </React.Fragment>
      : null}
    </div>
  )
}

export default ButtonContainer;
