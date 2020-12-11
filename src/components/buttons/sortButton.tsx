import React from 'react';

type Props = {
  order: string,
  changeSort: Function
}


export const SortButton: React.FC<Props> = ({order, changeSort}) => {
  
  const handleClick = () => {
    changeSort();
  }
  
  return(
    <div>
      {order === 'asc'
      ? <button onClick={handleClick}>Sort Descending</button>
      : <button onClick={handleClick}>Sort Ascending</button>}
    </div>
  )
  
}
