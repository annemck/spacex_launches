import React from 'react';

type Props = {
  launches: any[]
}

const LaunchListItem: React.FC<Props> = ({launches}) => {
  
  return(
    <div>
    {launches.map(launch => (
      <div className="list_element">
      <li key={launch.mission_name}>
      <div className="list_item_container_left">
        <p className="flight_number">#{launch.flight_number}</p>
        <p className="mission_name">{launch.mission_name}</p>
        </div>
        <div className="list_item_container_right">
        <p className="launch_date">{launch.launch_date}</p>
        <p className="rocket_name">{launch.rocket_name}</p>
        </div>
      </li>
      </div>
    ))}
    </div>
  )
}

export default LaunchListItem;
