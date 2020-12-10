import React from 'react';
import {ReloadButton} from './reloadButton';
import {FilterByYear} from './yearFilterButton';
import {SortButton} from './sortButton';

type Props = {
  loaded: boolean,
  sortOrder: string,
  sort: Function
}

const ButtonContainer: React.FC<Props> = ({loaded, sortOrder, sort}) => {
  return(
    <div>
      <ReloadButton/>
      {loaded ?
        <React.Fragment>
          <FilterByYear/>
          <SortButton order={sortOrder} changeSort={sort}/>
        </React.Fragment>
      : null}
    </div>
  )
}

export default ButtonContainer;
