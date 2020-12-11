import React from 'react';
import LaunchListItem from './launchListItem';

type Props = {
  launches: any[]
}

const LaunchContainer: React.FC<Props> = ({launches}) => {
  return(
    <ul className="launch_list">
      <LaunchListItem launches={launches}/>
    </ul>
  )
}

export default LaunchContainer;
