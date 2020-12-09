import React from 'react';

type Props = {
  launches: any[]
}

const LaunchListItem: React.FC<Props> = ({launches}) => {
  return(
    <div>
    {launches.map(launch => (
      <li key={launch.mission_name}>
        launch item here
      </li>
    ))}
    </div>
  )
}

export default LaunchListItem;
