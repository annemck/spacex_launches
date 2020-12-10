import React from 'react';
import {ReloadButton} from './reloadButton';
import {FilterByYear} from './yearFilterButton';
import {SortButton} from './sortButton';

type Props = {
  loaded: boolean
}

const ButtonContainer: React.FC<Props> = ({loaded}) => {
  return(
    <div>
      <ReloadButton/>
      {loaded ?
        <React.Fragment>
          <FilterByYear/>
          <SortButton/>
        </React.Fragment>
      : null}
    </div>
  )
}

export default ButtonContainer;
