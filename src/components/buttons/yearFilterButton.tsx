import React from 'react';

type Props = {
  launchYears: number[],
  selectedYear: number | null,
  handleFilter: Function
}


export const FilterByYear: React.FC<Props> = ({launchYears, selectedYear, handleFilter}) => {
  
  const filter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleFilter(event.target.value);
  }
  
  
  let currentFilter:number;
  
  if (selectedYear !== null){
    currentFilter = selectedYear;
  } else {
    currentFilter = 0;
  }

  
  return(
    <div className="year_filter">
      <select aria-label="filter by year" data-testid="select_list" onChange={filter} defaultValue={currentFilter}>
        <option data-testid="zero">Filter by Year </option>
        {launchYears.map((year) => (
          <option data-testid={year} key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
  )
  

  
}
