export type Launch = {
  flight_number: number,
  mission_name: string,
  launch_year: number,
  launch_date_utc: string,
  rocket: {rocket_name: string}
  rocket_name: string
}

const filters = `?filter=flight_number,mission_name,launch_year,launch_date_utc,rocket/rocket_name`;

export const fetchLaunchDetails = async () => {
  try{
    const mainEndpoint = `https://api.spacexdata.com/v3/launches`;
    const filteredEndpoint = mainEndpoint + filters;
    
    //double await because we first await the fetch and then we await the conversion to json
    const fetchedLaunches = await (await fetch(filteredEndpoint)).json();
    return fetchedLaunches.map((launch: Launch) => (
    {
      flight_number: launch.flight_number,
      mission_name: launch.mission_name,
      launch_year: launch.launch_year,
      launch_date_utc: launch.launch_date_utc,
      rocket_name: launch.rocket.rocket_name
    }))
      
  } catch (err){
    console.log(err.message);
  }
}
