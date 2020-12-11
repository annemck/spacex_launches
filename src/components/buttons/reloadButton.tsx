import React from 'react';

type Props = {
  reload: Function
}

export const ReloadButton: React.FC<Props> = ({reload}) => {
  
  const handleReload = () => {
    reload();
  }
  
  return(
    <button data-testid="reload-button" onClick={handleReload}>Reload Button</button>
  )
}
