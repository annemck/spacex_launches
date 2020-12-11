import React from 'react';
import {ReloadButton} from './reloadButton';
import {FilterByYear} from './yearFilterButton';
import {SortButton} from './sortButton';

type Props = {
  loaded: boolean,
  sortOrder: string,
  years: number[],
  selectedYear: number | null,
  sort: Function,
  filter: Function
}

const ButtonContainer: React.FC<Props> = ({loaded, sortOrder, years, selectedYear, sort, filter}) => {
  // return(
  //   <div>
  //     <ReloadButton/>
  //     {loaded ?
  //       <React.Fragment>
  //         <FilterByYear launchYears={years} selectedYear={selectedYear} handleFilter={filter}/>
  //         <SortButton order={sortOrder} changeSort={sort}/>
  //       </React.Fragment>
  //     : null}
  //   </div>
  // )
  
  return(
    <div>
      <ReloadButton/>
      
      {loaded || selectedYear ?
        <React.Fragment>
          <FilterByYear launchYears={years} selectedYear={selectedYear} handleFilter={filter} />
        </React.Fragment>
      : null}
      
      {loaded ?
        <React.Fragment>
          <SortButton order={sortOrder} changeSort={sort}/>
        </React.Fragment>
      : null}
    </div>
  )
}

export default ButtonContainer;
