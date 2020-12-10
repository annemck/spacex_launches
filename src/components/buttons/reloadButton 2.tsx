import React from 'react';

const ReloadButton = () => {
  
  const refresh = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('button pressed');
  }
  
  return(
    <button onClick={refresh}>Reload</button>
  )
}

export default ReloadButton;
