import React, {useState} from 'react';

type Props = {
  launchYears: number[]
}


export const FilterByYear: React.FC<Props> = ({launchYears}) => {
  console.log(launchYears);
  return(
    <div>
    <select>
      <option>Filter by Year</option>
      {launchYears.map(year => (
        <option key={year} value={year}>{year}</option>
      ))}
    </select>
    </div>
  )
  
}
