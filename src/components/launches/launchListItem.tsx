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


// let dateString = '02/05/2020';
// let momentVariable = moment(dateString, 'MM-DD-YYYY');
// let stringvalue = momentVariable.format('YYYY-MM-DD');
// console.log(stringvalue); // outputs 2020-05-02
