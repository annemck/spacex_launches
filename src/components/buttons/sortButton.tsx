import React, {useState} from 'react';


export const SortButton = () => {
  const [order, setOrder] = useState('asc');
  
  const handleClick = () => {
    if (order === 'asc'){
      setOrder('desc');
    } else {
      setOrder('asc')
    }
  }
  
  return(
    <div>
      {order === 'asc'
      ? <button onClick={handleClick}>Sort Descending</button>
      : <button onClick={handleClick}>Sort Ascending</button>}
    </div>
  )
  
}
