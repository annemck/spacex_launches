import React from 'react';
import LaunchListItem from './launchListItem';

type Props = {
  launches: any[]
}

const LaunchContainer: React.FC<Props> = ({launches}) => {
  return(
    <ul>
      <LaunchListItem/>
    </ul>
  )
}

export default LaunchContainer;
