import React from 'react';

type Props = {
  launches: any[]
}

const LaunchListItem: React.FC<Props> = ({launches}) => {
  return(
    <div>
    {launches.map(launch => (
      <li key={launch.mission_name}>
        {launch.flight_number} {launch.mission_name} {launch.launch_date} {launch.rocket_name}
      </li>
    ))}
    </div>
  )
}

export default LaunchListItem;
