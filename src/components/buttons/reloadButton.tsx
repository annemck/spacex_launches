import React from 'react';
import * as refreshIcon from '../../assets/icons/refresh.png';


type Props = {
  reload: Function
}

export const ReloadButton: React.FC<Props> = ({reload}) => {
  
  const handleReload = () => {
    reload();
  }
  
  return(
    <button data-testid="reload-button" onClick={handleReload} className="reload_button">Reload Data <img src={refreshIcon} alt=""/></button>
  )
}
