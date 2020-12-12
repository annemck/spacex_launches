import React from 'react';
import sortIcon from '../../assets/icons/sort.png';

type Props = {
  order: string,
  changeSort: Function
}


export const SortButton: React.FC<Props> = ({order, changeSort}) => {
  
  const handleClick = () => {
    changeSort();
  }
  
  return(
    <div className="sort_button">
      {order === 'asc'
      ? <button onClick={handleClick}>Sort Descending <img src={sortIcon}/></button>
      : <button onClick={handleClick}>Sort Ascending <img src={sortIcon}/></button>}
    </div>
  )
  
}
