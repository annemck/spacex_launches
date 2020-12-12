import React from 'react';
import {ReloadButton} from './reloadButton';
import {FilterByYear} from './yearFilterButton';
import {SortButton} from './sortButton';

type Props = {
  hasLoaded: boolean,
  sortOrder: string,
  years: number[],
  selectedYear: number | null,
  sort: Function,
  filter: Function,
  reload: Function
}

const ButtonContainer: React.FC<Props> = ({hasLoaded, sortOrder, years, selectedYear, sort, filter, reload}) => {
  
  return(
    <div className="all_buttons">
      <div className="single_button">
        <ReloadButton reload={reload}/>
      </div>
      
      <div className="inline_buttons">
      {hasLoaded || selectedYear ?
        <React.Fragment>
          <FilterByYear launchYears={years} selectedYear={selectedYear} handleFilter={filter} />
        </React.Fragment>
      : null}
      
      {hasLoaded ?
        <React.Fragment>
          <SortButton order={sortOrder} changeSort={sort}/>
        </React.Fragment>
      : null}
      </div>
    </div>
  )
}

export default ButtonContainer;
