import React from 'react';

type Props = {
  launches: any[]
}

const LaunchListItem: React.FC<Props> = ({launches}) => {
  
  return(
    <div>
      {launches.map(launch => (
        <li key={launch.mission_name} className="list_element">
        
          <div className="list_item_container_left">
            <p className="flight_number">#{launch.flight_number}</p>
            <p className="mission_name">{launch.mission_name}</p>
          </div>
          
          <div className="list_item_container_right">
            <p className="launch_date">{launch.launch_date}</p>
            <p className="rocket_name">{launch.rocket_name}</p>
          </div>
          
        </li>
      ))}
    </div>
  )
  
}

export default LaunchListItem;
