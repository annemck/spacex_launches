import React, {useState} from 'react';


export const SortButton = () => {
  const [order, setOrder] = useState('asc');
  
  const handleClick = () => {
    if (order === 'asc'){
      setOrder('desc');
      console.log(order);
    } else {
      setOrder('asc')
      console.log(order);
    }
    console.log('clicked');
  }
  
  return(
    <div>
      {order === 'asc'
      ? <button onClick={handleClick}>Sort Descending</button>
      : <button onClick={handleClick}>Sort Ascending</button>}
    </div>
  )
  
}
